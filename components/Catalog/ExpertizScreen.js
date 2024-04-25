import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'; // Button bileşenini import edin
import { useNavigation } from '@react-navigation/native'; 
import Header from '../Header/Header';

const ExpertizScreen = () => {
  const navigation = useNavigation();

  return (
    <View >
      <Header isHome={false} onBackPress={() => navigation.goBack()} /> 
    </View>
  )
}

export default ExpertizScreen;
