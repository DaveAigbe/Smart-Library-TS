import React, { FunctionComponent } from "react";
import BigButton from "../../../components/BigButton";
import { useDispatch, useSelector } from "react-redux";
import { addVideo, selectVideos } from "../../../store/slices/videosSlice";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../../components/FormError";
import { VideoID } from "../../../types/VideoID";
import { isUniqueID } from "../../../utils/isUniqueID";

interface Props {}

const AddVideoForm: FunctionComponent<Props> = () => {
  const videoIDSchema = yup.object().shape({
    videoID: yup
      .string()
      .length(11, "⚠ ID must be 11 characters")
      .required()
      .test({
        name: "unique",
        message: "⚠ Video already exists in library",
        test: (value) => isUniqueID(value, videos),
      }),
  });

  const videos = useSelector(selectVideos);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty, errors },
  } = useForm<VideoID>({
    defaultValues: { videoID: "" },
    resolver: yupResolver(videoIDSchema),
  });

  const handleSubmitVideo = (data: VideoID) => {
    const id = data.videoID;
    dispatch(addVideo(id));

    setValue("videoID", "");
  };

  return (
    <form
      className={"flex flex-col items-center justify-center gap-4 text-black"}
      onSubmit={handleSubmit(handleSubmitVideo)}
    >
      <input
        type="text"
        className={"h-14 w-full rounded bg-white p-4 md:w-96 "}
        placeholder={"ID"}
        {...register("videoID")}
      />
      {isDirty && errors?.videoID?.message && (
        <FormError errorMessage={errors.videoID.message} />
      )}
      <BigButton content={"Save Video"} />
    </form>
  );
};

export default AddVideoForm;
