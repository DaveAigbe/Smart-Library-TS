import defaultVideos from "../data/defaults";
import { setInitialLibrary } from "../store/slices/librarySlice";
import { Library } from "../types/Library";
import { Dispatch } from "@reduxjs/toolkit";

/*
 * 1. If the local storage has videos, but the state is null(initial render), use 'videos' in local storage to update current 'videos' from state
 * 2. If the local storage has no videos and the state is null, then use defaultVideos to update 'videos' in local storage & current 'videos' from state
 * */

const handleVideosLocalStorage = (
  allVideos: Library,
  dispatch: Dispatch,
  isInitial: boolean
) => {
  const storageItems = localStorage.getItem("library");

  if (storageItems && isInitial) {
    // 1.
    dispatch(setInitialLibrary(JSON.parse(storageItems)));
  } else {
    // 2.
    dispatch(setInitialLibrary(defaultVideos));
    localStorage.setItem("library", JSON.stringify(defaultVideos));
  }
};

export default handleVideosLocalStorage;
