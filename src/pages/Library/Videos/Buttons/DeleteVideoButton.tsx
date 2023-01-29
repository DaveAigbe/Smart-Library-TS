import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteVideo,
  selectCurrentGenre,
  selectGenres,
} from "../../../../store/slices/librarySlice";
import { Genres } from "../../../../types/Genres";
import TitleCase from "../../../../utils/titleCase";

interface Props {
  id: string;
}

const DeleteVideoButton: FunctionComponent<Props> = ({ id }) => {
  const genres: Genres = useSelector(selectGenres);
  const dispatch = useDispatch();
  const currentGenre: string = useSelector(selectCurrentGenre);

  return (
    <button
      title={`Click to Remove video from ${
        currentGenre === "all"
          ? "Entire Library"
          : `${TitleCase(currentGenre)} Genre`
      }`}
      onClick={() => dispatch(deleteVideo({ id: id, genres }))}
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
