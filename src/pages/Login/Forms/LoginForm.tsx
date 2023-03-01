import React, { FunctionComponent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ButtonDivider from "../ButtonDivider";
import FormButton from "../Buttons/FormButton";
import { useDispatch } from "react-redux";
import FormError from "../../../components/FormError";
import { FetchResult, useMutation } from "@apollo/client";
import { login } from "../../../store/slices/userSlice";
import { User } from "../../../gql/graphql";
import { setStorageWithExpiry } from "../../../utils/setStorageWithExpiry";
import { loginMutation } from "../../../gql/Mutations";
import { isUniqueValue } from "../../../utils/isUniqueValue";
import SnackbarNotification from "../../../components/SnackbarNotification";
import { timedNotification } from "../../../utils/timedNotification";

interface Props {
  openRegistration: (state?: boolean) => void;
}

interface FetchPayload {
  login: { uniqueToken: string; user: User };
}

interface FormData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup.string().email("⚠ Please enter a valid email address.").required(),
  password: yup.string().required(),
});

const LoginForm: FunctionComponent<Props> = ({ openRegistration }) => {
  const dispatch = useDispatch();
  const [serverLogin] = useMutation(loginMutation);
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });
  const [successfulServerLogin, setSuccessfulServerLogin] =
    useState<boolean>(false);

  const handleSubmitLogin = async (formData: FormData) => {
    const loginInfo = { email: formData.email, password: formData.password };

    await serverLogin({ variables: loginInfo })
      .then((data: FetchResult<FetchPayload>) => {
        setStorageWithExpiry(
          "authToken",
          data.data?.login.uniqueToken,
          5259600000
        );

        dispatch(
          login({
            email: data.data?.login.user.email,
            username: data.data?.login.user.username,
            library: JSON.parse(data.data?.login.user.library.data!),
            createdAt: data.data?.login.user.createdAt,
          })
        );
      })
      .catch((err) => {
        timedNotification(setSuccessfulServerLogin, 4);
      });
  };

  useEffect(() => {
    setFocus("email");
  }, []);

  return (
    <div className="container h-full px-6 py-12 ">
      <SnackbarNotification
        message={"You have entered an invalid username or password"}
        state={"error"}
        showNotification={successfulServerLogin}
      />
      <div className="flex h-full flex-wrap items-center justify-center text-gray-800">
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
            Login
          </h2>
          <form
            className={"flex flex-col gap-6"}
            onSubmit={handleSubmit(handleSubmitLogin)}
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
              <a
                href="#"
                className="font-bold tracking-wider text-red-500 transition duration-200 ease-in-out hover:text-gray-400"
              >
                Forgot password?
              </a>
            </section>

            <div>
              <FormButton label={"Sign in"} isSubmit={true} />
              <ButtonDivider />
              <FormButton label={"Register"} clickHandler={openRegistration} />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default LoginForm;
