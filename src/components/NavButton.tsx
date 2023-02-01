import React, { FunctionComponent } from "react";

interface Props {
  label?: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
  labelColor: string;
  handleClick?: () => void;
  children?: React.ReactNode;
}

const NavButton: FunctionComponent<Props> = ({
  label,
  backgroundColor,
  hoverBackgroundColor,
  labelColor,
  handleClick,
  children,
}) => {
  return (
    <div>
      <button
        title={label}
        type={"button"}
        className={`rounded px-6 py-2.5 text-xs font-bold uppercase text-${labelColor} shadow-md transition duration-150 ease-in-out hover:bg-${hoverBackgroundColor} hover:shadow-lg`}
        style={{ backgroundColor: backgroundColor }}
        onClick={handleClick}
      >
        {label}
        {children}
      </button>
    </div>
  );
};

export default NavButton;
