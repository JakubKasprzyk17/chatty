import i18next from 'i18next';

import { ApolloError } from '@apollo/client';

const parseErrorMessage = (message: string) => {
  switch (message) {
    case 'Invalid credentials':
      return i18next.t('errors.invalidCredentials');
    default:
      return message;
  }
};

export const parseError = (error: any) => {
  if (error instanceof ApolloError) {
    if (error.graphQLErrors) {
      return error.graphQLErrors.map(({ message }) =>
        parseErrorMessage(message),
      );
    }

    if (error.networkError) {
      return [i18next.t('errors.network')];
    }

    return [i18next.t('errors.unknown')];
  }

  return [i18next.t('errors.unknown')];
};
