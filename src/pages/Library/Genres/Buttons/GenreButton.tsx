import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeGenre,
  selectCurrentGenre,
} from "../../../../store/slices/videosSlice";
import titleCase from "../../../../utils/titleCase";

interface Props {
  genre: string;
}

const GenreButton: FunctionComponent<Props> = ({ genre }) => {
  const dispatch = useDispatch();
  const currentGenre = useSelector(selectCurrentGenre);
  return (
    <button
      onClick={() => dispatch(changeGenre(genre))}
      className={
        "rounded-lg bg-gradient-to-br from-main-txt to-main-primary " +
        "hover:delay px-5 py-2 text-center text-sm tracking-wide text-main-pg hover:bg-gradient-to-tl " +
        `${currentGenre === genre ? "ring-2 ring-main-hlt" : ""}`
      }
    >
      {titleCase(genre)}
    </button>
  );
};

export default GenreButton;
