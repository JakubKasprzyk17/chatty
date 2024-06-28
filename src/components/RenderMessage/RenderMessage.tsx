import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IMessage } from 'react-native-gifted-chat';

import { useAppSelector } from '_hooks';
import { Colors, Style, Typography } from '_styles';

interface RenderMessageProps {
  currentMessage?: IMessage;
  nextMessage?: IMessage;
}

const RenderMessage = ({ currentMessage, nextMessage }: RenderMessageProps) => {
  const { id } = useAppSelector(({ auth }) => auth);
  const isMyMessage = currentMessage?.user?._id === id;
  const isLastMessage = nextMessage?.user?._id !== currentMessage?.user?._id;

  return (
    <View
      style={[
        s.container,
        {
          marginBottom: isLastMessage ? 20 : 0,
          flexDirection: isMyMessage ? 'row-reverse' : 'row',
        },
      ]}>
      <View
        style={[
          s.textWrapper,
          {
            marginLeft: isMyMessage ? 0 : 10,
            marginRight: isMyMessage ? 10 : 0,
            borderBottomLeftRadius: isMyMessage ? 12 : 0,
            borderBottomRightRadius: isMyMessage ? 0 : 12,
            backgroundColor: isMyMessage ? Colors.PLUM[300] : Colors.WHITE,
          },
        ]}>
        <Text
          style={[
            s.text,
            { color: isMyMessage ? Colors.WHITE : Colors.BLACK },
          ]}>
          {currentMessage?.text}
        </Text>
      </View>
    </View>
  );
};

export default RenderMessage;

const s = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginVertical: 5,
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
    borderRadius: 12,
    margin: 5,
  },
  textWrapper: {
    ...Style.smallBorderRadius,
    padding: 12,
    width: '70%',
  },
  text: {
    ...Typography.TEXT.bodyText,
  },
});
