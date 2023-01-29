import React, { FunctionComponent } from "react";
import BigButton from "../../../components/BigButton";
import { useDispatch, useSelector } from "react-redux";
import {
  addVideo,
  selectCurrentVideos,
} from "../../../store/slices/librarySlice";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../../components/FormError";
import { isUniqueValue } from "../../../utils/isUniqueValue";
import AddVideoTooltip from "../AddVideoTooltip";

interface Props {}

interface FormData {
  videoID: string;
}

const AddVideoForm: FunctionComponent<Props> = () => {
  const videoIDSchema = yup.object().shape({
    videoID: yup
      .string()
      .length(11, "⚠ ID must be 11 characters")
      .required()
      .test({
        name: "unique",
        message: "⚠ Video already exists in library",
        test: (value) => isUniqueValue(value, currentVideos),
      }),
  });

  const currentVideos: string[] = useSelector(selectCurrentVideos);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty, errors },
  } = useForm<FormData>({
    defaultValues: { videoID: "" },
    resolver: yupResolver(videoIDSchema),
  });

  const handleSubmitVideo = (data: FormData) => {
    const id = data.videoID;
    dispatch(addVideo(id));

    setValue("videoID", "");
  };

  return (
    <form
      className={
        "relative flex flex-col items-center justify-center gap-4 text-black"
      }
      onSubmit={handleSubmit(handleSubmitVideo)}
    >
      <section className={"w-full"}>
        <input
          type="text"
          className={"h-14 w-full rounded bg-white p-4 md:w-96 "}
          placeholder={"ID"}
          {...register("videoID")}
        />
        <div className={"absolute top-0.5 right-0.5"}>
          <AddVideoTooltip />
        </div>
      </section>
      {isDirty && errors?.videoID?.message && (
        <FormError errorMessage={errors.videoID.message} />
      )}
      <BigButton content={"Save Video"} />
    </form>
  );
};

export default AddVideoForm;
