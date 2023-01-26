import { Location, useLocation } from "react-router-dom";

const useIsHomepage = (): boolean => {
  const location: Location = useLocation();

  return location.pathname === "/";
};

export default useIsHomepage;
