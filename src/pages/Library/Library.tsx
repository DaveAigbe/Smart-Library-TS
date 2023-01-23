import React, { FunctionComponent } from "react";
import Introduction from "../../components/Introduction";
import VideosContainer from "./Videos/VideosContainer";

interface Props {}

const Library: FunctionComponent<Props> = () => {
  return (
    <section>
      <Introduction />
      <VideosContainer />
    </section>
  );
};

export default Library;
