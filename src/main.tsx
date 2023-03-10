import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root/Root";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/Login/LoginPage";
import LibraryPage from "./pages/Library/LibraryPage";
import AccountPage from "./pages/Account/AccountPage";
import HomePage from "./pages/Home/HomePage";
import Layout from "./layouts/Layout";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getStorageWithExpiry } from "./utils/getStorageWithExpiry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
    children: [
      {
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/library",
            children: [
              {
                index: true,
                element: (
                  <ProtectedRoute>
                    <LibraryPage />
                  </ProtectedRoute>
                ),
              },
              {
                path: "account",
                element: (
                  <ProtectedRoute>
                    <AccountPage />
                  </ProtectedRoute>
                ),
              },
              {
                path: "genre/:genreName",
                element: (
                  <div>
                    IDK yet just testing to see if i can return to a previous
                    genre, causing a state change
                  </div>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
]);

const httpLink = new HttpLink({
  uri: "https://smart-library-backend-production.up.railway.app/",
});

const authLink = setContext((_, { headers }) => {
  const authToken = getStorageWithExpiry("authToken");

  return {
    headers: {
      ...headers,
      authorization: authToken ? `Bearer ${authToken}` : "",
    },
  };
});

export const client = new ApolloClient({
  uri: "https://smart-library-backend-production.up.railway.app/",
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
