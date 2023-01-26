import React, { FunctionComponent } from "react";
import Description from "../pages/Home/Description";
import { Icon } from "@iconify/react";
import BigButton from "./BigButton";
import { Link } from "react-router-dom";
import AddVideoForm from "../pages/Library/Forms/AddVideoForm";
import useIsLibraryPage from "../hooks/useIsLibraryPage";

interface Props {}

const Introduction: FunctionComponent<Props> = () => {
  return (
    <section
      className={
        "relative z-10 my-14 flex flex-col items-center justify-center md:my-36 md:max-w-6xl lg:text-left"
      }
    >
      <div
        className={
          "mb-10 flex justify-center gap-4 text-4xl font-bold tracking-wide text-main-header sm:text-5xl md:text-8xl "
        }
      >
        <h1>Smart Library</h1>
        <Icon icon="game-icons:bookshelf" />
      </div>
      <div
        className={
          "flex flex-col gap-4 leading-loose text-main-pg sm:text-lg md:flex-row md:text-xl "
        }
      >
        <Description />
        {useIsLibraryPage() && <AddVideoForm />}
      </div>
      {!useIsLibraryPage() && (
        <Link to={"library"} className={"mt-10"}>
          <BigButton content={"Continue to Library ➔"} />
        </Link>
      )}
    </section>
  );
};

export default Introduction;
