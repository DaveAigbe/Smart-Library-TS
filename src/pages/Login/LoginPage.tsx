import React, { FunctionComponent } from "react";
import LoginForm from "./Forms/LoginForm";
import { useToggleActive } from "../../hooks/useToggleActive";
import RegisterForm from "./Forms/RegisterForm";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../store/slices/userSlice";
import { Navigate } from "react-router-dom";

interface Props {}

const LoginPage: FunctionComponent<Props> = () => {
  const [registrationFormActive, toggleRegistrationForm] = useToggleActive();
  const isAuthorized = useSelector(selectIsAuthenticated);

  if (isAuthorized) {
    return <Navigate to={"/library"} replace={true} />;
  }

  return (
    <section>
      <figure
        className={
          "fixed left-1/2 h-fit w-fit -translate-y-1/2 -translate-x-1/2 rounded bg-yellow-500 p-4 text-center font-bold text-red-500 shadow-lg"
        }
      >
        <p>⚠ ⚠ ⚠ ⚠ ⚠ ⚠ ⚠ ⚠ ⚠ ⚠ ⚠ ⚠ ⚠</p>
        Backend in progress, to login use:
        <div className={"font-normal text-blue-600"}>
          <p>
            <b className={"font-bold"}>Email:</b> test1@gmail.com
          </p>
          <p>
            <b className={"font-bold"}>Password:</b> test1231
          </p>
        </div>
      </figure>
      {registrationFormActive ? (
        <RegisterForm closeRegistration={toggleRegistrationForm} />
      ) : (
        <LoginForm openRegistration={toggleRegistrationForm} />
      )}
    </section>
  );
};

export default LoginPage;
