import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'; // Button bileşenini import edin
import { useNavigation } from '@react-navigation/native'; 
import Header from '../Header/Header';
import Categories from '../Categoires'

const UstaCagirScreen = () => {

  return (
    <View >
      <Header /> 
      <Categories isCallable={true}></Categories>
    </View>
  )
}

export default UstaCagirScreen;
