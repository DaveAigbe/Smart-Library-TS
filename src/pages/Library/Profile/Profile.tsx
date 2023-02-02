import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import LogoutButton from "./Buttons/LogoutButton";
import { useSelector } from "react-redux";
import { selectUsername } from "../../../store/slices/userSlice";

interface Props {}

const Profile: FunctionComponent<Props> = () => {
  const username = useSelector(selectUsername);

  return (
    <section className={"flex items-center justify-center gap-2"}>
      <p className={"text-lg text-main-header md:inline-flex md:text-xl"}>
        {username}
      </p>
      <Link to={"/library/account"}>
        <button
          title={"Account"}
          className={"flex items-center justify-center text-white md:right-5"}
        >
          <Icon
            className={
              "text-3xl text-main-header transition duration-300 ease-in-out hover:text-main-hlt"
            }
            icon="bi:person-circle"
          />
        </button>
      </Link>
      <div className={"hidden lg:inline-flex"}>
        <LogoutButton />
      </div>
    </section>
  );
};

export default Profile;
