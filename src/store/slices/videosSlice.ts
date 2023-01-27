import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Videos } from "../../types/Videos";
import defaultVideos from "../../data/defaults";

interface InitialState {
  videos: Videos;
  currentGenre: string;
}

interface DeletePayload {
  id: string;
  genres: (keyof Videos)[];
}

const initialState: InitialState = {
  currentGenre: "all",
  videos: defaultVideos,
};

export const videosSlice: Slice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    addVideo: (state, action: PayloadAction<string>) => {
      // Add video to all categories
      state.videos.all.ids = [action.payload, ...state.videos.all.ids];
    },
    deleteVideo: (state, action: PayloadAction<DeletePayload>) => {
      // If in all genre, filter from all categories
      if (state.currentGenre === "all") {
        action.payload.genres.forEach((genre) => {
          state.videos[genre].ids = state.videos[genre].ids.filter(
            (id: string) => action.payload.id !== id
          );
        });
      } else {
        state.videos[state.currentGenre].ids = state.videos[
          state.currentGenre
        ].ids.filter((id: string) => action.payload.id !== id);
      }
    },
    changeGenre: (state, action: PayloadAction<keyof Videos>) => {
      state.currentGenre = action.payload;
    },
  },
});

export const selectVideos = (state: RootState) =>
  state.videos.videos[state.videos.currentGenre].ids;

export const { addVideo, deleteVideo, changeGenre } = videosSlice.actions;
export default videosSlice.reducer;
