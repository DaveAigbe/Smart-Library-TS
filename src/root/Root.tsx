import { Outlet } from "react-router-dom";
import Layout from "../layouts/Layout";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsInitialState,
  selectIsLibraryUpToDate,
  selectLibrary,
  setInitialLibrary,
  setLibraryToUpdated,
} from "../store/slices/librarySlice";
import {
  login,
  selectDatabaseLibrary,
  selectIsAuthenticated,
} from "../store/slices/userSlice";
import { useMutation, useQuery } from "@apollo/client";
import { updateLibraryMutation } from "../gql/Mutations";
import { currentUserQuery } from "../gql/Queries";
import SnackbarNotification from "../components/SnackbarNotification";
import { timedNotification } from "../utils/timedNotification";

function Root() {
  const dispatch = useDispatch();
  const databaseLibrary = useSelector(selectDatabaseLibrary);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isInitialState = useSelector(selectIsInitialState);
  const isLibraryUpToDate = useSelector(selectIsLibraryUpToDate);
  const library = useSelector(selectLibrary);
  const [serverUpdateLibrary] = useMutation(updateLibraryMutation);
  const { loading, error, data } = useQuery(currentUserQuery);
  const [serverUpdateLibraryError, setServerUpdateLibraryError] =
    useState<boolean>(false);

  useEffect(() => {
    if (!isAuthenticated) {
      if (!loading && !error) {
        dispatch(
          login({
            email: data.currentUser.email,
            username: data.currentUser.username,
            library: JSON.parse(data.currentUser.library.data),
            createdAt: data.currentUser.createdAt,
          })
        );

        dispatch(setInitialLibrary(JSON.parse(data.currentUser.library.data)));
      }
    }

    if (isAuthenticated && isInitialState) {
      dispatch(setInitialLibrary(databaseLibrary));
    }

    if (!isLibraryUpToDate) {
      const updateLibraryOnServer = async () => {
        await serverUpdateLibrary({
          variables: { updatedLibrary: JSON.stringify(library) },
        }).catch((err) => {
          // Different behavior for 'user is not authenticated' vs 'failed to fetch'
          console.log((err as Error).message);
          timedNotification(setServerUpdateLibraryError, 4);
        });
      };

      updateLibraryOnServer();
      dispatch(setLibraryToUpdated({}));
    }
  }, [isAuthenticated, isLibraryUpToDate, data]);

  return (
    <Layout>
      <SnackbarNotification
        message={
          "Issue attempting to update library on server. Change will not be reflected for next session."
        }
        state={"error"}
        showNotification={serverUpdateLibraryError}
      />
      <Outlet />
    </Layout>
  );
}

export default Root;
