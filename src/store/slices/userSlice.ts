import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { User } from "../../types/User";
import { RootState } from "../store";

interface InitialState {
  user: User;
  authorized: boolean;
  authDB: {
    [email: string]: { username: string; password: string; videos: {} };
  };
}

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

const initialState: InitialState = {
  user: {},
  authorized: false,
  authDB: {
    "test1@gmail.com": {
      username: "Tester1",
      password: "test1231",
      videos: {},
    },
    "test2@gmail.com": {
      username: "Tester2",
      password: "test1232",
      videos: {},
    },
    "test3@gmail.com": {
      username: "Tester3",
      password: "test1233",
      videos: {},
    },
    "test4@gmail.com": {
      username: "Tester4",
      password: "test1234",
      videos: {},
    },
  },
};

export const userSlice: Slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      if (action.payload.email in state.authDB) {
        if (
          action.payload.password ===
          state.authDB[action.payload.email].password
        ) {
          state.user = {
            email: action.payload.email,
            username: state.authDB[action.payload.email].username,
            videos: state.authDB[action.payload.email].videos,
          };
          state.authorized = true;
        }
      }
    },
    registration: (state, action: PayloadAction<RegisterPayload>) => {
      state.authDB[action.payload.email] = {
        username: action.payload.username,
        password: action.payload.password,
        videos: {},
      };
      state.user = {
        email: action.payload.email,
        username: action.payload.username,
        videos: {},
      };
      state.authorized = true;
    },
    logout: (state, action: PayloadAction<{}>) => {
      state.authorized = false;
      state.user = {};
    },
  },
});

// Selectors
export const selectIsAuthenticated = (state: RootState) => {
  return state.user.authorized;
};

export const selectUsername = (state: RootState) => {
  return state.user.user.username;
};

export const selectEmail = (state: RootState) => {
  return state.user.user.email;
};

// Reducers as actions

export const { login, logout, registration } = userSlice.actions;

export default userSlice.reducer;
