import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";
import useIsLibraryPage from "../hooks/useIsLibraryPage";
import GenresTooltip from "../pages/Library/Genres/GenresTooltip";
import AddGenreButton from "../pages/Library/Genres/Buttons/AddGenreButton";
import Profile from "../pages/Library/Profile";
import GenresContainer from "../pages/Library/Genres/GenresContainer";
import AddGenreForm from "../pages/Library/Genres/Forms/AddGenreForm";
import { useToggleActive } from "../hooks/useToggleActive";

interface Props {}

const Header: FunctionComponent<Props> = () => {
  const [formActive, toggleFormActive] = useToggleActive();
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
                  <AddGenreButton openForm={toggleFormActive} />
                </GenresTooltip>
                <GenresContainer />
              </nav>
              {formActive && (
                <AddGenreForm toggleFormActive={toggleFormActive} />
              )}
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

export default Header;
