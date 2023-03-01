import React, { FunctionComponent } from "react";
import NavButton from "../../../../components/NavButton";
import { Link, redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../../store/slices/userSlice";
import { resetLibrary } from "../../../../store/slices/librarySlice";

interface Props {}

const LoginButton: FunctionComponent<Props> = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("authToken");

    dispatch(logout({}));
    dispatch(resetLibrary({}));

    window.location.reload();
  };

  return (
    <Link to={"/login"}>
      <NavButton
        label={"logout"}
        backgroundColor={"#d90000"}
        hoverBackgroundColor={"black"}
        labelColor={"main-pg"}
        handleClick={handleLogout}
      />
    </Link>
  );
};

export default LoginButton;
