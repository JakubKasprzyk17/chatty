import { notify } from 'react-native-notificated';
import i18next from 'i18next';

import { useMutation } from '@apollo/client';

import { AuthApi, LoginMutation, RegisterMutation } from '_graphql';
import { parseError } from '_utils';

export const useLoginMutation = (onSuccess?: (data: LoginMutation) => void) => {
  return useMutation(AuthApi.LOGIN_USER, {
    onCompleted: data => {
      onSuccess?.(data);
    },
    onError: error => {
      notify('error', {
        params: {
          title: i18next.t('errors.error'),
          description: parseError(error)[0],
        },
      });
    },
  });
};

export const useRegisterMutation = (
  onSuccess?: (data: RegisterMutation) => void,
) => {
  return useMutation(AuthApi.REGISTER_USER, {
    onCompleted: data => {
      onSuccess?.(data);
    },
    onError: error => {
      notify('error', {
        params: {
          title: i18next.t('errors.error'),
          description: parseError(error)[0],
        },
      });
    },
  });
};
