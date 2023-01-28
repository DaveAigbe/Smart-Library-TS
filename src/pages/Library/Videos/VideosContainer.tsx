import React, { FunctionComponent } from "react";
import VideoThumbnail from "./VideoThumbnail";
import { useSelector } from "react-redux";
import { selectCurrentVideos } from "../../../store/slices/librarySlice";
import EmptyGenre from "../EmptyGenre";

interface Props {}

const VideosContainer: FunctionComponent<Props> = () => {
  const currentVideos: string[] = useSelector(selectCurrentVideos);
  return (
    <section
      className={"container flex max-w-8xl flex-wrap justify-center gap-6"}
    >
      {currentVideos.length > 0 ? (
        currentVideos.map((id: string) => {
          return (
            <React.Fragment key={id}>
              <VideoThumbnail id={id} />
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
