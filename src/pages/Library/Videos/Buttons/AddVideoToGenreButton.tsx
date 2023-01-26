import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";

interface Props {}

const AddVideoToGenreButton: FunctionComponent<Props> = () => {
  return (
    <button title={`Add or remove video from genres.`}>
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
