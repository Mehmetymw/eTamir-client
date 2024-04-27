import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Güncellenmiş icon importu
import AppointmentScreen from '../screens/AppointmentScreen';
import FavScreen from '../screens/FavScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeStackScreen from '../navigators/HomeStackNavigator';
import AssistantScreen from '../screens/Asistan/AssistantScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../screens/Auth/LoginScreen'
import { getTokenFromStorage } from '../Services/StorageService'

const Tab = createBottomTabNavigator();

const Main = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const accessToken = await getTokenFromStorage();
        if (accessToken) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Token kontrolünde hata:', error);
      }
    };

    checkToken();
  }, []);

  if (!isLoggedIn) {
    return <LoginScreen navigation={navigation} />;
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Appointment') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Favourites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: '#1659a4',
        inactiveTintColor: 'gray',
        labelStyle: {
          display: 'none',
        },
        style: {
          borderTopWidth: 0,
        },
        iconStyle: {
          marginTop: 5,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Appointment" component={AppointmentScreen} />
      <Tab.Screen
        name="Assistant"
        component={AssistantScreen}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity {...props} style={styles.assistant}>
              <Image
                source={require('../icons/assistant.png')}
                style={{ width: 64, height: 64, borderRadius: 32 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name="Favourites" component={FavScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  assistant: {
    backgroundColor: 'white',
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -25,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 100,
  },
});

export default Main;
