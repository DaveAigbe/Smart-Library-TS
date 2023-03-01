import { gql } from "@apollo/client";

export const loginMutation = gql(/*GraphQL*/ `
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            uniqueToken
            user {
                createdAt
                email
                username
                library {
                    data
                }
            }
        }
    }
`);

export const signupMutation = gql(/*GraphQL*/ `
    mutation Signup($email: String!, $password: String!, $username: String!) {
        signup(email: $email, password: $password, username: $username) {
            uniqueToken
            user {
                createdAt
            }
        }
    }
`);

export const updateLibraryMutation = gql(/*GraphQL*/ `
    mutation UpdateLibrary($updatedLibrary: String!) {
        updateLibrary(updatedLibrary: $updatedLibrary) {
            id
        }
    }
`);

export const updateUserMutation = gql(
  /*GraphQL*/
  `
        mutation UpdateUser($currentPassword: String!, $newEmail: String, $newPassword: String) {
            updateUser(currentPassword: $currentPassword, newEmail: $newEmail, newPassword: $newPassword) {
                email
            }
        }
    `
);
