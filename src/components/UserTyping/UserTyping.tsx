import { StyleSheet, View } from 'react-native';
import Reanimated from 'react-native-reanimated';
import { Image } from 'expo-image';

import { blurhash } from '_constants';
import { Colors, Style } from '_styles';

const DEFAULT_IMAGE_SOURCE = require('_assets/images/placeholder.png');

const UserTyping = () => {
  return (
    <View style={s.container}>
      <Image
        source={DEFAULT_IMAGE_SOURCE}
        style={s.image}
        transition={1000}
        placeholder={{ blurhash }}
      />
      <View style={s.textWrapper}>
        <Reanimated.Text style={s.text}>.</Reanimated.Text>
      </View>
    </View>
  );
};

export default UserTyping;

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textWrapper: {
    backgroundColor: Colors.WHITE,
    width: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    ...Style.smallBorderRadius,
    borderBottomLeftRadius: 0,
  },
  text: {
    color: Colors.BLACK,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
