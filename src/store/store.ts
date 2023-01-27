import { configureStore } from "@reduxjs/toolkit";
import { videosSlice } from "./slices/videosSlice";
import { genresSlice } from "./slices/genresSlice";

const store = configureStore({
  reducer: {
    videos: videosSlice.reducer,
    genres: genresSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
