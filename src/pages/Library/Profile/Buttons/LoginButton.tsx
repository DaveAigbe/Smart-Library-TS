import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import NavButton from "../../../../components/NavButton";

interface Props {
  login: () => void;
}

const LoginButton: FunctionComponent<Props> = ({ login }) => {
  return (
    <Link to={"/login"}>
      <NavButton
        label={"login"}
        handleClick={login}
        backgroundColor={"main-hlt"}
        hoverBackgroundColor={"main-hlthover"}
        labelColor={"main-txt"}
      />
    </Link>
  );
};

export default LoginButton;
