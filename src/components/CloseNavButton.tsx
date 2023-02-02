import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";

interface Props {
  closeNav: () => void;
}

const CloseNavButton: FunctionComponent<Props> = ({ closeNav }) => {
  return (
    <button
      type={"button"}
      className={"text-4xl text-red-600 lg:hidden"}
      onClick={closeNav}
    >
      <Icon icon="ant-design:close-square-twotone" />
    </button>
  );
};

export default CloseNavButton;
