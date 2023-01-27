import React, { FunctionComponent } from "react";
import DeleteVideoButton from "./Buttons/DeleteVideoButton";
import AddVideoToGenreButton from "./Buttons/AddVideoToGenreButton";
import Video from "./Video";
import { useToggleActive } from "../../../hooks/useToggleActive";
import AddVideoToGenreForm from "./Forms/AddVideoToGenreForm";

interface Props {
  id: string;
}

const VideoThumbnail: FunctionComponent<Props> = ({ id }) => {
  const [videoActive, toggleVideoActive] = useToggleActive();
  const [formActive, toggleFormActive] = useToggleActive();

  return (
    <section
      className={`relative ${
        !videoActive &&
        !formActive &&
        "transition-all ease-in-out hover:scale-105"
      }`}
    >
      <img
        onClick={toggleVideoActive}
        className={
          "cursor-pointer rounded-2xl md:h-186 md:w-330 c-md:h-214 c-md:w-380 lg:h-259 lg:w-460 c-xl:h-315 c-xl:w-560"
        }
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt="Youtube video thumbnail"
      />
      <section>
        <DeleteVideoButton id={id} />
        <AddVideoToGenreButton openForm={toggleFormActive} />
      </section>
      {videoActive && <Video id={id} toggleVideoActive={toggleVideoActive} />}
      {formActive && (
        <AddVideoToGenreForm toggleFormActive={toggleFormActive} id={id} />
      )}
    </section>
  );
};

export default VideoThumbnail;
