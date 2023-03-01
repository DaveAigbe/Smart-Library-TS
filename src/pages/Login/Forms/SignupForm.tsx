import React, { FunctionComponent, useEffect, useState } from "react";
import FormButton from "../Buttons/FormButton";
import ButtonDivider from "../ButtonDivider";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../../components/FormError";
import { useDispatch } from "react-redux";
import { signup } from "../../../store/slices/userSlice";
import { FetchResult, gql, useMutation } from "@apollo/client";
import { User } from "../../../gql/graphql";
import { setStorageWithExpiry } from "../../../utils/setStorageWithExpiry";
import { signupMutation } from "../../../gql/Mutations";
import { timedNotification } from "../../../utils/timedNotification";
import SnackbarNotification from "../../../components/SnackbarNotification";

interface Props {
  closeRegistration: (state?: boolean) => void;
}

interface FormData {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

interface FetchPayload {
  signup: { uniqueToken: string; user: User };
}

const signupSchema = yup.object().shape({
  email: yup.string().email("⚠ Please enter a valid email address.").required(), // Test that checks if email exists
  username: yup.string().required(), // Check that test if username exists
  password: yup
    .string()
    .min(8, "⚠ Password must be at least 8 characters")
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "⚠ Passwords do not match"), // Validate that passwords match
});

const SignupForm: FunctionComponent<Props> = ({ closeRegistration }) => {
  const dispatch = useDispatch();
  const [serverSignup] = useMutation(signupMutation);
  const {
    setFocus,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(signupSchema) });
  const [successfulServerSignup, setSuccessfulServerSignup] =
    useState<boolean>(false);

  const handleSubmitSignup = async (formData: FormData) => {
    const signupInfo = {
      email: formData.email,
      username: formData.username,
      password: formData.password,
    };

    serverSignup({ variables: signupInfo })
      .then((data: FetchResult<FetchPayload>) => {
        const authToken = data.data?.signup.uniqueToken;
        setStorageWithExpiry("authToken", authToken, 5259600000);

        dispatch(
          signup({
            email: formData.email,
            username: formData.username,
            createdAt: data.data?.signup.user.createdAt,
          })
        );
      })
      .catch((err) => {
        timedNotification(setSuccessfulServerSignup, 4);
      });
  };

  useEffect(() => {
    setFocus("email");
  }, []);

  return (
    <div className="container h-full px-6 py-12">
      <SnackbarNotification
        message={"The email address provided is already in use"}
        state={"warning"}
        showNotification={successfulServerSignup}
      />
      <div className="g-6 flex h-full flex-wrap items-center justify-center text-gray-800">
        <section className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
          <img
            src="/images/pink-login.svg"
            className="w-1300"
            alt="Phone image"
          />
        </section>
        <section className="md:w-8/12 lg:ml-20 lg:w-5/12">
          <h2
            className={
              "mb-2 text-4xl font-bold tracking-wider text-main-header"
            }
          >
            Signup
          </h2>
          <form
            className={"flex flex-col gap-6"}
            onSubmit={handleSubmit(handleSubmitSignup)}
          >
            <section>
              <input
                type="text"
                className="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-main-hlt focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Email address"
                {...register("email")}
              />
              {errors?.email?.message && (
                <FormError errorMessage={errors.email.message} />
              )}
            </section>

            <section>
              <input
                type="text"
                className="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-main-hlt focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Display name"
                {...register("username")}
              />
              {errors?.username?.message && (
                <FormError errorMessage={errors.username.message} />
              )}
            </section>

            <section>
              <input
                type="password"
                className="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-main-hlt focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Password"
                {...register("password")}
              />
              {errors?.password?.message && (
                <FormError errorMessage={errors.password.message} />
              )}
            </section>
            <section>
              <input
                type="password"
                className="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-main-hlt focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />
              {errors?.confirmPassword?.message && (
                <FormError errorMessage={errors.confirmPassword.message} />
              )}
            </section>

            <div>
              <FormButton label={"Create Account"} isSubmit={true} />
              <ButtonDivider />
              <FormButton
                label={"← Back to Login"}
                clickHandler={closeRegistration}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SignupForm;
