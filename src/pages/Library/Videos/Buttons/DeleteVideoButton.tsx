import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteVideo } from "../../../../store/slices/videosSlice";
import { selectGenres } from "../../../../store/slices/genresSlice";

interface Props {
  id: string;
}

const DeleteVideoButton: FunctionComponent<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);

  return (
    <button onClick={() => dispatch(deleteVideo({ id: id, genres }))}>
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
