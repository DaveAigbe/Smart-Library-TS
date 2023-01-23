import React, { FC, ReactNode } from "react";
import Footer from "./Footer";

interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div
      className={
        "min-w-screen flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brown-wave bg-cover bg-no-repeat p-10 font-proxima"
      }
    >
      {/*<Header/>*/}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
