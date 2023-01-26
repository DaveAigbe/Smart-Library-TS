import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Videos } from "../../types/Videos";
import defaultVideos from "../../data/defaults";

interface InitialState {
  videos: Videos;
}

const initialState: InitialState = { videos: defaultVideos };

export const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    addVideo: (state, action: PayloadAction<string>) => {
      state.videos.all.ids = [action.payload, ...state.videos.all.ids];
    },
  },
});

export const selectVideos = (state: RootState) => state.videos.videos.all.ids;

export const { addVideo } = videosSlice.actions;
export default videosSlice.reducer;
