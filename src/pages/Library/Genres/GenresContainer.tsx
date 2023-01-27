import React, { Fragment, FunctionComponent } from "react";
import GenreButton from "./Buttons/GenreButton";
import { useSelector } from "react-redux";
import { selectGenres } from "../../../store/slices/librarySlice";

interface Props {}

const GenresContainer: FunctionComponent<Props> = () => {
  const genres = useSelector(selectGenres);

  return (
    <section className={"flex gap-1"}>
      {genres.map((genre: string) => {
        return (
          <Fragment key={genre}>
            <GenreButton genre={genre} />
          </Fragment>
        );
      })}
    </section>
  );
};

export default GenresContainer;
