import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { notify } from 'react-native-notificated';
import { useTranslation } from 'react-i18next';
import {
  RoomQuery,
  TypingUserSubscriptionSubscription,
} from 'src/graphql/__generated__/graphql';

import {
  RenderInputToolbar,
  RenderMessage,
  RenderSend,
  UserTyping,
} from '_components';
import { ChatApi } from '_graphql';
import { useAppSelector } from '_hooks';
import { useSendMessageMutation } from '_services';

type Room = NonNullable<RoomQuery['room']>;

interface MessagesProps {
  roomData: NonNullable<RoomQuery['room']>;
  typingUser: TypingUserSubscriptionSubscription['typingUser'];
  onTyping: () => void;
}

export const parseMessageToIMessage = (
  message: NonNullable<Room['messages']>[0],
): IMessage => {
  return {
    _id: message?.id!,
    text: message?.body!,
    createdAt: new Date(message?.insertedAt!),
    user: {
      _id: message?.user?.id!,
      name: message?.user?.firstName!,
    },
  };
};

const Messages = ({ roomData, typingUser, onTyping }: MessagesProps) => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<IMessage[]>(
    roomData.messages!.map(parseMessageToIMessage),
  );
  const { id } = useAppSelector(({ auth }) => auth);

  const [sendMessageMutation] = useSendMessageMutation({
    onError: (e, variables) => {
      setMessages(previousMessages =>
        GiftedChat.append(
          previousMessages.filter(msg => msg.text !== variables?.body),
          [failedMessage(variables?.body)],
        ),
      );
      notify('error', {
        params: {
          title: t('errors.error'),
          description: e.message,
        },
      });
    },
  });

  const failedMessage = useCallback(
    (text: string): IMessage => {
      return {
        _id: `${Date.now()}`,
        text,
        user: { _id: id },
        createdAt: new Date(),
      };
    },
    [id],
  );

  const onSend = useCallback(
    (msg: IMessage[]) => {
      const body = msg[0]?.text.trim();

      if (!body) return;

      sendMessageMutation({
        variables: {
          body,
          roomId: roomData?.id!,
        },
        refetchQueries: [
          {
            query: ChatApi.GET_ROOM,
            variables: { id: roomData.id },
          },
        ],
      });

      setMessages(previousMessages => GiftedChat.append(previousMessages, msg));
    },
    [sendMessageMutation, roomData?.id],
  );

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <GiftedChat
        messages={messages}
        user={{
          _id: roomData.user?.id!,
          name: roomData.user?.firstName!,
        }}
        onInputTextChanged={text => {
          if (text === '') return;
          onTyping();
        }}
        renderInputToolbar={RenderInputToolbar}
        renderSend={RenderSend}
        renderMessage={message => (
          <RenderMessage
            currentMessage={message.currentMessage}
            nextMessage={message.nextMessage}
          />
        )}
        renderFooter={() =>
          !!typingUser && typingUser.id !== id ? <UserTyping /> : null
        }
        minInputToolbarHeight={120}
        onSend={messages => onSend(messages)}
        messagesContainerStyle={{
          marginVertical: 10,
        }}
      />
    </View>
  );
};

export default Messages;
