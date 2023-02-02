import { useState } from "react";
import { ActiveToggle } from "../types/ActiveToggle";

export const useToggleActive = (initial = false): ActiveToggle => {
  const [isActive, setIsActive] = useState<boolean>(initial);

  const toggleActive = (state?: boolean) => {
    if (typeof state === "boolean") {
      setIsActive(state);
    } else {
      setIsActive((prevState) => !prevState);
    }
  };

  return [isActive, toggleActive];
};
