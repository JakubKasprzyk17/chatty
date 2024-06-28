import { gql } from './__generated__';

export namespace ChatApi {
  export const GET_USERS_ROOMS = gql(/* GraphQL */ `
    query usersRooms {
      usersRooms {
        rooms {
          id
          name
        }
        user {
          id
          firstName
          email
        }
      }
    }
  `);

  export const GET_ROOM = gql(/* GraphQL */ `
    query Room($id: ID!) {
      room(id: $id) {
        id
        messages {
          id
          body
          insertedAt
          user {
            id
            firstName
          }
        }
        user {
          id
          firstName
        }
      }
    }
  `);

  export const GET_HEADER_ROOM = gql(/* GraphQL */ `
    query HeaderRoom($id: ID!) {
      room(id: $id) {
        id
        messages {
          id
          user {
            id
            firstName
            lastName
          }
        }
      }
    }
  `);

  export const SEND_MESSAGE = gql(/* GraphQL */ `
    mutation SendMessage($body: String!, $roomId: String!) {
      sendMessage(body: $body, roomId: $roomId) {
        id
        body
        insertedAt
        user {
          id
          firstName
        }
      }
    }
  `);

  export const SET_TYPING_USER = gql(/* GraphQL */ `
    mutation TypingUserMutation($roomId: String!) {
      typingUser(roomId: $roomId) {
        id
      }
    }
  `);

  export const GET_TYPING_USER = gql(/* GraphQL */ `
    subscription TypingUserSubscription($roomId: String!) {
      typingUser(roomId: $roomId) {
        id
        firstName
      }
    }
  `);

  export const MESSAGE_ADDED = gql(/* GraphQL */ `
    subscription MessageAdded($roomId: String!) {
      messageAdded(roomId: $roomId) {
        id
        body
        user {
          id
        }
      }
    }
  `);
}
