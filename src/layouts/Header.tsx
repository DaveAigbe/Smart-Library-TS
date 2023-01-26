import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";
import useIsHomepage from "../hooks/useIsHomepage";
import GenresTooltip from "../pages/Library/Genres/GenresTooltip";
import AddGenreButton from "../pages/Library/Genres/Buttons/AddGenreButton";
import GenreButton from "../pages/Library/Genres/Buttons/GenreButton";

interface Props {}

const Header: FunctionComponent<Props> = () => {
  return (
    <>
      {!useIsHomepage() ? (
        <header
          className={
            "fixed inset-x-0 top-0 z-20 flex items-center justify-between bg-brown-400 px-1 py-1.5"
          }
        >
          <section
            className={"flex items-center justify-center gap-2 text-2xl"}
          >
            <h2>Smart Library</h2>
            <Icon icon="game-icons:bookshelf" />
          </section>
          <nav className={"flex gap-1"}>
            <GenreButton text={"React"} />
            <GenreButton text={"Java"} />
            <GenreButton text={"Python"} />
            <GenresTooltip>
              <AddGenreButton />
            </GenresTooltip>
          </nav>
        </header>
      ) : (
        <div></div>
      )}
    </>
  );
};

// rounded-lg px-5 py-2.5 text-center text-sm tracking-wide text-main-pg
export default Header;
