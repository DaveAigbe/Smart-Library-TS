import React, { FunctionComponent } from "react";
import VideoThumbnail from "./VideoThumbnail";
import { useSelector } from "react-redux";
import { selectVideos } from "../../../store/slices/librarySlice";
import EmptyGenre from "../EmptyGenre";

interface Props {}

const VideosContainer: FunctionComponent<Props> = () => {
  const videos = useSelector(selectVideos);
  return (
    <section className={"flex max-w-8xl flex-wrap justify-center gap-6"}>
      {videos.length > 0 ? (
        videos.map((id: string) => {
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
