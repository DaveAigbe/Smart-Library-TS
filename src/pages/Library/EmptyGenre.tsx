import React, { FunctionComponent } from "react";

interface Props {}

const EmptyGenre: FunctionComponent<Props> = () => {
  return (
    <section className={"flex items-center justify-center p-10"}>
      <h2
        className={
          "animate-pulse text-center text-3xl font-extrabold tracking-widest text-red-400"
        }
      >
        Genre is currently empty, add videos to display here...
      </h2>
    </section>
  );
};

export default EmptyGenre;
