import React from 'react';
import { IMessage, Send, SendProps } from 'react-native-gifted-chat';

import { Send as SendIcon } from '_icons';

const RenderSend = (props: SendProps<IMessage>) => {
  return (
    <Send
      {...props}
      alwaysShowSend
      containerStyle={{ position: 'absolute', right: -55 }}>
      <SendIcon />
    </Send>
  );
};

export default RenderSend;
