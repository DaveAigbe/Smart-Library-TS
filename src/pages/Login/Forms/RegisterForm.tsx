import React, { FunctionComponent } from "react";

interface Props {
  closeRegistration: () => void;
}

const LoginForm: FunctionComponent<Props> = ({ closeRegistration }) => {
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
          <form>
            <p className="mb-6">
              <input
                type="text"
                className="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-main-hlt focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Email address"
              />
            </p>

            <p className="mb-6">
              <input
                type="password"
                className="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-main-hlt focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Password"
              />
            </p>
            <p className="mb-6">
              <input
                type="password"
                className="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-main-hlt focus:bg-white focus:text-gray-700 focus:outline-none"
                placeholder="Re-enter Password"
              />
            </p>

            <button
              type="submit"
              className="w-full rounded bg-main-hlt px-7 py-3 text-sm font-medium uppercase text-main-txt shadow-md transition duration-150 ease-in-out hover:bg-main-hlthover hover:shadow-lg"
            >
              Create Account
            </button>

            <div className="my-4 flex items-center text-main-pg before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
              <p className="mx-4 mb-0 text-center font-semibold">OR</p>
            </div>

            <button
              onClick={closeRegistration}
              className="w-full rounded bg-main-hlt px-7 py-3 text-sm font-medium uppercase text-main-txt shadow-md transition duration-150 ease-in-out hover:bg-main-hlthover hover:shadow-lg"
            >
              ← Back to Login
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default LoginForm;
