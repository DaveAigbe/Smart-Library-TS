import React, { FunctionComponent, useEffect } from "react";
import FormButton from "../Buttons/FormButton";
import ButtonDivider from "../ButtonDivider";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../../components/FormError";
import { useDispatch } from "react-redux";
import { registration } from "../../../store/slices/userSlice";

interface Props {
  closeRegistration: () => void;
}

interface FormData {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const registerSchema = yup.object().shape({
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

const RegisterForm: FunctionComponent<Props> = ({ closeRegistration }) => {
  const {
    setFocus,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(registerSchema) });
  const dispatch = useDispatch();

  const handleSubmitRegistration = (data: FormData) => {
    const registrationInfo = {
      email: data.email,
      username: data.username,
      password: data.password,
    };
    dispatch(registration(registrationInfo));
  };

  useEffect(() => {
    setFocus("email");
  }, []);

  return (
    <div className="container h-full px-6 py-12">
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
            Register
          </h2>
          <form
            className={"flex flex-col gap-6"}
            onSubmit={handleSubmit(handleSubmitRegistration)}
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

export default RegisterForm;
