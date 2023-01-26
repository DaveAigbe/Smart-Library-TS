import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";

interface Props {}

const DeleteVideoButton: FunctionComponent<Props> = () => {
  return (
    <button>
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
