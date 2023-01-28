import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Videos } from "../../types/Videos";
import { Genres } from "../../types/Genres";
import { AddToGenreFormData } from "../../pages/Library/Videos/Forms/AddVideoToGenreFormModal";

interface InitialState {
  videos: Videos;
  currentGenre: string;
  genres: Genres;
  isInitialState: boolean;
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
  videos: { all: { ids: [] } },
  genres: ["all"],
  isInitialState: true,
};

export const librarySlice: Slice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setInitialVideos: (state, action: PayloadAction<Videos>) => {
      state.videos = action.payload;
      state.isInitialState = false;
      state.genres = Object.keys(action.payload);
    },
    addVideo: (state, action: PayloadAction<string>) => {
      // Add video to all categories
      state.videos.all.ids = [action.payload, ...state.videos.all.ids];

      // Update Storage
      localStorage.setItem("videos", JSON.stringify(state.videos));
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

      // Update Storage
      localStorage.setItem("videos", JSON.stringify(state.videos));
    },
    changeGenre: (state, action: PayloadAction<keyof typeof state.videos>) => {
      state.currentGenre = action.payload;
    },
    addGenre: (state, action: PayloadAction<string>) => {
      state.genres = [...state.genres, action.payload];
      state.videos = { ...state.videos, [action.payload]: { ids: [] } };

      // Update Storage
      localStorage.setItem("videos", JSON.stringify(state.videos));
    },
    deleteGenre: (state, action: PayloadAction<string>) => {
      if (action.payload !== "all") {
        // Delete genre from Videos
        delete state.videos[action.payload];
        // Delete genre from Genres
        state.genres = state.genres.filter(
          (genre: string) => action.payload !== genre
        );
        // If the current genre matches the one to be deleted, redirect to "all"
        if (state.currentGenre === action.payload) {
          state.currentGenre = "all";
        }
      }

      // Update Storage
      localStorage.setItem("videos", JSON.stringify(state.videos));
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

      // Update Storage
      localStorage.setItem("videos", JSON.stringify(state.videos));
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

export const selectIsInitialState = (state: RootState): boolean =>
  state.library.isInitialState;

export const {
  setInitialVideos,
  addVideo,
  deleteVideo,
  changeGenre,
  addGenre,
  deleteGenre,
  addVideoToGenre,
} = librarySlice.actions;
export default librarySlice.reducer;
