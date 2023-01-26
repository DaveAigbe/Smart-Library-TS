import React, { FunctionComponent } from "react";

interface Props {
  errorMessage: string;
}

const FormError: FunctionComponent<Props> = ({ errorMessage }) => {
  return <p className={"text-md text-red-500"}>{errorMessage}</p>;
};

export default FormError;
