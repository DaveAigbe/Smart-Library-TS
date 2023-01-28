import React, { FunctionComponent } from "react";

interface Props {
  logout: () => void;
}

const LoginButton: FunctionComponent<Props> = ({ logout }) => {
  return (
    <button
      type="button"
      className="rounded bg-red-400 px-6 py-2.5 text-xs font-bold uppercase text-main-pg shadow-md transition
      duration-150 ease-in-out hover:bg-red-500 hover:shadow-lg"
      onClick={logout}
    >
      Logout
    </button>
  );
};

export default LoginButton;
