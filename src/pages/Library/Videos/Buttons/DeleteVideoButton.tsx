import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteVideo,
  selectCurrentGenre,
  selectGenres,
} from "../../../../store/slices/librarySlice";
import { Genres } from "../../../../types/Types";
import TitleCase from "../../../../utils/titleCase";

interface Props {
  id: string;
  deleteVideoNotification: () => void;
}

const DeleteVideoButton: FunctionComponent<Props> = ({
  id,
  deleteVideoNotification,
}) => {
  const genres: Genres = useSelector(selectGenres);
  const dispatch = useDispatch();
  const currentGenre: string = useSelector(selectCurrentGenre);

  const handleDeleteVideo = () => {
    dispatch(deleteVideo({ id: id, genres }));
    deleteVideoNotification();
  };

  return (
    <button
      title={`Click to Remove video from ${
        currentGenre === "all"
          ? "Entire LibraryPage"
          : `${TitleCase(currentGenre)} Genre`
      }`}
      onClick={handleDeleteVideo}
    >
      <Icon
        className={
          "absolute top-2 right-2 text-2xl text-white transition duration-300 ease-in-out hover:text-red-600"
        }
        icon="akar-icons:circle-x-fill"
      />
    </button>
  );
};

export default DeleteVideoButton;
