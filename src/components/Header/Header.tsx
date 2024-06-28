import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { useTranslation } from 'react-i18next';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { blurhash } from '_constants';
import { Back, Phone, Rooms, Search, VideoCall } from '_icons';
import { Colors, Typography } from '_styles';
import { AppNavigatorParamsList, AppRoutes } from '_types';

export enum HeaderType {
  HOME = 0,
  CHAT = 1,
}

interface Props {
  title?: string;
  subtitle?: string;
  imageUri?: string;
  type?: HeaderType;
  navigation?: NativeStackNavigationProp<
    AppNavigatorParamsList,
    AppRoutes.Chat
  >;
}

const DEFAULT_IMAGE_SOURCE = require('_assets/images/placeholder.png');

const Header = ({
  title,
  subtitle,
  imageUri,
  type = HeaderType.HOME,
  navigation,
}: Props) => {
  const { top } = useSafeAreaInsets();
  const { t } = useTranslation();

  return (
    <View style={[s.container, { paddingTop: top }]}>
      {type === HeaderType.HOME && (
        <>
          <Text style={s.header}>{t('chat.rooms')}</Text>
          <View style={s.iconWrapper}>
            <Pressable style={s.icon}>
              <Search />
            </Pressable>
            <Pressable style={s.icon}>
              <Rooms />
            </Pressable>
          </View>
        </>
      )}
      {type === HeaderType.CHAT && (
        <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Pressable onPress={navigation?.goBack}>
              <Back />
            </Pressable>
            <Image
              source={imageUri ? { uri: imageUri } : DEFAULT_IMAGE_SOURCE}
              style={s.image}
              transition={1000}
              placeholder={{ blurhash }}
            />
          </View>
          <View>
            <Text style={s.title}>{title}</Text>
            <Text style={s.subtitle}>{subtitle || t('chat.activeNow')}</Text>
          </View>
          <View style={s.iconWrapper}>
            <Pressable style={s.icon}>
              <Phone />
            </Pressable>
            <Pressable style={s.icon}>
              <VideoCall />
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
};

export default Header;

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: Colors.BLUE[300],
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    ...Typography.HEADING[2],
    color: Colors.PLUM[500],
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 5,
  },
  image: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  title: {
    ...Typography.HEADING[4],
    color: Colors.PLUM[500],
  },
  subtitle: {
    ...Typography.TEXT.bodyText,
    color: Colors.WHITE,
  },
});
