import React, { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div
      className={
        "min-w-screen flex min-h-screen flex-col items-center justify-between overflow-hidden bg-brown-wave bg-cover bg-no-repeat font-proxima"
      }
    >
      <Header />
      <main className={"p-10"}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
