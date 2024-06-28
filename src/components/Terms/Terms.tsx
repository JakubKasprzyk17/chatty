import { useCallback } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { notify } from 'react-native-notificated';
import * as Linking from 'expo-linking';
import { Trans, useTranslation } from 'react-i18next';

import { Colors, Typography } from '_styles';

const Terms = () => {
  const { t } = useTranslation();

  const handlePress = useCallback(
    async (url: string) => {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        notify('error', {
          params: {
            title: t('errors.error'),
            description: t('errors.invalidLink'),
          },
        });
      }
    },
    [t],
  );

  return (
    <Text style={s.container}>
      <Trans
        components={{
          Terms: (
            <Pressable
              onPress={() => handlePress('https://github.com/JakubKasprzyk17')}
            />
          ),
          Privacy: (
            <Pressable
              onPress={() => handlePress('https://github.com/JakubKasprzyk17')}
            />
          ),
          Text: <Text style={s.text} />,
        }}>
        {t('auth.terms')}
      </Trans>
    </Text>
  );
};

export default Terms;

const s = StyleSheet.create({
  container: {
    textAlign: 'center',
    marginTop: 10,
    ...Typography.TEXT.bodyText,
    color: Colors.WHITE,
  },
  text: {
    ...Typography.TEXT.bodyText,
    textDecorationLine: 'underline',
    marginBottom: -2,
    color: Colors.BLUE[500],
  },
});
