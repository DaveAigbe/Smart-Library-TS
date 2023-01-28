import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Videos } from "../../types/Videos";
import defaultVideos from "../../data/defaults";
import { Genres } from "../../types/Genres";
import { AddToGenreFormData } from "../../pages/Library/Videos/Forms/AddVideoToGenreFormModal";

interface InitialState {
  videos: Videos;
  currentGenre: string;
  genres: Genres;
}

interface DeleteVideoPayload {
  id: string;
  genres: string[];
}

interface AddToGenrePayload {
  id: string;
  checkedGenres: AddToGenreFormData;
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
    deleteVideo: (state, action: PayloadAction<DeleteVideoPayload>) => {
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
    changeGenre: (state, action: PayloadAction<keyof typeof state.videos>) => {
      state.currentGenre = action.payload;
    },
    addGenre: (state, action: PayloadAction<string>) => {
      state.genres = [...state.genres, action.payload];
      state.videos = { ...state.videos, [action.payload]: { ids: [] } };
    },
    addVideoToGenre: (state, action: PayloadAction<AddToGenrePayload>) => {
      const uniqueGenres: string[] = state.genres.filter(
        (genre: string) => genre !== "all"
      );
      uniqueGenres.forEach((genre) => {
        // If the genre is checked, and it is not already in the specified array, add it to the specified array
        if (action.payload.checkedGenres[genre]) {
          if (!state.videos[genre].ids.includes(action.payload.id)) {
            state.videos[genre].ids = [
              action.payload.id,
              ...state.videos[genre].ids,
            ];
          }
        } else {
          if (state.videos[genre].ids.includes(action.payload.id)) {
            state.videos[genre].ids = state.videos[genre].ids.filter(
              (id: string) => id !== action.payload.id
            );
          }
        }
      });
    },
  },
});

export const selectAllVideos = (state: RootState): Videos => {
  return state.library.videos;
};
export const selectCurrentVideos = (state: RootState): string[] => {
  return state.library.videos[state.library.currentGenre].ids;
};

export const selectCurrentGenre = (state: RootState): string => {
  return state.library.currentGenre;
};

export const selectGenres = (state: RootState): Genres => state.library.genres;

export const { addVideo, deleteVideo, changeGenre, addGenre, addVideoToGenre } =
  librarySlice.actions;
export default librarySlice.reducer;
