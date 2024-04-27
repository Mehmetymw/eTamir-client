import axios from "axios";
import qs from "qs"; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import {jwtDecode} from "jwt-decode"
import { decode } from "base-64";

global.atob = decode;
const AuthService = axios.create({
  baseURL:  process.env.TOKEN_API_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  transformRequest: [data => qs.stringify(data)], 
});

export const getTokenWithCredentials = async (email, password) => {
  try {
    const data = {
      grant_type: 'password',
      client_id: process.env.AUTH_TOKEN_CLIENT_ID,
      client_secret: process.env.AUTH_TOKEN_CLIENT_SECRET,
      username: email,
      password: password
    };
    const response = await AuthService.post("/connect/token", data);
    console.log(data);
    const { access_token ,refresh_token} = response.data;

    await AsyncStorage.setItem(process.env.AUTH_TOKEN_KEY, access_token);
    await AsyncStorage.setItem(process.env.REFRESH_TOKEN_KEY, refresh_token);

    console.log("ac:"+access_token);
    console.log("rt:"+refresh_token);
    return access_token;
  } catch (error) {
    throw new Error("Token alınamadı: " + process.env.AUTH_TOKEN_CLIENT_ID);
  }
};

export const getTokenBasic = async () => {
  try {
    const data = {
      grant_type: 'client_credentials',
      client_id: process.env.BASIC_TOKEN_CLIENT_ID,
      client_secret: process.env.BASIC_TOKEN_CLIENT_SECRET
    };

    const response = await AuthService.post("/connect/token", data);
    console.log(data);

    const { access_token } = response.data;

    return access_token;
  } catch (error) {
    throw new Error("Token alınamadı: " + error.message);
  }
};

export const refreshToken = async () => {
  try {
    const refresh_token = await getRefreshToken();
    const data = {
      grant_type: 'refresh_token',
      client_id: process.env.AUTH_TOKEN_CLIENT_ID,
      client_secret: process.env.AUTH_TOKEN_CLIENT_SECRET,
      refresh_token: refresh_token
    };
    
    console.log("data"+data);
    const response = await AuthService.post("/connect/token", data);
    
    const { access_token } = response.data;

    await AsyncStorage.setItem('auth_token', access_token);

    return access_token;
  } catch (error) {
    throw new Error("Token alınamadı: " + error.message);
  }
}

export const getRefreshToken = async () => {
  try {
    return await AsyncStorage.getItem(process.env.REFRESH_TOKEN_KEY);
  } catch (error) {
    throw new Error("Token alınamadı: " + error.message);
  }
}


export const isTokenExpired = (token) => {
  if (!token) {
    return true;
  }

  try {
    const decodedToken = jwtDecode(token);

    if (!decodedToken.exp) {
      return false;
    }
    const expirationTime = decodedToken.exp * 1000;
    
    const currentTime = new Date().getTime();

    return currentTime > expirationTime;
  } catch (error) {
    console.error('Token çözümlenirken bir hata oluştu:', error);
    return true;
  }
};
export default AuthService;
