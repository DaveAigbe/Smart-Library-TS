import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

interface Props {
  username: string;
}

const Profile: FunctionComponent<Props> = ({ username }) => {
  return (
    <section className={"flex items-center justify-center gap-2"}>
      <p className={"text-lg text-main-header"}>Hello, {username}</p>
      <Link to={"/account"}>
        <button
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
    </section>
  );
};

export default Profile;
