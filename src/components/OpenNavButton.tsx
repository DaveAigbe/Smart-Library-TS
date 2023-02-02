import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";

interface Props {
  openNav: () => void;
}

const OpenNavButton: FunctionComponent<Props> = ({ openNav }) => {
  return (
    <button
      type={"button"}
      className={"text-3xl text-main-txt lg:hidden"}
      onClick={openNav}
    >
      <Icon icon="icon-park-outline:hamburger-button" />
    </button>
  );
};

export default OpenNavButton;
