import AsyncStorage from '@react-native-async-storage/async-storage';

import { storage } from '_store/mmkv';

export const getToken = async () => {
  return storage.getString('token');
};

export const setToken = (token: string) => {
  return storage.set('token', token);
};

export const getAsyncStorageToken = async (): Promise<string | null> => {
  const token = await AsyncStorage.getItem('asyncStorageToken');
  if (!token) {
    return null;
  }

  return token;
};

export const setAsyncStorageToken = (token: string) => {
  return AsyncStorage.setItem('asyncStorageToken', token);
};
