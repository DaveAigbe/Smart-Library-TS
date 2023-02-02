import React, { FunctionComponent } from "react";
import Description from "../pages/Home/Description";
import { Icon } from "@iconify/react";
import BigButton from "./BigButton";
import { Link } from "react-router-dom";
import AddVideoForm from "../pages/Library/Forms/AddVideoForm";
import useIsLibraryPage from "../hooks/useIsLibraryPage";
import useIsHomePage from "../hooks/useIsHomePage";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../store/slices/userSlice";

interface Props {}

const Introduction: FunctionComponent<Props> = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <section
      className={
        "relative z-10 my-14 flex flex-col items-center justify-center lg:my-36 lg:max-w-6xl lg:text-left"
      }
    >
      <div
        className={
          "mb-10 flex justify-center gap-4 text-4xl font-bold tracking-wide text-main-header md:text-5xl lg:text-8xl "
        }
      >
        <h1>Smart Library</h1>
        <Icon icon="game-icons:bookshelf" />
      </div>
      <div
        className={
          "flex flex-col gap-4 leading-loose text-main-pg md:text-lg lg:flex-row lg:text-xl "
        }
      >
        <Description />
        {useIsLibraryPage() && <AddVideoForm />}
      </div>
      {useIsHomePage() && (
        <Link to={"/login"} className={"mt-10"}>
          <BigButton
            content={
              isAuthenticated ? "Back To Library ➔" : "Continue to Login ➔"
            }
          />
        </Link>
      )}
    </section>
  );
};

export default Introduction;
