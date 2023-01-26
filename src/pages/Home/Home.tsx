import React, { FunctionComponent } from "react";
import Introduction from "../../components/Introduction";

interface Props {}

const Home: FunctionComponent<Props> = () => {
  return (
    <section className={"relative flex flex-col items-center justify-center"}>
      <Introduction />
      <img
        className={"absolute -right-2/4 z-0 w-1300"}
        src={"public/images/pink-books.svg"}
        alt={"Person grabbing globe shaped light bulb"}
      />
    </section>
  );
};

export default Home;