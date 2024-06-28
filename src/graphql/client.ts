import { Socket as PhoenixSocket } from 'phoenix';
import { getAsyncStorageToken } from 'src/utils';

import * as AbsintheSocket from '@absinthe/socket';
import { createAbsintheSocketLink } from '@absinthe/socket-apollo-link';
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getMainDefinition } from '@apollo/client/utilities';

let token: string | null = null;

const appUri = process.env.EXPO_PUBLIC_API_URL_GRAPHQL;
const appSocketUri = process.env.EXPO_PUBLIC_API_URL_SOCKET;

const httpLink = createHttpLink({
  uri: appUri,
});

getAsyncStorageToken().then(t => {
  token = t || '';
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const authedHttpLink = authLink.concat(httpLink);

const phoenixSocket = new PhoenixSocket(appSocketUri!, {
  params: () => {
    return { token };
  },
});

const absintheSocket = AbsintheSocket.create(phoenixSocket);
const websocketLink = createAbsintheSocketLink(
  absintheSocket,
) as unknown as ApolloLink;

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  websocketLink,
  authedHttpLink,
);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
