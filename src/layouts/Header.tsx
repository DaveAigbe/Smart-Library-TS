import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";
import useIsHomepage from "../hooks/useIsHomepage";

interface Props {}

const Header: FunctionComponent<Props> = () => {
  return (
    <>
      {!useIsHomepage() ? (
        <header
          className={
            "fixed inset-x-0 top-0 z-20 flex items-center justify-between bg-brown-400 p-1"
          }
        >
          <section
            className={"flex items-center justify-center gap-2 text-2xl"}
          >
            <h2>Smart Library</h2>
            <Icon icon="game-icons:bookshelf" />
          </section>
          <nav className={"flex gap-1"}>
            <button
              className={
                "rounded-lg bg-gradient-to-br from-main-txt to-main-primary " +
                "hover:delay px-5 py-2 text-center text-sm tracking-wide text-main-pg hover:bg-gradient-to-tl focus:ring-2 focus:ring-main-hlt "
              }
            >
              All
            </button>
            <button
              className={
                "rounded-lg bg-gradient-to-br from-main-txt to-main-primary " +
                "hover:delay px-5 py-2 text-center text-sm tracking-wide text-main-pg hover:bg-gradient-to-tl focus:ring-2 focus:ring-main-hlt "
              }
            >
              React
            </button>
            <button
              className={
                "rounded-lg bg-gradient-to-br from-main-txt to-main-primary " +
                "hover:delay px-5 py-2 text-center text-sm tracking-wide text-main-pg hover:bg-gradient-to-tl focus:ring-2 focus:ring-main-hlt "
              }
            >
              Java
            </button>
            <div
              title={"Add genre"}
              className={
                "relative after:scale-0 after:content-['Add_New_Genre'] hover:after:scale-100" +
                " after:right-10 after:h-10 after:w-36 after:rounded after:border after:border-main-txt after:bg-main-secondary after:p-2 after:text-center after:text-sm after:text-main-txt " +
                " after:absolute after:-top-0.5  after:origin-right after:transition-all after:duration-150 after:ease-in-out "
              }
            >
              <Icon
                className={
                  "cursor-pointer self-center text-4xl text-white transition-all ease-in-out hover:text-main-hlt"
                }
                icon="ant-design:plus-square-twotone"
              />
            </div>
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
