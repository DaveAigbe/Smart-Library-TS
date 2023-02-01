import React, { FunctionComponent } from "react";

interface Props {}

const ButtonDivider: FunctionComponent<Props> = () => {
  return (
    <div className="my-4 flex items-center text-main-pg before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
      <p className="mx-4 mb-0 text-center font-semibold">OR</p>
    </div>
  );
};

export default ButtonDivider;
