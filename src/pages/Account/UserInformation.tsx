import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import {
  selectAccountCreationDate,
  selectUsername,
} from "../../store/slices/userSlice";
import {
  selectGenresCount,
  selectVideosCount,
} from "../../store/slices/librarySlice";

interface Props {}

const UserInformation: FunctionComponent<Props> = () => {
  const username = useSelector(selectUsername);
  const genresCount = useSelector(selectGenresCount);
  const videosCount = useSelector(selectVideosCount);
  const accountCreationDate = useSelector(
    selectAccountCreationDate
  ).toDateString();

  return (
    <section>
      <ul
        className={
          "flex flex-col gap-12 text-center text-2xl text-main-txt sm:text-4xl"
        }
      >
        <li>
          Username: <span className={"font-bold"}>{username}</span>
        </li>
        <li>
          Account Created:{" "}
          <span className={"font-bold"}>{accountCreationDate}</span>
        </li>
        <li>
          Number of Videos: <span className={"font-bold"}>{videosCount}</span>
        </li>
        <li>
          Number of Genres: <span className={"font-bold"}>{genresCount}</span>
        </li>
      </ul>
    </section>
  );
};

export default UserInformation;
