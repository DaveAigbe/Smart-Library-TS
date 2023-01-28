import defaultVideos from "../data/defaults";
import { setInitialVideos } from "../store/slices/librarySlice";
import { Videos } from "../types/Videos";
import { Dispatch } from "@reduxjs/toolkit";

/*
 * 1. If the local storage has videos, but the state is null(initial render), use 'videos' in local storage to update current 'videos' from state
 * 2. If the local storage has no videos and the state is null, then use defaultVideos to update 'videos' in local storage & current 'videos' from state
 * */

const handleVideosLocalStorage = (
  allVideos: Videos,
  dispatch: Dispatch,
  isInitial: boolean
) => {
  const storageItems = localStorage.getItem("videos");

  if (storageItems && isInitial) {
    // 1.
    dispatch(setInitialVideos(JSON.parse(storageItems)));
  } else {
    // 2.
    dispatch(setInitialVideos(defaultVideos));
    localStorage.setItem("videos", JSON.stringify(defaultVideos));
  }
};

export default handleVideosLocalStorage;
