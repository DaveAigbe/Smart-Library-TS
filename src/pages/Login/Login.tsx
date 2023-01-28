import React, { FunctionComponent } from "react";
import LoginForm from "./Forms/LoginForm";
import { useToggleActive } from "../../hooks/useToggleActive";
import RegisterForm from "./Forms/RegisterForm";

interface Props {}

const Login: FunctionComponent<Props> = () => {
  const [registrationFormActive, toggleRegistrationForm] = useToggleActive();
  return (
    <section>
      {registrationFormActive ? (
        <RegisterForm closeRegistration={toggleRegistrationForm} />
      ) : (
        <LoginForm openRegistration={toggleRegistrationForm} />
      )}
    </section>
  );
};

export default Login;
