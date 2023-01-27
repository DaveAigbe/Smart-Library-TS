import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";

interface Props {
  openForm: () => void;
}

const AddGenreButton: FunctionComponent<Props> = ({ openForm }) => {
  return (
    <div onClick={openForm}>
      <Icon
        className={
          "cursor-pointer self-center text-4xl text-white transition-all duration-150 ease-in-out hover:text-main-hlt "
        }
        icon="ant-design:plus-square-twotone"
      />
    </div>
  );
};

export default AddGenreButton;
