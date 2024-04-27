import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header/Header'
import Categories from '../components/Categoires'

const CatalogScreen = ({isCallable}) => {
  return (
    <View >
    <Header /> 
    <Categories></Categories>
  </View>
  )
}


export default CatalogScreen