import React, { FunctionComponent } from "react";
import VideoThumbnail from "./VideoThumbnail";

interface Props {}

const VideosContainer: FunctionComponent<Props> = () => {
  const videos: string[] = [
    "DmxzHJ3lq6U",
    "uyI8vBC3Uj0",
    "26ogBZXeBwc",
    "s6UAuFzL308",
    "7wzMMBRVrfw",
    "novnyCaa7To",
    "rtR4s626ebE",
    "6OhMbf2v_jI",
    "HvPlEJ3LHgE",
    "QwQuro7ekvc",
    "q_RLfOB7axQ",
    "b42CJ0r-1to",
    "K1iu1kXkVoA",
    "l20MBBFZAmA",
    "j95Lwxvi9JY",
    "_8gHHBlbziw",
    "DHvZLI7Db8E",
    "2jqok-WgelI",
  ];
  return (
    <section className={"flex max-w-8xl flex-wrap justify-center gap-6"}>
      {videos.map((id) => {
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
