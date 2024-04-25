import axios from "axios";
import { getTokenFromStorage } from "./StorageService";

const authRequest = axios.create({
  baseURL: process.env.API_GATEWAY_URL,
});

const basicRequest = axios.create({
  baseURL: process.env.API_GATEWAY_URL,
});

authRequest.interceptors.request.use(
  async (config) => {
    const token = await getTokenFromStorage();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getRequestWithCredentials = async (url) => {
  try {
    const response = await authRequest.get(url);
    return response.data;
  } catch (error) {
    console.error("İstek yapılırken bir hata oluştu:", error);
    throw new Error("İstek yapılırken bir hata oluştu: " + error.message);
  }
};

export const postRequestWithCredentials = async (url, data) => {
  try {
    const response = await authRequest.post(url, data);
    return response;
  } catch (error) {
    console.error("An error occurred while making the request:", error);
    throw new Error(
      "An error occurred while making the request: " + error.message
    );
  }
};

export const postBasic = async (url, data, token) => {
  try {
    const response = await basicRequest.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    return response;
  } catch (error) {
    console.error("An error occurred while making the request:", error);
    throw new Error(
      "An error occurred while making the request: " + error.message
    );
  }
};
