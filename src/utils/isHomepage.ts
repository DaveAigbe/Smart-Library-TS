import { Location, useLocation } from "react-router-dom";

const isHomepage = (): boolean => {
  const location: Location = useLocation();

  return location.pathname === "/";
};

export default isHomepage;
