// Catalog.js
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, useAnimatedValue} from 'react-native';
import CatalogItem from './CatalogItem';
import {GetCatalogs} from '../../Services/CatalogService';

const Catalog = ({navigation}) => {
  const [catalogs, setCatalogs] = useState([]);
  useEffect(() => {
    const data = GetCatalogs();
    console.log("data:"+data);
    if (data) {
      setCatalogs(data);
      console.log("catalogs:"+catalogs);
    }
  }, []);

  if (!catalogs) return <></>;

  return (
    <View style={styles.container}>
      {/* {catalogs.map((catalog, index) => {
        return (
          <CatalogItem
            key={index}
            title={catalog.name}
            img={catalog.image}
            onPress={() => navigation.navigate("CatalogScreen")}
          />
        );
      })} */}

      {/* <MainAdvert/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default Catalog;
