import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Library } from "../../types/Library";
import { Genres } from "../../types/Genres";
import { AddToGenreFormData } from "../../pages/Library/Videos/Forms/AddVideoToGenreFormModal";

interface InitialState {
  library: Library;
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
  library: { all: { ids: [] } },
  genres: ["all"],
  isInitialState: true,
};

export const librarySlice: Slice = createSlice({
  name: "library",
  initialState,
  reducers: {
    setInitialLibrary: (state, action: PayloadAction<Library>) => {
      state.library = action.payload;
      state.isInitialState = false;
      state.genres = Object.keys(action.payload);
    },
    addVideo: (state, action: PayloadAction<string>) => {
      // Add video to all categories
      state.library.all.ids = [action.payload, ...state.library.all.ids];
      if (state.currentGenre !== "all") {
        state.library[state.currentGenre].ids = [
          action.payload,
          ...state.library[state.currentGenre].ids,
        ];
      }

      // Update Storage
      localStorage.setItem("library", JSON.stringify(state.library));
    },
    deleteVideo: (state, action: PayloadAction<DeleteVideoPayload>) => {
      // If in all genre, filter from all categories
      if (state.currentGenre === "all") {
        action.payload.genres.forEach((genre) => {
          state.library[genre].ids = state.library[genre].ids.filter(
            (id: string) => action.payload.id !== id
          );
        });
      } else {
        state.library[state.currentGenre].ids = state.library[
          state.currentGenre
        ].ids.filter((id: string) => action.payload.id !== id);
      }

      // Update Storage
      localStorage.setItem("library", JSON.stringify(state.library));
    },
    changeGenre: (state, action: PayloadAction<keyof typeof state.library>) => {
      state.currentGenre = action.payload;
    },
    addGenre: (state, action: PayloadAction<string>) => {
      state.genres = [...state.genres, action.payload];
      state.library = { ...state.library, [action.payload]: { ids: [] } };

      // Update Storage
      localStorage.setItem("library", JSON.stringify(state.library));
    },
    deleteGenre: (state, action: PayloadAction<string>) => {
      if (action.payload !== "all") {
        // Delete genre from LibraryPage
        delete state.library[action.payload];
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
      localStorage.setItem("library", JSON.stringify(state.library));
    },
    addVideoToGenre: (state, action: PayloadAction<AddToGenrePayload>) => {
      const uniqueGenres: string[] = state.genres.filter(
        (genre: string) => genre !== "all"
      );
      uniqueGenres.forEach((genre) => {
        // If the genre is checked, and it is not already in the specified array, add it to the specified array
        if (action.payload.checkedGenres[genre]) {
          if (!state.library[genre].ids.includes(action.payload.id)) {
            state.library[genre].ids = [
              action.payload.id,
              ...state.library[genre].ids,
            ];
          }
        } else {
          if (state.library[genre].ids.includes(action.payload.id)) {
            state.library[genre].ids = state.library[genre].ids.filter(
              (id: string) => id !== action.payload.id
            );
          }
        }
      });

      // Update Storage
      localStorage.setItem("library", JSON.stringify(state.library));
    },
  },
});

// Selectors
export const selectLibrary = (state: RootState): Library => {
  return state.library.library;
};

export const selectAllVideos = (state: RootState): string[] => {
  return state.library.library.all.ids;
};
export const selectCurrentVideos = (state: RootState): string[] => {
  return state.library.library[state.library.currentGenre].ids;
};

export const selectCurrentGenre = (state: RootState): string => {
  return state.library.currentGenre;
};

export const selectGenres = (state: RootState): Genres => state.library.genres;

export const selectIsInitialState = (state: RootState): boolean =>
  state.library.isInitialState;

// Export all reducers as actions
export const {
  setInitialLibrary,
  addVideo,
  deleteVideo,
  changeGenre,
  addGenre,
  deleteGenre,
  addVideoToGenre,
} = librarySlice.actions;

// Export reducer object to be added to store
export default librarySlice.reducer;
