import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Videos } from "../../types/Videos";
import defaultVideos from "../../data/defaults";
import { Genres } from "../../types/Genres";

interface InitialState {
  videos: Videos;
  currentGenre: string;
  genres: Genres<Videos>;
}

interface DeletePayload {
  id: string;
  genres: (keyof Videos)[];
}

const initialState: InitialState = {
  currentGenre: "all",
  videos: defaultVideos,
  genres: ["all", "react", "java", "node"],
};

export const librarySlice: Slice = createSlice({
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
    addGenre: (state, action: PayloadAction<string>) => {
      state.genres = [...state.genres, action.payload];
      state.videos = { ...state.videos, [action.payload]: { ids: [] } };
    },
  },
});

export const selectVideos = (state: RootState): string[] => {
  return state.library.videos[state.library.currentGenre].ids;
};

export const selectCurrentGenre = (state: RootState): string => {
  return state.library.currentGenre;
};

export const selectGenres = (state: RootState) => state.library.genres;

export const { addVideo, deleteVideo, changeGenre, addGenre } =
  librarySlice.actions;
export default librarySlice.reducer;
