import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";
import useIsLibraryPage from "../hooks/useIsLibraryPage";
import GenresTooltip from "../pages/Library/Genres/GenresTooltip";
import AddGenreButton from "../pages/Library/Genres/Buttons/AddGenreButton";
import GenreButton from "../pages/Library/Genres/Buttons/GenreButton";
import Profile from "../pages/Library/Profile";

interface Props {}

const Header: FunctionComponent<Props> = () => {
  return (
    <>
      {useIsLibraryPage() ? (
        <header className={"fixed inset-x-0 top-0 z-20 bg-brown-400 p-1.5"}>
          <section className={"flex items-center justify-between"}>
            <section className={"flex items-center"}>
              <section
                className={
                  "mr-2 flex items-center justify-center gap-2 text-2xl"
                }
              >
                <h2>Smart Library</h2>
                <Icon icon="game-icons:bookshelf" />
                <div className={"h-8 w-0.5 bg-black"}></div>
              </section>
              <nav className={"flex gap-1"}>
                <GenresTooltip>
                  <AddGenreButton />
                </GenresTooltip>
                <GenreButton text={"React"} />
                <GenreButton text={"Java"} />
                <GenreButton text={"Python"} />
              </nav>
            </section>
            <Profile username={"Dave"} />
          </section>
        </header>
      ) : (
        <div></div>
      )}
    </>
  );
};

// rounded-lg px-5 py-2.5 text-center text-sm tracking-wide text-main-pg
export default Header;
