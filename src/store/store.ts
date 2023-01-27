import { configureStore } from "@reduxjs/toolkit";
import { librarySlice } from "./slices/librarySlice";

const store = configureStore({
  reducer: {
    library: librarySlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
