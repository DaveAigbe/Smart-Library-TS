import React, { FunctionComponent } from "react";
import DeleteVideoButton from "./Buttons/DeleteVideoButton";
import AddVideoToGenreButton from "./Buttons/AddVideoToGenreButton";

interface Props {
  id: string;
}

const VideoThumbnail: FunctionComponent<Props> = ({ id }) => {
  return (
    <section className={"relative transition-all ease-in-out hover:scale-105"}>
      <img
        className={
          "cursor-pointer rounded-2xl md:h-186 md:w-330 c-md:h-214 c-md:w-380 lg:h-259 lg:w-460 c-xl:h-315 c-xl:w-560"
        }
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt="Youtube video thumbnail"
      />
      <section>
        <DeleteVideoButton />
        <AddVideoToGenreButton />
      </section>
    </section>
  );
};

export default VideoThumbnail;
