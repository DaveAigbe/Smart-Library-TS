import { configureStore, Store } from "@reduxjs/toolkit";
import { videosSlice } from "./slices/videosSlice";

const store = configureStore({
  reducer: {
    videos: videosSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
