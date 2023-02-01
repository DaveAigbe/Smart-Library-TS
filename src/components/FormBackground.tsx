import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  closeForm: () => void;
}

const FormBackground: FunctionComponent<Props> = ({ children, closeForm }) => {
  return (
    <div>
      <div className={"fixed inset-x-0 inset-y-0 z-20 "}>
        <div
          className={"fixed inset-x-0 inset-y-0 z-30 bg-gray-600/50"}
          id={"background"}
          onClick={closeForm}
        ></div>
        <div
          className={
            "fixed left-1/2 top-1/2 z-40 -translate-x-1/2  -translate-y-1/2"
          }
          id={"content"}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormBackground;
