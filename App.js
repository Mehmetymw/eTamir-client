// App.js

import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "./screens/Auth/LoginScreen";
import SignupScreen from "./screens/Auth/SignupScreen";
import Main from "./components/Main";
import { getTokenFromStorage } from "./Services/StorageService";

const Stack = createStackNavigator();

export default App = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkTokenValidity = async () => {
      try {
        const storedToken = await getTokenFromStorage();
        if (storedToken !== null) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error(
          "Token AsyncStorage'den alınırken bir hata oluştu:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    checkTokenValidity();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? "Main" : "Login"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Main"
          component={Main}
          initialParams={{ countryCode: "90" }} // countryCode parametresini ekleyin
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
