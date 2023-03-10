import React, { FunctionComponent } from "react";

interface Props {
  id: string;
  toggleVideoActive: (state?: boolean) => void;
}

const VideoModal: FunctionComponent<Props> = ({ id, toggleVideoActive }) => {
  return (
    <figure
      className={
        "fixed inset-y-0 inset-x-0 z-20 flex items-center justify-center bg-gray-600/25 p-5 backdrop-blur-md"
      }
      onClick={() => toggleVideoActive()}
    >
      <iframe
        className={
          "aspect-video w-full rounded-2xl border-8 border-main-hlt shadow-2xl shadow-gray-900 lg:w-3/4"
        }
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allowFullScreen={true}
      ></iframe>
    </figure>
  );
};

export default VideoModal;
