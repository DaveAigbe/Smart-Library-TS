import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../store/slices/userSlice";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute: FunctionComponent<Props> = ({ children }) => {
  const isAuthorized = useSelector(selectIsAuthenticated);

  if (!isAuthorized) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
