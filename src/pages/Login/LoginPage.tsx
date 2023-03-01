import React, { FunctionComponent } from "react";
import LoginForm from "./Forms/LoginForm";
import { useToggleActive } from "../../hooks/useToggleActive";
import SignupForm from "./Forms/SignupForm";
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
      {registrationFormActive ? (
        <SignupForm closeRegistration={toggleRegistrationForm} />
      ) : (
        <LoginForm openRegistration={toggleRegistrationForm} />
      )}
    </section>
  );
};

export default LoginPage;
