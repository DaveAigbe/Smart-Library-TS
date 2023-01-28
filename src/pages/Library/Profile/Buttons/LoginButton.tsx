import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface Props {
  login: () => void;
}

const LoginButton: FunctionComponent<Props> = ({ login }) => {
  return (
    <Link to={"/login"}>
      <button
        type="button"
        className="rounded bg-main-hlt px-6 py-2.5 text-xs font-bold uppercase text-main-txt shadow-md transition
      duration-150 ease-in-out hover:bg-main-hlthover hover:shadow-lg"
        onClick={login}
      >
        Login
      </button>
    </Link>
  );
};

export default LoginButton;
