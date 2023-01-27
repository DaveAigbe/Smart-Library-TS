import React, { FunctionComponent } from "react";

interface Props {
  label: string;
}

const SubmitFormButton: FunctionComponent<Props> = ({ label }) => {
  return (
    <button
      className={
        "rounded bg-main-txt p-2 px-3 font-bold tracking-wide text-main-pg shadow-md transition ease-in-out hover:bg-main-primary"
      }
      type={"submit"}
    >
      {label}
    </button>
  );
};

export default SubmitFormButton;
