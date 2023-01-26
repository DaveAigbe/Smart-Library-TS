import React, { FunctionComponent } from "react";
import VideoThumbnail from "./VideoThumbnail";
import { useSelector } from "react-redux";
import { selectVideos } from "../../../store/slices/videosSlice";

interface Props {}

const VideosContainer: FunctionComponent<Props> = () => {
  const videos = useSelector(selectVideos);
  return (
    <section className={"flex max-w-8xl flex-wrap justify-center gap-6"}>
      {videos.map((id: string) => {
        return (
          <React.Fragment key={id}>
            <VideoThumbnail id={id} />
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default VideosContainer;
