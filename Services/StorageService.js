// StorageService.js

import AsyncStorage from '@react-native-async-storage/async-storage';
import {refreshTokenAndStore, isTokenExpired} from './AuthService';
import {refreshToken} from './AuthService';

export const saveTokenToStorage = async token => {
  try {
    await AsyncStorage.setItem(process.env.AUTH_TOKEN_KEY, token);
  } catch (error) {
    console.error("Token AsyncStorage'e kaydedilirken bir hata oluştu:", error);
    throw error;
  }
};

export const getTokenFromStorage = async (
  tokenKey = process.env.AUTH_TOKEN_KEY,
) => {
  try {
    var accessToken = await AsyncStorage.getItem(tokenKey);
    if ((!accessToken || isTokenExpired(accessToken)) && tokenKey === process.env.REFRESH_TOKEN_KEY) {
      accessToken = await refreshToken(accessToken);
      console.log("accesToken "+accessToken);
    }
    
    return accessToken;
  } catch (error) {
    console.error('Token yönetimi sırasında bir hata oluştu:', error);
  }
};

export const removeTokenFromStorage = async () => {
  try {
    await AsyncStorage.removeItem(process.env.AUTH_TOKEN_KEY);
    var token = getTokenFromStorage(process.env.REFRESH_TOKEN_KEY);
    if (token) {
      await AsyncStorage.removeItem(process.env.REFRESH_TOKEN_KEY);
    }
  } catch (error) {
    console.error(
      "Token AsyncStorage'den kaldırılırken bir hata oluştu:",
      error,
    );
    throw error;
  }
};
