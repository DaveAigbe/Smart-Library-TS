import { useState } from "react";

export const useToggleActive = (initial = false) => {
  const [isActive, setIsActive] = useState(initial);

  const toggleActive = () => {
    setIsActive((prevState) => !prevState);
  };

  return { isActive, toggleActive };
};
