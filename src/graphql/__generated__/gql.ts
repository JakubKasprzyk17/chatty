/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation Login($email: String!, $password: String!) {\n      loginUser(email: $email, password: $password) {\n        token\n        user {\n          id\n          email\n          firstName\n          lastName\n          role\n        }\n      }\n    }\n  ": types.LoginDocument,
    "\n    mutation Register(\n      $email: String!\n      $firstName: String!\n      $lastName: String!\n      $password: String!\n      $passwordConfirmation: String!\n    ) {\n      registerUser(\n        email: $email\n        firstName: $firstName\n        lastName: $lastName\n        password: $password\n        passwordConfirmation: $passwordConfirmation\n      ) {\n        id\n      }\n    }\n  ": types.RegisterDocument,
    "\n    query usersRooms {\n      usersRooms {\n        rooms {\n          id\n          name\n        }\n        user {\n          id\n          firstName\n          email\n        }\n      }\n    }\n  ": types.UsersRoomsDocument,
    "\n    query Room($id: ID!) {\n      room(id: $id) {\n        id\n        messages {\n          id\n          body\n          insertedAt\n          user {\n            id\n            firstName\n          }\n        }\n        user {\n          id\n          firstName\n        }\n      }\n    }\n  ": types.RoomDocument,
    "\n    query HeaderRoom($id: ID!) {\n      room(id: $id) {\n        id\n        messages {\n          id\n          user {\n            id\n            firstName\n            lastName\n          }\n        }\n      }\n    }\n  ": types.HeaderRoomDocument,
    "\n    mutation SendMessage($body: String!, $roomId: String!) {\n      sendMessage(body: $body, roomId: $roomId) {\n        id\n        body\n        insertedAt\n        user {\n          id\n          firstName\n        }\n      }\n    }\n  ": types.SendMessageDocument,
    "\n    mutation TypingUserMutation($roomId: String!) {\n      typingUser(roomId: $roomId) {\n        id\n      }\n    }\n  ": types.TypingUserMutationDocument,
    "\n    subscription TypingUserSubscription($roomId: String!) {\n      typingUser(roomId: $roomId) {\n        id\n        firstName\n      }\n    }\n  ": types.TypingUserSubscriptionDocument,
    "\n    subscription MessageAdded($roomId: String!) {\n      messageAdded(roomId: $roomId) {\n        id\n        body\n        user {\n          id\n        }\n      }\n    }\n  ": types.MessageAddedDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation Login($email: String!, $password: String!) {\n      loginUser(email: $email, password: $password) {\n        token\n        user {\n          id\n          email\n          firstName\n          lastName\n          role\n        }\n      }\n    }\n  "): (typeof documents)["\n    mutation Login($email: String!, $password: String!) {\n      loginUser(email: $email, password: $password) {\n        token\n        user {\n          id\n          email\n          firstName\n          lastName\n          role\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation Register(\n      $email: String!\n      $firstName: String!\n      $lastName: String!\n      $password: String!\n      $passwordConfirmation: String!\n    ) {\n      registerUser(\n        email: $email\n        firstName: $firstName\n        lastName: $lastName\n        password: $password\n        passwordConfirmation: $passwordConfirmation\n      ) {\n        id\n      }\n    }\n  "): (typeof documents)["\n    mutation Register(\n      $email: String!\n      $firstName: String!\n      $lastName: String!\n      $password: String!\n      $passwordConfirmation: String!\n    ) {\n      registerUser(\n        email: $email\n        firstName: $firstName\n        lastName: $lastName\n        password: $password\n        passwordConfirmation: $passwordConfirmation\n      ) {\n        id\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query usersRooms {\n      usersRooms {\n        rooms {\n          id\n          name\n        }\n        user {\n          id\n          firstName\n          email\n        }\n      }\n    }\n  "): (typeof documents)["\n    query usersRooms {\n      usersRooms {\n        rooms {\n          id\n          name\n        }\n        user {\n          id\n          firstName\n          email\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Room($id: ID!) {\n      room(id: $id) {\n        id\n        messages {\n          id\n          body\n          insertedAt\n          user {\n            id\n            firstName\n          }\n        }\n        user {\n          id\n          firstName\n        }\n      }\n    }\n  "): (typeof documents)["\n    query Room($id: ID!) {\n      room(id: $id) {\n        id\n        messages {\n          id\n          body\n          insertedAt\n          user {\n            id\n            firstName\n          }\n        }\n        user {\n          id\n          firstName\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query HeaderRoom($id: ID!) {\n      room(id: $id) {\n        id\n        messages {\n          id\n          user {\n            id\n            firstName\n            lastName\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query HeaderRoom($id: ID!) {\n      room(id: $id) {\n        id\n        messages {\n          id\n          user {\n            id\n            firstName\n            lastName\n          }\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation SendMessage($body: String!, $roomId: String!) {\n      sendMessage(body: $body, roomId: $roomId) {\n        id\n        body\n        insertedAt\n        user {\n          id\n          firstName\n        }\n      }\n    }\n  "): (typeof documents)["\n    mutation SendMessage($body: String!, $roomId: String!) {\n      sendMessage(body: $body, roomId: $roomId) {\n        id\n        body\n        insertedAt\n        user {\n          id\n          firstName\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation TypingUserMutation($roomId: String!) {\n      typingUser(roomId: $roomId) {\n        id\n      }\n    }\n  "): (typeof documents)["\n    mutation TypingUserMutation($roomId: String!) {\n      typingUser(roomId: $roomId) {\n        id\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    subscription TypingUserSubscription($roomId: String!) {\n      typingUser(roomId: $roomId) {\n        id\n        firstName\n      }\n    }\n  "): (typeof documents)["\n    subscription TypingUserSubscription($roomId: String!) {\n      typingUser(roomId: $roomId) {\n        id\n        firstName\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    subscription MessageAdded($roomId: String!) {\n      messageAdded(roomId: $roomId) {\n        id\n        body\n        user {\n          id\n        }\n      }\n    }\n  "): (typeof documents)["\n    subscription MessageAdded($roomId: String!) {\n      messageAdded(roomId: $roomId) {\n        id\n        body\n        user {\n          id\n        }\n      }\n    }\n  "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;