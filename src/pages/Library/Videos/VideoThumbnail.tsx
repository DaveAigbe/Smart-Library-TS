import React, { FunctionComponent } from "react";
import DeleteVideoButton from "./Buttons/DeleteVideoButton";
import AddVideoToGenreButton from "./Buttons/AddVideoToGenreButton";
import VideoModal from "./VideoModal";
import { useToggleActive } from "../../../hooks/useToggleActive";
import AddVideoToGenreFormModal from "./Forms/AddVideoToGenreFormModal";

interface Props {
  id: string;
  deleteVideoNotification: () => void;
}

const VideoThumbnail: FunctionComponent<Props> = ({
  id,
  deleteVideoNotification,
}) => {
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
        onClick={() => toggleVideoActive()}
        className={
          "aspect-ratio cursor-pointer rounded-2xl md:h-186  c-md:h-214  lg:h-259  c-xl:h-315 "
        }
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt="Youtube video thumbnail"
      />
      <section>
        <DeleteVideoButton
          id={id}
          deleteVideoNotification={deleteVideoNotification}
        />
        <AddVideoToGenreButton openForm={toggleFormActive} />
      </section>
      {videoActive && (
        <VideoModal id={id} toggleVideoActive={toggleVideoActive} />
      )}
      {formActive && (
        <AddVideoToGenreFormModal toggleFormActive={toggleFormActive} id={id} />
      )}
    </section>
  );
};

export default VideoThumbnail;
