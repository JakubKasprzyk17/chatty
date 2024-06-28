import { notify } from 'react-native-notificated';

import {
  ApolloError,
  OperationVariables,
  useMutation,
  useQuery,
  useSubscription,
} from '@apollo/client';

import { ChatApi, SendMessageMutation } from '_graphql';
import { i18n } from '_locales';
import { parseError } from '_utils';

export const useGetRoomsQuery = (onSuccess?: () => void) => {
  return useQuery(ChatApi.GET_USERS_ROOMS, {
    onCompleted: () => {
      onSuccess?.();
    },
  });
};

export const useGetRoomQuery = (id: string, onSuccess?: () => void) => {
  return useQuery(ChatApi.GET_ROOM, {
    variables: { id },
    onCompleted: () => {
      onSuccess?.();
    },
  });
};

export const useGetHeaderRoomQuery = (id: string, onSuccess?: () => void) => {
  return useQuery(ChatApi.GET_HEADER_ROOM, {
    variables: { id },
    onCompleted: () => {
      onSuccess?.();
    },
  });
};

export const useSendMessageMutation = ({
  onSuccess,
}: {
  onSuccess?: (data: SendMessageMutation) => void;
  onError?: (error: ApolloError, variables?: OperationVariables) => void;
}) => {
  return useMutation(ChatApi.SEND_MESSAGE, {
    onCompleted: data => onSuccess?.(data),
    onError: error => {
      notify('error', {
        params: {
          title: i18n.t('errors.error'),
          description: parseError(error)[0],
        },
      });
    },
  });
};

export const useSetTypingUserQuery = () => {
  return useMutation(ChatApi.SET_TYPING_USER, {
    onError: error => {
      notify('error', {
        params: {
          title: i18n.t('errors.error'),
          description: parseError(error)[0],
        },
      });
    },
  });
};

export const useGetTypingUserQuery = (id: string) => {
  return useSubscription(ChatApi.GET_TYPING_USER, {
    variables: {
      roomId: id,
    },
    onError: error => {
      notify('error', {
        params: {
          title: i18n.t('errors.error'),
          description: parseError(error)[0],
        },
      });
    },
  });
};

export const useMessageAddedQuery = (id: string) => {
  return useSubscription(ChatApi.MESSAGE_ADDED, {
    variables: {
      roomId: id,
    },
    onError: error => {
      notify('error', {
        params: {
          title: i18n.t('errors.error'),
          description: parseError(error)[0],
        },
      });
    },
  });
};
