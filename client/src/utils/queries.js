import { gql } from '@apollo/client';

export const GET_ME = gql`
    query allUsers {
        users {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                image
                link
                title
            }
        }
    }
`;