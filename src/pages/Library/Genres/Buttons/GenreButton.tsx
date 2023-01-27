import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { changeGenre } from "../../../../store/slices/videosSlice";
import titleCase from "../../../../utils/titleCase";

interface Props {
  genre: string;
}

const GenreButton: FunctionComponent<Props> = ({ genre }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(changeGenre(genre))}
      className={
        "rounded-lg bg-gradient-to-br from-main-txt to-main-primary " +
        "hover:delay px-5 py-2 text-center text-sm tracking-wide text-main-pg hover:bg-gradient-to-tl focus:ring-2 focus:ring-main-hlt "
      }
    >
      {titleCase(genre)}
    </button>
  );
};

export default GenreButton;
