import React, { FunctionComponent, useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormActiveBackground from "../../../../components/FormActiveBackground";
import SubmitFormButton from "../../../../components/SubmitFormButton";
import { useDispatch, useSelector } from "react-redux";
import { addGenre, selectGenres } from "../../../../store/slices/librarySlice";
import CloseFormButton from "../../../../components/CloseFormButton";
import FormError from "../../../../components/FormError";
import { isUniqueValue } from "../../../../utils/isUniqueValue";
import { Genres } from "../../../../types/Genres";

interface Props {
  toggleFormActive: () => void;
}

interface FormData {
  genre: string;
}

const AddGenreFormModal: FunctionComponent<Props> = ({ toggleFormActive }) => {
  const genres: Genres = useSelector(selectGenres);
  const dispatch = useDispatch();

  const genreSchema = yup.object().shape({
    genre: yup
      .string()
      .min(1, "⚠ Genre must have a name.")
      .required()
      .test({
        name: "unique",
        message: "⚠ Genre already exists in library",
        test: (value) => isUniqueValue(value, genres),
      }),
  });
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isDirty },
  } = useForm<FormData>({
    resolver: yupResolver(genreSchema),
  });

  const handleSubmitGenre = (data: FormData) => {
    const genre = data.genre;
    dispatch(addGenre(genre));

    toggleFormActive();
  };

  useEffect(() => {
    setFocus("genre");
  }, [setFocus]);

  return (
    <div>
      <FormActiveBackground closeElement={toggleFormActive}>
        <form
          className={"relative z-50 w-fit rounded bg-brown-400 p-3 md:w-96"}
          onSubmit={handleSubmit(handleSubmitGenre)}
        >
          <label className={"text-md mb-2 block text-main-txt"} htmlFor="genre">
            New Genre
          </label>
          <section className={"flex justify-between gap-2"}>
            <div>
              <input
                id={"genre"}
                className={
                  "focus:shadow-outline w-64 appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:border-blue-400 focus:outline-none"
                }
                type="text"
                placeholder={"Enter genre name..."}
                autoComplete={"off"}
                {...register("genre")}
              />
              {isDirty && errors?.genre?.message && (
                <FormError errorMessage={errors.genre.message} />
              )}
            </div>
            <SubmitFormButton label={"Create"} />
          </section>
          <CloseFormButton closeForm={toggleFormActive} />
        </form>
      </FormActiveBackground>
    </div>
  );
};

export default AddGenreFormModal;
