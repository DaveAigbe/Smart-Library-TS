import React, { FunctionComponent } from "react";
import Introduction from "../../components/Introduction";
import VideosContainer from "./Videos/VideosContainer";

interface Props {}

const Library: FunctionComponent<Props> = () => {
  return (
    <section className={"flex flex-col items-center justify-center"}>
      <Introduction />
      <VideosContainer />
    </section>
  );
};

export default Library;
