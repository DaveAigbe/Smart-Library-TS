import { Location, useLocation } from "react-router-dom";

const useIsLibraryPage = (): boolean => {
  const location: Location = useLocation();

  return location.pathname === "/library";
};

export default useIsLibraryPage;
