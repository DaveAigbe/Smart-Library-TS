import React, { Fragment, FunctionComponent, useEffect } from "react";
import FormActiveBackground from "../../../../components/FormActiveBackground";
import { useForm } from "react-hook-form";
import SubmitFormButton from "../../../../components/SubmitFormButton";
import CloseFormButton from "../../../../components/CloseFormButton";
import { useDispatch, useSelector } from "react-redux";
import {
  addVideoToGenre,
  selectGenres,
  selectLibrary,
} from "../../../../store/slices/librarySlice";
import Checkbox from "./Checkbox";
import { Genres } from "../../../../types/Genres";
import { Library } from "../../../../types/Library";

interface Props {
  toggleFormActive: () => void;
  id: string;
}

interface AddToGenreFormData {
  [K: string]: boolean;
}

const AddVideoToGenreFormModal: FunctionComponent<Props> = ({
  toggleFormActive,
  id,
}) => {
  const { register, handleSubmit, reset } = useForm<AddToGenreFormData>();
  const allVideos: Library = useSelector(selectLibrary);
  const genres: Genres = useSelector(selectGenres);
  const dispatch = useDispatch();

  const uniqueGenres = genres.filter((genre) => genre !== "all");

  const getDefaultChecks = (): AddToGenreFormData => {
    const defaultChecks: AddToGenreFormData = {};
    // Go through each genre and check if the video is stored there, this will return the checks that should already be applied
    uniqueGenres.forEach((genre: string) => {
      defaultChecks[genre] = allVideos[genre].ids.includes(id);
    });

    return defaultChecks;
  };

  const handleAddVideoGenresForm = (data: AddToGenreFormData) => {
    dispatch(addVideoToGenre({ id: id, checkedGenres: data }));
    toggleFormActive();
  };

  useEffect(() => {
    // Whenever the default checks load, reset the defaults based off of the object returned
    const defaultChecks = getDefaultChecks();
    reset({ ...defaultChecks });
  }, []);

  return (
    <FormActiveBackground closeElement={toggleFormActive}>
      <form
        className={
          "relative z-20 rounded bg-brown-400  py-2.5 pl-2.5 pr-16 text-lg text-main-txt"
        }
        onSubmit={handleSubmit(handleAddVideoGenresForm)}
      >
        <fieldset>
          <legend>Add video to existing genres</legend>
        </fieldset>
        <ul className={"my-2"}>
          {uniqueGenres.map((genre: string) => {
            return (
              <Fragment key={genre}>
                <Checkbox genre={genre} register={register} />
              </Fragment>
            );
          })}
        </ul>
        <SubmitFormButton label={"Submit"} />
        <CloseFormButton closeForm={toggleFormActive} />
      </form>
    </FormActiveBackground>
  );
};

export default AddVideoToGenreFormModal;

export type { AddToGenreFormData };
