import React, { FunctionComponent } from "react";

interface Props {
  text: string;
}

const GenreButton: FunctionComponent<Props> = ({ text }) => {
  return (
    <button
      className={
        "rounded-lg bg-gradient-to-br from-main-txt to-main-primary " +
        "hover:delay px-5 py-2 text-center text-sm tracking-wide text-main-pg hover:bg-gradient-to-tl focus:ring-2 focus:ring-main-hlt "
      }
    >
      {text}
    </button>
  );
};

export default GenreButton;
