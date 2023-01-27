import { Videos } from "../../types/Videos";
import { Genres } from "../../types/Genres";
import { createSlice, Slice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface InitialState {
  genres: Genres<Videos>;
}

const initialState: InitialState = {
  genres: ["all", "react", "java", "node"],
};

export const genresSlice: Slice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
});

export const selectGenres = (state: RootState) => state.genres.genres;

export const {} = genresSlice.actions;
export default genresSlice.reducer;
