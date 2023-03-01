import React, { FunctionComponent, useState } from "react";
import { useMutation } from "@apollo/client";
import { updateUserMutation } from "../../../gql/Mutations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { object, string } from "yup";
import FormError from "../../../components/FormError";
import { isValidPassword } from "../../../utils/isValidPassword";
import SnackbarNotification from "../../../components/SnackbarNotification";
import { timedNotification } from "../../../utils/timedNotification";
import { NotificationState } from "../../../types/Types";

interface Props {}

interface FormData {
  newEmail?: string;
  newPassword?: string;
  confirmNewPassword?: string;
  password: string;
}

const editUserSchema = object({
  password: string().required(),
  newEmail: string().email("⚠ Please enter a valid email address"),
  newPassword: string().test({
    name: "empty-check",
    message: "⚠ Password must be at least 8 characters",
    test: (password) => isValidPassword(password),
  }),
  confirmNewPassword: string().oneOf(
    [yup.ref("newPassword")],
    "⚠ Passwords do not match"
  ),
});

const EditUserForm: FunctionComponent<Props> = () => {
  const [serverUpdateUser] = useMutation(updateUserMutation);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { newEmail: undefined, newPassword: undefined },
    resolver: yupResolver(editUserSchema),
  });
  const [serverUpdateUserState, setServerUpdateUserState] = useState<{
    message: string;
    state: NotificationState;
  }>({ message: "", state: "error" });
  const [successfulServerUpdateUser, setSuccessfulServerUpdateUser] =
    useState<boolean>(false);

  const handleSubmitUpdateUser = async (formData: FormData) => {
    const updatedData = {
      currentPassword: formData.password,
      newEmail: formData.newEmail,
      newPassword: formData.newPassword,
    };

    if (updatedData.newPassword || updatedData.newEmail) {
      await serverUpdateUser({ variables: updatedData })
        .then((value) => {
          setServerUpdateUserState({
            message: "User information successfully updated",
            state: "success",
          });
          timedNotification(setSuccessfulServerUpdateUser, 4);
          reset();
        })
        .catch((err) => {
          setServerUpdateUserState({
            message: (err as Error).message,
            state: "error",
          });
          timedNotification(setSuccessfulServerUpdateUser, 4);
        });
    }

    setServerUpdateUserState({
      message: "No new information provided.",
      state: "warning",
    });
    timedNotification(setSuccessfulServerUpdateUser, 4);
  };

  return (
    <section className={"text-main-txt"}>
      <SnackbarNotification
        message={serverUpdateUserState.message}
        state={serverUpdateUserState.state}
        showNotification={successfulServerUpdateUser}
      />
      <h2 className={"mb-4 text-center text-xl font-bold"}>Edit Data</h2>
      <form
        className={"flex flex-col gap-2 text-left text-sm md:text-xl"}
        onSubmit={handleSubmit(handleSubmitUpdateUser)}
      >
        <div className={"flex flex-col"}>
          <div className={"flex justify-between gap-2"}>
            <label htmlFor="newEmail">New Email: </label>
            <input
              className={" w-92 rounded p-1"}
              type="email"
              autoComplete={"off"}
              {...register("newEmail")}
            />
          </div>
          {errors?.newEmail?.message && (
            <FormError errorMessage={errors.newEmail.message} />
          )}
        </div>
        <div className={"flex flex-col "}>
          <div className={"flex justify-between gap-2"}>
            <label htmlFor="newPassword">New Password: </label>
            <input
              className={" w-92 rounded p-1"}
              type="password"
              autoComplete={"off"}
              {...register("newPassword")}
            />
          </div>
          {errors?.newPassword?.message && (
            <FormError errorMessage={errors.newPassword.message} />
          )}
        </div>
        <div className={"flex flex-col "}>
          <div className={"flex justify-between gap-2"}>
            <label htmlFor="confirmPassword">Confirm New Password: </label>
            <input
              className={" w-92 rounded p-1"}
              type="password"
              autoComplete={"off"}
              {...register("confirmNewPassword")}
            />
          </div>
          {errors?.confirmNewPassword?.message && (
            <FormError errorMessage={errors.confirmNewPassword.message} />
          )}
        </div>
        <div className={"flex justify-between gap-2"}>
          <label htmlFor="imageLink">Profile Image Link: </label>
          <input
            name={"imageLink"}
            className={" w-92 rounded p-1"}
            type="text"
            placeholder={"https://via.images.com/300.png "}
          />
        </div>
        <div className={"flex flex-col font-bold"}>
          <div className={"flex justify-between gap-2"}>
            <label htmlFor="password">Current Password: </label>
            <input
              className={" w-92 rounded bg-green-200 p-1"}
              type="password"
              {...register("password")}
            />
          </div>
          {errors?.password?.message && (
            <FormError errorMessage={errors.password.message} />
          )}
        </div>
        <button
          className={
            "mt-4 rounded bg-main-txt p-2 text-lg font-bold text-main-pg transition-all duration-150 ease-in-out hover:bg-brown-900"
          }
          type={"submit"}
        >
          Update🔄
        </button>
      </form>
    </section>
  );
};

export default EditUserForm;
