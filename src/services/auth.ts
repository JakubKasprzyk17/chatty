import { useMutation } from '@apollo/client';

import { AuthApi, LoginMutation, RegisterMutation } from '_graphql';

export const useLoginMutation = (onSuccess?: (data: LoginMutation) => void) => {
  return useMutation(AuthApi.LOGIN_USER, {
    onCompleted: data => {
      onSuccess?.(data);
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
  });
};
