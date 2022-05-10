import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;


export const SAVE_BOOK = gql`
    mutation saveBook($bookId: Int, $title: String, $description: String, $image: String, $link: String, $author: Array) {
        saveBook(bookId: $bookId, title: $title, description: $description, image: $image, link: $link, author: $author) {
            bookId
            title
            description
            image
            link
            authors
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: Int) {
        removeBook(bookId: $bookId) {
            bookId
            title
            description
            image
            link
            authors
        }
    }
`;