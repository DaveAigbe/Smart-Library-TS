import React, { Fragment, FunctionComponent, useEffect } from "react";
import FormBackground from "../../../../components/FormBackground";
import { useForm } from "react-hook-form";
import SubmitFormButton from "../../../../components/SubmitFormButton";
import CloseFormButton from "../../../../components/CloseFormButton";
import { useDispatch, useSelector } from "react-redux";
import {
  addVideoToGenre,
  selectAllVideos,
  selectGenres,
} from "../../../../store/slices/librarySlice";
import Checkbox from "./Checkbox";
import { Genres } from "../../../../types/Genres";
import { Videos } from "../../../../types/Videos";

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
  const allVideos: Videos = useSelector(selectAllVideos);
  const genres: Genres = useSelector(selectGenres);
  const dispatch = useDispatch();

  const uniqueGenres = genres.filter((genre) => genre !== "all");

  const getDefaultChecks = (): AddToGenreFormData => {
    const defaultChecks: AddToGenreFormData = {};
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
    const defaultChecks = getDefaultChecks();
    reset({ ...defaultChecks });
  }, []);

  return (
    <FormBackground closeForm={toggleFormActive}>
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
    </FormBackground>
  );
};

export default AddVideoToGenreFormModal;

export type { AddToGenreFormData };
