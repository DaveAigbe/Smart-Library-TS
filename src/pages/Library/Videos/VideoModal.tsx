import React, { FunctionComponent } from "react";

interface Props {
  id: string;
  toggleVideoActive: () => void;
}

const VideoModal: FunctionComponent<Props> = ({ id, toggleVideoActive }) => {
  return (
    <figure
      className={
        "fixed top-0 right-0 z-10 flex h-screen w-screen items-center justify-center bg-gray-600/25 backdrop-blur-md"
      }
      onClick={toggleVideoActive}
    >
      <iframe
        className={
          "rounded-2xl c-xxs:h-186 c-xxs:w-330 c-xs:h-259 c-xs:w-460 c-sm:h-315 c-sm:w-560 c-lg:h-394 c-lg:w-700 c-xl:h-506 c-xl:w-900 c-xxl:h-731 c-xxl:w-1300"
        }
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allowFullScreen={true}
      ></iframe>
    </figure>
  );
};

export default VideoModal;
