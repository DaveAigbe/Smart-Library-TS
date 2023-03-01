import { gql } from "@apollo/client";

export const currentUserQuery = gql(/*GraphQL*/ `
    query CurrentUser {
        currentUser {
            createdAt
            email
            username
            library {
                data
            }
        }
    }
`);
