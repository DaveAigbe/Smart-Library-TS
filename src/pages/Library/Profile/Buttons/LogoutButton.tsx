import React, { FunctionComponent } from "react";
import NavButton from "../../../../components/NavButton";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../../store/slices/userSlice";

interface Props {}

const LoginButton: FunctionComponent<Props> = () => {
  const dispatch = useDispatch();

  return (
    <Link to={"/login"}>
      <NavButton
        label={"logout"}
        backgroundColor={"#d90000"}
        hoverBackgroundColor={"black"}
        labelColor={"main-pg"}
        handleClick={() => dispatch(logout({}))}
      />
    </Link>
  );
};

export default LoginButton;
