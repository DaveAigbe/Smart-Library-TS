import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeGenre,
  selectCurrentGenre,
} from "../../../../store/slices/librarySlice";
import titleCase from "../../../../utils/titleCase";

interface Props {
  genre: string;
}

const GenreButton: FunctionComponent<Props> = ({ genre }) => {
  const dispatch = useDispatch();
  const currentGenre: string = useSelector(selectCurrentGenre);
  return (
    <button
      onClick={() => dispatch(changeGenre(genre))}
      className={
        "rounded-lg bg-gradient-to-br from-main-txt to-main-primary " +
        "hover:delay px-5 py-2 text-center text-sm tracking-wide hover:bg-gradient-to-tl " +
        `${
          currentGenre === genre
            ? "text-main-hlt ring-2 ring-main-hlt"
            : "text-main-pg"
        }`
      }
    >
      {titleCase(genre)}
    </button>
  );
};

export default GenreButton;
