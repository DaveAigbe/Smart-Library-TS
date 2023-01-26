import React, { FunctionComponent } from "react";

interface Props {}

const Description: FunctionComponent<Props> = () => {
  return (
    <p className={"text-center"}>
      The perfect app to keep track of all the valuable video resources found
      while learning a new topic. Add new videos from Youtube by entering their
      source id, attach new tags to filter videos by genre, search for specific
      videos by title, and watch your resources in a less cluttered environment.
    </p>
  );
};

export default Description;
