import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const GenresTooltip: FunctionComponent<Props> = ({ children }) => {
  return (
    <div
      title={"Add Genre"}
      className={
        "relative after:scale-0 after:content-['Add_New_Genre'] hover:after:scale-100 " +
        "after:right-10 after:h-10 after:w-36 after:rounded after:bg-main-hlt after:p-2 after:text-center after:text-sm after:text-main-txt " +
        "after:absolute after:-top-0.5  after:origin-right after:font-bold after:transition-all after:duration-150 after:ease-in-out " +
        "before:absolute before:border-y-8 before:border-l-8 before:border-solid before:border-y-transparent before:border-r-transparent before:border-l-main-hlt " +
        "before:bottom-2 before:-left-1 before:origin-right before:scale-0 before:transition-all before:duration-150 before:ease-in-out hover:before:scale-100 "
      }
    >
      {children}
    </div>
  );
};

export default GenresTooltip;
