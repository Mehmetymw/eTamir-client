// AuthService.js

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_TOKEN_CLIENT_ID,BASIC_TOKEN_CLIENT_ID,BASIC_TOKEN_CLIENT_SECRET, AUTH_TOKEN_CLIENT_SECRET, TOKEN_API_URL,REFRESH_TOKEN_KEY } from '@env';

const AuthService = axios.create({
  baseURL: TOKEN_API_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export const getTokenWithCredentials = async (email, password) => {
  try {
    const data = new URLSearchParams();
    data.append('grant_type', 'password');
    data.append('client_id', AUTH_TOKEN_CLIENT_ID);
    data.append('client_secret', AUTH_TOKEN_CLIENT_SECRET);
    data.append('username', email);
    data.append('password', password);

    const response = await AuthService.post("/connect/token", data);
    const { access_token ,refresh_token} = response.data;

    await AsyncStorage.setItem('auth_token', access_token);
    await AsyncStorage.setItem('refresh_token', refresh_token);

    return access_token;
  } catch (error) {
    throw new Error("Token alınamadı: " + error.message);
  }
};

export const getTokenBasic = async () => {
  try {
    const data = new URLSearchParams();
    data.append('grant_type', 'client_credentials');
    data.append('client_id', BASIC_TOKEN_CLIENT_ID);
    data.append('client_secret', BASIC_TOKEN_CLIENT_SECRET);

    const response = await AuthService.post("/connect/token", data);
    const { access_token } = response.data;

    return access_token;
  } catch (error) {
    throw new Error("Token alınamadı: " + error.message);
  }
};

export const refreshToken = async () => {
  try {
    const data = new URLSearchParams();
    data.append('grant_type', 'refresh_token');
    data.append('client_id', AUTH_TOKEN_CLIENT_ID);
    data.append('client_secret', AUTH_TOKEN_CLIENT_SECRET);
    data.append('refresh_token', await AsyncStorage.getItem(REFRESH_TOKEN_KEY));

    const response = await AuthService.post("/connect/token", data);
    const { access_token } = response.data;

    await AsyncStorage.setItem('auth_token', access_token);

    return access_token;
  } catch (error) {
    throw new Error("Token alınamadı: " + error.message);
  }
}


export default AuthService;
