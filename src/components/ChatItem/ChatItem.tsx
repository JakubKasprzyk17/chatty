import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { notify } from 'react-native-notificated';
import { Image } from 'expo-image';
import { useTranslation } from 'react-i18next';
import { SingleRoomType } from 'src/graphql/__generated__/graphql';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { blurhash } from '_constants';
import { useMessageAddedQuery } from '_services';
import { Colors, Style, Typography } from '_styles';
import { AppNavigatorParamsList, AppRoutes } from '_types';

interface RoomType extends SingleRoomType {
  lastMessage: string;
  lastActivity: string;
  imageUri: string | null;
}

interface ChatItemProps {
  room: RoomType | null;
  navigation: NativeStackNavigationProp<
    AppNavigatorParamsList,
    AppRoutes.ChatRooms
  >;
}
const DEFAULT_IMAGE_SOURCE = require('_assets/images/placeholder.png');

const ChatItem = ({ room, navigation }: ChatItemProps) => {
  const { t } = useTranslation();
  const onPress = () => {
    if (!room?.id) {
      notify('error', {
        params: {
          title: t('errors.error'),
          description: t('errors.roomNotFound'),
        },
      });
      return;
    }
    navigation.navigate(AppRoutes.Chat, { id: room?.id });
  };
  const { data } = useMessageAddedQuery(room?.id!);
  const isNewMessages = !!data?.messageAdded;

  return (
    <Pressable
      onPress={onPress}
      style={[
        s.container,
        { backgroundColor: isNewMessages ? Colors.PLUM[500] : Colors.WHITE },
      ]}>
      <Image
        source={room?.imageUri ? { uri: room.imageUri } : DEFAULT_IMAGE_SOURCE}
        style={s.image}
        transition={1000}
        placeholder={{ blurhash }}
      />
      <View style={s.infoWrapper}>
        <Text style={s.name} numberOfLines={1}>
          {room?.name}
        </Text>
        <Text style={s.lastMessage}>{room?.lastMessage}</Text>
      </View>
      <View style={s.activityWrapper}>
        {isNewMessages ? (
          <View style={s.dot} />
        ) : (
          <Text style={s.lastMessage}>{room?.lastActivity}</Text>
        )}
      </View>
    </Pressable>
  );
};

export default ChatItem;

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',

    ...Style.smallBorderRadius,
    padding: 10,
    marginVertical: 10,
    backgroundColor: Colors.WHITE,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  infoWrapper: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'space-evenly',
  },
  name: {
    ...Typography.HEADING[4],
  },
  activityWrapper: {
    paddingRight: 5,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.SUCCESS,
  },
  lastMessage: {
    ...Typography.TEXT.bodyText,
    color: 'grey',
  },
});
