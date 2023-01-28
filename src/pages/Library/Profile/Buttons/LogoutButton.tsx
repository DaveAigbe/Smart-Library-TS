import React, { FunctionComponent } from "react";
import NavButton from "../../../../components/NavButton";

interface Props {
  logout: () => void;
}

const LoginButton: FunctionComponent<Props> = ({ logout }) => {
  return (
    <NavButton
      label={"logout"}
      handleClick={logout}
      backgroundColor={"red-400"}
      hoverBackgroundColor={"red-500"}
      labelColor={"main-pg"}
    />
  );
};

export default LoginButton;
