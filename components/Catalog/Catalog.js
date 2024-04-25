// Catalog.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import CatalogItem from './CatalogItem';
import MainAdvert from '../Advert/MainAdvert'

const Catalog = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CatalogItem title="Ustaya Git" img={'../../icons/ustaya_git.png'} onPress={() => navigation.navigate('UstayaGitScreen')} />
      <CatalogItem title="Usta Çağır"  img={'../../icons/usta_cagir.png'} onPress={() => navigation.navigate('UstaCagirScreen')} />
      <CatalogItem title="Expertiz" img={'../../icons/expertiz.png'} onPress={() => navigation.navigate('ExpertizScreen')} />
      <CatalogItem title="Çekici" img={'../../icons/cekici.png'} onPress={() => navigation.navigate('CekiciScreen')} />
      {/* <MainAdvert/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default Catalog;
