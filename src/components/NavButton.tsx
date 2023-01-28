import React, { FunctionComponent } from "react";

interface Props {
  label: string;
  handleClick?: () => void;
  backgroundColor: string;
  hoverBackgroundColor: string;
  labelColor: string;
}

const NavButton: FunctionComponent<Props> = ({
  handleClick,
  label,
  backgroundColor,
  hoverBackgroundColor,
  labelColor,
}) => {
  return (
    <div>
      <button
        className={
          `rounded bg-${backgroundColor} px-6 py-2.5 text-xs font-bold uppercase text-${labelColor} shadow-md transition ` +
          `duration-150 ease-in-out hover:bg-${hoverBackgroundColor} hover:shadow-lg`
        }
        onClick={handleClick}
      >
        {label}
      </button>
    </div>
  );
};

export default NavButton;
