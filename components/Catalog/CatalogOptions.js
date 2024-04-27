import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CatalogItem from './CatalogItem'

const CatalogOptions = ({navigation}) => {
  return (
    <View style={styles.container}>
        <CatalogItem title="Test" height={20} onPress={() => navigation.navigate('TestScreen')} />
        <CatalogItem title="Dükkan Aç" height={20} onPress={() => navigation.navigate('AddStoreScreen')} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

export default CatalogOptions