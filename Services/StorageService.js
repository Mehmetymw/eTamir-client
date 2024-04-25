// StorageService.js

import AsyncStorage from "@react-native-async-storage/async-storage";
import {AUTH_TOKEN_KEY,REFRESH_TOKEN_KEY} from "@env";

export const saveTokenToStorage = async (token) => {
  try {
    await AsyncStorage.setItem(AUTH_TOKEN_NAME, token);
  } catch (error) {
    console.error("Token AsyncStorage'e kaydedilirken bir hata oluştu:", error);
    throw error;
  }
};

export const getTokenFromStorage = async (tokenKey = AUTH_TOKEN_KEY) => {
  try {
    const token = await AsyncStorage.getItem(tokenKey);
    return token;
  } catch (error) {
    console.error("Token AsyncStorage'den alınırken bir hata oluştu:", error);
    throw error;
  }
};

export const removeTokenFromStorage = async () => {
  try {
    await AsyncStorage.removeItem(AUTH_TOKEN_KEY);
    var token = getTokenFromStorage(REFRESH_TOKEN_KEY);
    if(token){
      await AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
    }
  } catch (error) {
    console.error("Token AsyncStorage'den kaldırılırken bir hata oluştu:", error);
    throw error;
  }
};
