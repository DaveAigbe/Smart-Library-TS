import { Outlet } from "react-router-dom";
import Layout from "../layouts/Layout";
import { useEffect } from "react";
import handleVideosLocalStorage from "../utils/handleVideosLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsInitialState,
  selectLibrary,
} from "../store/slices/librarySlice";

function Root() {
  const dispatch = useDispatch();
  const library = useSelector(selectLibrary);
  const isInitialState = useSelector(selectIsInitialState);

  useEffect(() => {
    handleVideosLocalStorage(library, dispatch, isInitialState);
  }, []);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default Root;
