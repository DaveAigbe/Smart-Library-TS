import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { selectCurrentGenre } from "../../../../store/slices/librarySlice";
import TitleCase from "../../../../utils/titleCase";

interface Props {
  openForm: () => void;
}

const AddVideoToGenreButton: FunctionComponent<Props> = ({ openForm }) => {
  const currentGenre: string = useSelector(selectCurrentGenre);
  return (
    <button
      title={`Add or remove video from ${TitleCase(currentGenre)}`}
      onClick={openForm}
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
