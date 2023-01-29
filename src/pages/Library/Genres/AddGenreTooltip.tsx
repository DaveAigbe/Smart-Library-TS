import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const AddGenreTooltip: FunctionComponent<Props> = ({ children }) => {
  return (
    <div
      className={
        "relative after:flex after:scale-0 after:items-center after:justify-center after:outline after:outline-1 after:content-['Add_New_Genre'] hover:after:scale-100 " +
        "after:left-10 after:h-10 after:w-36 after:rounded after:bg-main-hlt after:p-2 after:text-sm after:text-main-txt " +
        "after:absolute after:-top-0.5 after:origin-left after:font-bold after:transition-all after:duration-150 after:ease-in-out " +
        "before:absolute before:border-8 before:border-solid before:border-y-transparent before:border-l-transparent before:border-r-main-hlt " +
        "before:-right-1 before:bottom-2 before:z-30 before:origin-left before:scale-0 before:transition-all before:duration-150 before:ease-in-out hover:before:scale-100 "
      }
    >
      {children}
    </div>
  );
};

export default AddGenreTooltip;
