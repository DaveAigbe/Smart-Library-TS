import { Location, useLocation } from "react-router-dom";

const useIsAccountPage = (): boolean => {
  const location: Location = useLocation();

  return location.pathname === "/library/account";
};

export default useIsAccountPage;
