import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";

interface Props {}

const AddGenreButton: FunctionComponent<Props> = () => {
  return (
    <div>
      <Icon
        className={
          "cursor-pointer self-center text-4xl text-white transition-all ease-in-out hover:text-main-hlt"
        }
        icon="ant-design:plus-square-twotone"
      />
    </div>
  );
};

export default AddGenreButton;
