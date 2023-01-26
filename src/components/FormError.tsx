import React, { FunctionComponent } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface Props {
  errorMessage:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}

const FormError: FunctionComponent<Props> = ({ errorMessage }) => {
  return (
    <p className={"text-md text-red-500"}>
      {typeof errorMessage === "string" ? errorMessage : ""}
    </p>
  );
};

export default FormError;
