import React from 'react';
import { StyleSheet } from 'react-native';
import {
  IMessage,
  InputToolbar,
  InputToolbarProps,
} from 'react-native-gifted-chat';

import { Colors, Style } from '_styles';

const RenderInputToolbar = ({ ...props }: InputToolbarProps<IMessage>) => {
  return (
    <InputToolbar
      {...props}
      containerStyle={s.container}
      primaryStyle={s.input}
    />
  );
};

const s = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    borderTopWidth: 0,
    backgroundColor: Colors.BLUE[300],
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  input: {
    marginRight: 55,
    backgroundColor: Colors.WHITE,
    ...Style.smallBorderRadius,
    borderBottomRightRadius: 0,
  },
});

export default RenderInputToolbar;
