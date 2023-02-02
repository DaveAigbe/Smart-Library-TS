import React, { Fragment, FunctionComponent } from "react";
import GenreButton from "./Buttons/GenreButton";
import { useSelector } from "react-redux";
import { selectGenres } from "../../../store/slices/librarySlice";
import { Genres } from "../../../types/Genres";

interface Props {}

const GenresContainer: FunctionComponent<Props> = () => {
  const genres: Genres = useSelector(selectGenres);

  return (
    <section
      className={"wrap container flex flex-col items-center gap-1 lg:flex-row"}
    >
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
