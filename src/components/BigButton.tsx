import React, { FunctionComponent } from "react";

interface Props {
  content: string;
  isSubmit?: boolean;
}

const BigButton: FunctionComponent<Props> = ({ content, isSubmit = false }) => {
  return (
    <button
      className={
        "h-14 w-full rounded bg-main-secondary font-bold text-main-txt shadow-lg shadow-brown-600 transition duration-300 ease-in-out hover:translate-y-0.5 hover:translate-x-0.5 hover:animate-pulse hover:bg-brown-500 md:w-96"
      }
      type={isSubmit ? "submit" : "button"}
    >
      {content}
    </button>
  );
};

export default BigButton;
