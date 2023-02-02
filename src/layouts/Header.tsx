import React, { FunctionComponent } from "react";
import useIsLibraryPage from "../hooks/useIsLibraryPage";
import AddGenreTooltip from "../pages/Library/Genres/AddGenreTooltip";
import AddGenreButton from "../pages/Library/Genres/Buttons/AddGenreButton";
import Profile from "../pages/Library/Profile/Profile";
import GenresContainer from "../pages/Library/Genres/GenresContainer";
import AddGenreFormModal from "../pages/Library/Genres/Forms/AddGenreFormModal";
import { useToggleActive } from "../hooks/useToggleActive";
import NavLogo from "../components/NavLogo";
import useIsHomePage from "../hooks/useIsHomePage";
import NavButton from "../components/NavButton";
import { Link } from "react-router-dom";
import useIsAccountPage from "../hooks/useIsAccountPage";
import { Icon } from "@iconify/react";
import OpenNavButton from "../components/OpenNavButton";
import CloseNavButton from "../components/CloseNavButton";
import LogoutButton from "../pages/Library/Profile/Buttons/LogoutButton";

interface Props {}

const Header: FunctionComponent<Props> = () => {
  const [formActive, toggleFormActive] = useToggleActive();
  const [navActive, toggleNavActive] = useToggleActive();
  const isHomePage = useIsHomePage();
  const isLibraryPage = useIsLibraryPage();
  const isAccountPage = useIsAccountPage();

  return (
    <>
      {isHomePage ? (
        <div></div>
      ) : (
        <>
          <header
            className={`${
              isLibraryPage ? "fixed inset-x-0 top-0 z-20" : "w-full"
            } bg-brown-400 p-1.5`}
          >
            <section className={"flex items-center justify-between"}>
              {isLibraryPage ? (
                <>
                  <section className={"flex items-center"}>
                    <NavLogo />
                    <nav
                      className={`fixed right-0 top-0 z-10 h-full py-3 ${
                        navActive ? "w-3/5" : "w-0"
                      } flex flex-col gap-6 overflow-x-hidden bg-main-secondary transition-all duration-150 ease-in-out 
                      lg:static lg:h-fit lg:w-fit lg:flex-row lg:overflow-auto lg:bg-inherit lg:py-0 `}
                    >
                      <div className={"flex items-center justify-between"}>
                        <AddGenreTooltip>
                          <AddGenreButton openForm={toggleFormActive} />
                        </AddGenreTooltip>
                        <div className={"inline-flex lg:hidden"}>
                          <LogoutButton />
                        </div>
                        <CloseNavButton closeNav={toggleNavActive} />
                      </div>
                      <GenresContainer />
                    </nav>
                    {formActive && (
                      <AddGenreFormModal toggleFormActive={toggleFormActive} />
                    )}
                  </section>
                  <Profile />
                  <OpenNavButton openNav={toggleNavActive} />
                </>
              ) : (
                <>
                  {isAccountPage ? (
                    <>
                      <NavLogo />
                      <Link to={"/library"}>
                        <NavButton
                          label={"← Back To Library"}
                          backgroundColor={"#e78fb3"}
                          hoverBackgroundColor={"main-hlthover"}
                          labelColor={"main-txt"}
                        />
                      </Link>
                    </>
                  ) : (
                    <>
                      <NavLogo />
                      <Link to={"/"}>
                        <NavButton
                          backgroundColor={"#e78fb3"}
                          hoverBackgroundColor={"main-hlthover"}
                          labelColor={"main-txt"}
                        >
                          <Icon icon="mdi:house" className={"text-base"} />
                        </NavButton>
                      </Link>
                    </>
                  )}
                </>
              )}
            </section>
          </header>
        </>
      )}
    </>
  );
};

export default Header;
