import React, { FunctionComponent, useEffect, useState } from "react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import BigButton from "../components/BigButton";
import SnackbarNotification from "../components/SnackbarNotification";
import { timedNotification } from "../utils/timedNotification";

interface Props {}

const ErrorPage: FunctionComponent<Props> = () => {
  const error = useRouteError();
  const [errorPageNotification, setErrorPageNotification] =
    useState<boolean>(false);

  useEffect(() => {
    timedNotification(setErrorPageNotification, 4);
  }, []);

  return (
    <section className={"flex flex-col items-center justify-center gap-3"}>
      <SnackbarNotification
        message={(isRouteErrorResponse(error) && error.statusText) || "Error"}
        state={"error"}
        showNotification={errorPageNotification}
      />
      <img
        className={"w-700"}
        src={"/images/pink-404.svg"}
        alt={"Person grabbing globe shaped light bulb"}
      />
      <p className={"text-3xl font-bold text-main-pg"}>
        Hey you, come back to safety!
      </p>
      <Link to={"/"}>
        <BigButton content={"Back to Home"} />
      </Link>
    </section>
  );
};

export default ErrorPage;
