import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";

interface Props {}

const AddVideoTooltip: FunctionComponent<Props> = () => {
  return (
    <div
      className={
        "relative after:flex after:scale-0 after:items-center after:justify-center after:outline after:outline-1 after:content-[''] hover:after:scale-100 " +
        "after:h-[192px] after:w-[400px] after:rounded after:bg-[url('/images/yt-video-id.png')] after:p-2 after:text-sm after:text-main-txt " +
        "after:absolute after:top-[1.55rem] after:-right-1.5 after:origin-top after:font-bold after:transition-all after:duration-150 after:ease-in-out " +
        "before:absolute before:border-8 before:border-solid before:border-x-transparent before:border-t-transparent before:border-b-[#191B1C] " +
        "before:left-0.5 before:-bottom-2 before:z-30 before:origin-top before:scale-0 before:transition-all before:duration-150 before:ease-in-out hover:before:scale-100 "
      }
    >
      <Icon
        className={
          "cursor-pointer text-main-txt transition duration-150 ease-in-out hover:text-brown-600"
        }
        icon="mdi:question-mark-circle-outline"
      />
    </div>
  );
};

export default AddVideoTooltip;
