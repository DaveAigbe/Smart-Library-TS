import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";

interface Props {
  openForm: (state?: boolean) => void;
}

const AddVideoToGenreButton: FunctionComponent<Props> = ({ openForm }) => {
  return (
    <button
      type="button"
      title={`Click to Add or Remove video from Genres`}
      onClick={() => openForm()}
    >
      <Icon
        className={
          "absolute top-10 right-2 text-2xl text-white transition duration-300 ease-in-out hover:text-green-600"
        }
        icon="akar-icons:circle-plus-fill"
      />
    </button>
  );
};

export default AddVideoToGenreButton;
