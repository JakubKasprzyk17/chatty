import React, { useMemo } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ChatItem, Header } from '_components';
import { useGetRoomsQuery } from '_services';
import { Colors } from '_styles';
import { AppNavigatorParamsList, AppRoutes } from '_types';

interface ChatRoomsProps {
  navigation: NativeStackNavigationProp<
    AppNavigatorParamsList,
    AppRoutes.ChatRooms
  >;
}

const ChatRooms = ({ navigation }: ChatRoomsProps) => {
  const { data, loading, refetch } = useGetRoomsQuery();
  const mockedData = useMemo(
    () =>
      data?.usersRooms?.rooms?.map(item => ({
        ...item,
        lastActivity: 'Yesterday',
        lastMessage: 'This is the last message',
        imageUri: null,
      })),
    [data?.usersRooms?.rooms],
  );
  return (
    <View style={s.container}>
      <Header />
      <FlatList
        data={mockedData}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refetch} />
        }
        style={{ width: '100%' }}
        keyExtractor={(item, index) => item?.id || index.toString()}
        renderItem={({ item }) => (
          <ChatItem room={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default ChatRooms;

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLUE[100],
  },
});
