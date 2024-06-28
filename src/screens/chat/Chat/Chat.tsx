import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Header, HeaderType, Messages } from '_components';
import { useAppSelector } from '_hooks';
import {
  useGetHeaderRoomQuery,
  useGetRoomQuery,
  useGetTypingUserQuery,
  useSetTypingUserQuery,
} from '_services';
import { Colors } from '_styles';
import { AppNavigatorParamsList, AppRoutes } from '_types';

interface ChatProps {
  navigation: NativeStackNavigationProp<AppNavigatorParamsList, AppRoutes.Chat>;
  route: RouteProp<AppNavigatorParamsList, AppRoutes.Chat>;
}
const Chat = ({ navigation, route }: ChatProps) => {
  const { id } = route.params;
  const { id: userId } = useAppSelector(({ auth }) => auth);

  const { data, loading } = useGetRoomQuery(id);
  const { data: headerData } = useGetHeaderRoomQuery(id);
  const [setTypingUser] = useSetTypingUserQuery();
  const { data: typingUser } = useGetTypingUserQuery(id);

  const chatUser = headerData?.room?.messages?.filter(
    message => message?.user?.id !== userId,
  )?.[0]?.user;

  const fullName = `${chatUser?.firstName} ${chatUser?.lastName}`;

  if (loading) {
    return (
      <View style={s.container}>
        <ActivityIndicator size="large" color={Colors.PLUM[500]} />
      </View>
    );
  }

  return (
    <View style={s.container}>
      <Header type={HeaderType.CHAT} title={fullName} navigation={navigation} />
      {data?.room?.messages && (
        <Messages
          roomData={data?.room}
          onTyping={() => {
            setTypingUser({
              variables: {
                roomId: id,
              },
            });
          }}
          typingUser={typingUser?.typingUser}
        />
      )}
    </View>
  );
};

export default Chat;

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLUE[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
});
