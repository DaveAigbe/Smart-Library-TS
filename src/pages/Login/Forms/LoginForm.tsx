import React, { FunctionComponent, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ButtonDivider from "../ButtonDivider";
import FormButton from "../Buttons/FormButton";
import { useDispatch } from "react-redux";
import { login } from "../../../store/slices/userSlice";
import FormError from "../../../components/FormError";

interface Props {
  openRegistration: (state?: boolean) => void;
}

interface FormData {
  email: string;
  password: string;
}

const LoginForm: FunctionComponent<Props> = ({ openRegistration }) => {
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email("⚠ Please enter a valid email address.")
      .required(),
    password: yup.string().required(),
  });

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });

  const handleSubmitLogin = (data: FormData) => {
    const loginInfo = { email: data.email, password: data.password };
    dispatch(login(loginInfo));
  };

  useEffect(() => {
    setFocus("email");
  }, []);

  return (
    <div className="container h-full px-6 py-12 ">
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
