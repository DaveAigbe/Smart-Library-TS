import React, { FunctionComponent } from "react";
import GenreButton from "./Buttons/GenreButton";
import { useSelector } from "react-redux";
import { selectGenres } from "../../../store/slices/genresSlice";

interface Props {}

const GenresContainer: FunctionComponent<Props> = () => {
  const genres = useSelector(selectGenres);

  return (
    <section className={"flex gap-1"}>
      {genres.map((genre: string) => {
        return (
          <>
            <GenreButton genre={genre} />
          </>
        );
      })}
    </section>
  );
};

export default GenresContainer;
