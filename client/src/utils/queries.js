import { gql } from '@apollo/client';

export const GET_ME = gql`
    query allUsers {
        users {
            _id
            username
            savedBooks {
                title
                description
                authors
                image
            }
        }
    }
`;