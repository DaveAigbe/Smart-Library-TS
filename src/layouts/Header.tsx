import React, { FunctionComponent } from "react";
import useIsLibraryPage from "../hooks/useIsLibraryPage";
import AddGenreTooltip from "../pages/Library/Genres/AddGenreTooltip";
import AddGenreButton from "../pages/Library/Genres/Buttons/AddGenreButton";
import Profile from "../pages/Library/Profile/Profile";
import GenresContainer from "../pages/Library/Genres/GenresContainer";
import AddGenreFormModal from "../pages/Library/Genres/Forms/AddGenreFormModal";
import { useToggleActive } from "../hooks/useToggleActive";
import LoginButton from "../pages/Library/Profile/Buttons/LoginButton";
import NavLogo from "../components/NavLogo";
import useIsHomePage from "../hooks/useIsHomePage";
import NavButton from "../components/NavButton";
import { Link } from "react-router-dom";

interface Props {}

const Header: FunctionComponent<Props> = () => {
  const [formActive, toggleFormActive] = useToggleActive();
  const [loggedIn, toggleLoggedIn] = useToggleActive();
  const isHomePage = useIsHomePage();
  const isLibraryPage = useIsLibraryPage();

  const loginClicked = () => {
    console.log("Clicked");
  };

  return (
    <>
      {isHomePage ? (
        <div></div>
      ) : (
        <>
          {isLibraryPage ? (
            <header className={"fixed inset-x-0 top-0 z-20 bg-brown-400 p-1.5"}>
              <section className={"flex items-center justify-between"}>
                <section className={"flex items-center"}>
                  <NavLogo />
                  <nav className={"flex gap-1"}>
                    <AddGenreTooltip>
                      <AddGenreButton openForm={toggleFormActive} />
                    </AddGenreTooltip>
                    <GenresContainer />
                  </nav>
                  {formActive && (
                    <AddGenreFormModal toggleFormActive={toggleFormActive} />
                  )}
                </section>
                {loggedIn ? (
                  <Profile username={"Dave"} logout={toggleLoggedIn} />
                ) : (
                  <LoginButton login={loginClicked} />
                )}
              </section>
            </header>
          ) : (
            <header className={"w-full bg-brown-400 p-1.5"}>
              <section className={"flex items-center justify-between"}>
                <NavLogo />
                <Link to={"/library"}>
                  <NavButton
                    label={"← To Library"}
                    backgroundColor={"main-hlt"}
                    hoverBackgroundColor={"main-hlthover"}
                    labelColor={"main-txt"}
                  />
                </Link>
              </section>
            </header>
          )}
        </>
      )}
    </>
  );
};

export default Header;
