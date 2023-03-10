import React, { FunctionComponent, useState } from "react";
import BigButton from "../../../components/BigButton";
import { useDispatch, useSelector } from "react-redux";
import { addVideo, selectAllVideos } from "../../../store/slices/librarySlice";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../../components/FormError";
import { isUniqueValue } from "../../../utils/isUniqueValue";
import AddVideoTooltip from "../AddVideoTooltip";
import SnackbarNotification from "../../../components/SnackbarNotification";
import { timedNotification } from "../../../utils/timedNotification";
import { getVideoId } from "../../../utils/getVideoId";

interface Props {}

interface FormData {
  videoID: string;
}

const AddVideoForm: FunctionComponent<Props> = () => {
  const allVideos: string[] = useSelector(selectAllVideos);
  const dispatch = useDispatch();
  const [addVideoNotification, setAddVideoNotification] =
    useState<boolean>(false);

  const videoIDSchema = yup.object().shape({
    videoID: yup
      .string()
      .transform((value) => getVideoId(value))
      .length(11, "⚠ ID must be 11 characters")
      .required()
      .test({
        name: "unique",
        message: "⚠ Video already exists in library",
        test: (value) => isUniqueValue(value, allVideos),
      }),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, errors },
  } = useForm<FormData>({
    defaultValues: { videoID: "" },
    resolver: yupResolver(videoIDSchema),
  });

  const handleSubmitVideo = async (formData: FormData) => {
    const id = formData.videoID;
    dispatch(addVideo(id));

    reset();
    timedNotification(setAddVideoNotification, 4);
  };

  return (
    <>
      <SnackbarNotification
        message={"Video Successfully Added."}
        state={"success"}
        showNotification={addVideoNotification}
      />
      <form
        className={
          "relative flex flex-col items-center justify-center gap-4 text-black"
        }
        onSubmit={handleSubmit(handleSubmitVideo)}
      >
        <section className={"w-full md:w-fit"}>
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
        <BigButton content={"Save Video"} isSubmit={true} />
      </form>
    </>
  );
};

export default AddVideoForm;
