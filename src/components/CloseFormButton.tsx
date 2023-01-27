import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";

interface Props {
  closeForm: () => void;
}

const CloseFormButton: FunctionComponent<Props> = ({ closeForm }) => {
  return (
    <div>
      <button
        className={"absolute top-2 right-1 hover:animate-spin"}
        onClick={closeForm}
      >
        <Icon
          className={"text-xl text-red-600 "}
          icon="akar-icons:circle-x-fill"
        />
      </button>
    </div>
  );
};

export default CloseFormButton;
