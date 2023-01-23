import React, { FunctionComponent } from "react";
import BigButton from "../../components/BigButton";

interface Props {}

const AddVideoForm: FunctionComponent<Props> = () => {
  return (
    <form
      className={"flex flex-col items-center justify-center gap-4 text-black"}
    >
      <input
        type="text"
        className={"h-14 w-full rounded bg-white p-4 md:w-96 "}
        placeholder={"ID"}
      />
      {/*<span className={"text-red-600"}>{errors.videoId?.message}</span>*/}
      <BigButton content={"Save Video"} />
    </form>
  );
};

export default AddVideoForm;
