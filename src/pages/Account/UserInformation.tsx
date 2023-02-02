import React, { FunctionComponent } from "react";

interface Props {}

const UserInformation: FunctionComponent<Props> = () => {
  return (
    <section>
      <ul
        className={
          "flex flex-col gap-12 text-center text-2xl text-main-txt sm:text-4xl"
        }
      >
        <li>Username: VOID</li>
        <li>Last Login: VOID</li>
        <li># of Videos: VOID</li>
        <li># of Genres: VOID</li>
      </ul>
    </section>
  );
};

export default UserInformation;
