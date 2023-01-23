import { Location, useLocation } from "react-router-dom";

const onHomepage = (): boolean => {
  const location: Location = useLocation();

  return location.pathname === "/";
};

export default onHomepage;
