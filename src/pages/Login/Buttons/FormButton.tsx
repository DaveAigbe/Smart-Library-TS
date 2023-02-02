import React, { FunctionComponent } from "react";

interface Props {
  label: string;
  isSubmit?: boolean;
  clickHandler?: (state?: boolean) => void;
}

const FormButton: FunctionComponent<Props> = ({
  label,
  clickHandler,
  isSubmit = false,
}) => {
  return (
    <div>
      <button
        onClick={() => !clickHandler || clickHandler() || console.log("")}
        type={isSubmit ? "submit" : "button"}
        className="w-full rounded bg-main-hlt px-7 py-3 text-sm font-medium uppercase text-main-txt shadow-md transition duration-150 ease-in-out hover:bg-main-hlthover hover:shadow-lg"
      >
        {label}
      </button>
    </div>
  );
};

export default FormButton;
