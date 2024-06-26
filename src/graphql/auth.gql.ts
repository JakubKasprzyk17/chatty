import { gql } from './__generated__';

export namespace AuthApi {
  export const LOGIN_USER = gql(/* GraphQL */ `
    mutation Login($email: String!, $password: String!) {
      loginUser(email: $email, password: $password) {
        token
        user {
          id
          email
          firstName
          lastName
          role
        }
      }
    }
  `);

  export const REGISTER_USER = gql(/* GraphQL */ `
    mutation Register(
      $email: String!
      $firstName: String!
      $lastName: String!
      $password: String!
      $passwordConfirmation: String!
    ) {
      registerUser(
        email: $email
        firstName: $firstName
        lastName: $lastName
        password: $password
        passwordConfirmation: $passwordConfirmation
      ) {
        id
      }
    }
  `);
}
