import React, { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
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

  useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const client = new ApolloClient({
    uri: 'https://chat.thewidlarzgroup.com/api/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <I18nextProvider i18n={i18n}>
          <SafeAreaProvider>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </SafeAreaProvider>
        </I18nextProvider>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
