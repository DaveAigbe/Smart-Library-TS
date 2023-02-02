import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import VerticalNavDivider from "./VerticalNavDivider";

interface Props {}

const NavLogo: FunctionComponent<Props> = () => {
  return (
    <Link to={"/"}>
      <section
        className={
          "mr-2 flex items-center justify-center gap-2 text-lg text-main-txt md:text-2xl"
        }
      >
        <h2>Smart Library</h2>
        <Icon icon="game-icons:bookshelf" />
        <VerticalNavDivider />
      </section>
    </Link>
  );
};

export default NavLogo;
