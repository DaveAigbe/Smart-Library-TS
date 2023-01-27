import React, { FunctionComponent } from "react";

interface Props {}

const EmptyGenre: FunctionComponent<Props> = () => {
  return (
    <section className={"relative flex items-center justify-center p-10"}>
      <h2
        className={
          "relative z-10 animate-bounce text-center text-3xl font-extrabold tracking-widest text-main-header"
        }
      >
        Genre is currently empty, add videos to display here...
      </h2>
      <img
        className={"absolute -right-2/4 z-0 w-1300"}
        src={"/images/pink-loading.svg"}
        alt={"Person grabbing globe shaped light bulb"}
      />
    </section>
  );
};

export default EmptyGenre;
