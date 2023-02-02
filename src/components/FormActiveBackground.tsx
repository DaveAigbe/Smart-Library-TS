import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  closeElement: () => void;
}

const FormActiveBackground: FunctionComponent<Props> = ({
  children,
  closeElement,
}) => {
  return (
    <div>
      <div className={"fixed inset-x-0 inset-y-0 z-20 "}>
        <div
          className={"fixed inset-x-0 inset-y-0 z-30 bg-gray-600/50"}
          id={"background"}
          onClick={closeElement}
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

export default FormActiveBackground;
