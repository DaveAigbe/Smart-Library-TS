import { useState } from "react";
import { ActiveToggle } from "../types/ActiveToggle";

export const useToggleActive = (initial = false): ActiveToggle => {
  const [isActive, setIsActive] = useState<boolean>(initial);

  const toggleActive = () => {
    setIsActive((prevState) => !prevState);
  };

  return { isActive, toggleActive };
};
