import React, { FunctionComponent } from "react";
import BigButton from "../../../components/BigButton";
import { useDispatch } from "react-redux";
import { addVideo } from "../../../store/slices/videosSlice";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../../components/FormError";

interface Props {}

const AddVideoForm: FunctionComponent<Props> = () => {
  // Describe Shape of Input
  const schema = yup.object().shape({
    videoId: yup.string().length(11, "⚠ ID must be 11 characters").required(),
  });

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitVideo = (data: any) => {
    const id: string = data.videoId;
    dispatch(addVideo(id));

    setValue("videoId", "");
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
        {...register("videoId")}
      />
      {errors.videoId && <FormError errorMessage={errors.videoId.message} />}
      <BigButton content={"Save Video"} />
    </form>
  );
};

export default AddVideoForm;
