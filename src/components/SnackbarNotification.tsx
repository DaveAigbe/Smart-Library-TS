import React, { FunctionComponent } from "react";
import { NotificationState } from "../types/Types";

interface Props {
  message: string;
  state: NotificationState;
  showNotification: boolean;
}

const NotificationItems = {
  success: {
    color: "#15CD72",
    symbol: "✔",
  },
  warning: {
    color: "#cbbf41",
    symbol: "⚠",
  },
  error: {
    color: "#ED4F32",
    symbol: "⨯",
  },
};

interface Props {}

const SnackbarNotification: FunctionComponent<Props> = ({
  state,
  message,
  showNotification,
}) => {
  return (
    <div
      className={` text-md fixed left-1/2 top-32  z-40 flex h-fit w-fit -translate-x-1/2 -translate-y-1/2 gap-4 rounded p-4 text-white shadow-md shadow-black md:text-xl 
      ${showNotification ? "visible" : "hidden"} animate-fade-in-out md:z-20`}
      style={{ backgroundColor: NotificationItems[state].color }}
    >
      <section>{NotificationItems[state].symbol}</section>
      <section>{message}</section>
    </div>
  );
};

export default SnackbarNotification;
