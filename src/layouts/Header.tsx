import React, { FunctionComponent } from "react";

interface Props {}

const Header: FunctionComponent<Props> = () => {
  return (
    <header className={"fixed top-0 right-0 left-0 bg-brown-400"}>
      Header
    </header>
  );
};

export default Header;
