import React, { useCallback, useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  createNotifications,
  SlideInLeftSlideOutRight,
} from 'react-native-notificated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { client } from 'src/graphql/client';

import { ApolloProvider } from '@apollo/client';
import NetInfo from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';

import { i18n } from '_locales';
import { RootNavigator } from '_navigations';
import { setupStore } from '_store/index';

SplashScreen.preventAutoHideAsync();

const store = setupStore();

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
  });

  const { NotificationsProvider, notify } = createNotifications({
    duration: 1000,
    notificationPosition: 'top',
    animationConfig: SlideInLeftSlideOutRight,
    isNotch: true,
    defaultStylesSettings: {},
    gestureConfig: { direction: 'y' },
  });

  useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        notify('error', {
          params: {
            title: i18next.t('errors.error'),
            description: i18next.t('errors.noInternetConnection'),
          },
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [notify]);

  if (!fontsLoaded && !fontError) {
    SplashScreen.hideAsync();
    return null;
  }

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <I18nextProvider i18n={i18n}>
          <GestureHandlerRootView style={{ flex: 1, width: '100%' }}>
            <SafeAreaProvider>
              <NotificationsProvider>
                <NavigationContainer>
                  <RootNavigator />
                </NavigationContainer>
              </NotificationsProvider>
            </SafeAreaProvider>
          </GestureHandlerRootView>
        </I18nextProvider>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
