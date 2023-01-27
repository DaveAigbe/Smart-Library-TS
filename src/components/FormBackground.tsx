import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  closeForm: () => void;
}

const FormBackground: FunctionComponent<Props> = ({ children, closeForm }) => {
  return (
    <div>
      <div
        className={
          "fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center"
        }
      >
        <div
          className={"fixed z-20 h-screen w-screen bg-gray-600/50"}
          id={"background"}
          onClick={closeForm}
        ></div>
        <div className={"relative z-30"} id={"content"}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormBackground;
