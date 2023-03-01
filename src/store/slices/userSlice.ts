import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { Library, User } from "../../types/Types";
import { RootState } from "../store";
import { defaultVideos } from "../../data/defaults";

interface InitialState {
  user: User;
  authorized: boolean;
}

interface AuthenticatedPayload {
  email: string;
  username: string;
  library: Library;
  createdAt: string;
}

const initialState: InitialState = {
  user: {},
  authorized: false,
};

export const userSlice: Slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthenticatedPayload>) => {
      state.user = {
        email: action.payload.email,
        username: action.payload.username,
        createdAt: action.payload.createdAt,
        library: action.payload.library,
      };
      state.authorized = true;
    },
    signup: (state, action: PayloadAction<AuthenticatedPayload>) => {
      state.user = {
        email: action.payload.email,
        username: action.payload.username,
        createdAt: action.payload.createdAt,
        library: defaultVideos,
      };
      state.authorized = true;
    },
    logout: (state, action: PayloadAction<{}>) => {
      Object.assign(state, initialState);
    },
  },
});

// Selectors
export const selectIsAuthenticated = (state: RootState): boolean => {
  return state.user.authorized;
};

export const selectUsername = (state: RootState): string => {
  return state.user.user.username;
};

export const selectEmail = (state: RootState): string => {
  return state.user.user.email;
};

export const selectDatabaseLibrary = (state: RootState): Library => {
  return state.user.user.library;
};

export const selectAccountCreationDate = (state: RootState): Date => {
  return new Date(state.user.user.createdAt);
};

// Reducers as actions

export const { login, logout, signup } = userSlice.actions;

export default userSlice.reducer;
