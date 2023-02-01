import React, { FunctionComponent, useState } from "react";
import VideoThumbnail from "./VideoThumbnail";
import { useSelector } from "react-redux";
import { selectCurrentVideos } from "../../../store/slices/librarySlice";
import EmptyGenre from "../EmptyGenre";
import SnackbarNotification from "../../../components/SnackbarNotification";
import { timedNotification } from "../../../utils/timedNotification";

interface Props {}

const VideosContainer: FunctionComponent<Props> = () => {
  const currentVideos: string[] = useSelector(selectCurrentVideos);
  const [deleteVideoNotification, setDeleteVideoNotification] =
    useState<boolean>(false);

  return (
    <section
      className={"container flex max-w-8xl flex-wrap justify-center gap-6"}
    >
      <SnackbarNotification
        message={"Video Successfully Deleted."}
        state={"success"}
        showNotification={deleteVideoNotification}
      />
      {currentVideos.length > 0 ? (
        currentVideos.map((id: string) => {
          return (
            <React.Fragment key={id}>
              <VideoThumbnail
                id={id}
                deleteVideoNotification={() =>
                  timedNotification(setDeleteVideoNotification, 4)
                }
              />
            </React.Fragment>
          );
        })
      ) : (
        <EmptyGenre />
      )}
    </section>
  );
};

export default VideosContainer;
