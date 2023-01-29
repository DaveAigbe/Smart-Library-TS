import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

interface Props {}

const NavLogo: FunctionComponent<Props> = () => {
  return (
    <Link to={"/"}>
      <section
        className={"mr-2 flex items-center justify-center gap-2 text-2xl"}
      >
        <h2>Smart Library</h2>
        <Icon icon="game-icons:bookshelf" />
        <div className={"h-8 w-0.5 bg-black"}></div>
      </section>
    </Link>
  );
};

export default NavLogo;
