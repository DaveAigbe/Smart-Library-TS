import React, { FunctionComponent } from "react";
import { UseFormRegister } from "react-hook-form";
import titleCase from "../../../../utils/titleCase";
import { AddToGenreFormData } from "./AddVideoToGenreForm";

interface Props {
  genre: string;
  register: UseFormRegister<AddToGenreFormData>;
}

const Checkbox: FunctionComponent<Props> = ({ genre, register }) => {
  return (
    <li key={genre}>
      <input type="checkbox" id={genre} {...register(genre)} />
      <label htmlFor={genre}> {titleCase(genre)}</label>
    </li>
  );
};

export default Checkbox;
