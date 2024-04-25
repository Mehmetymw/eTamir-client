import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CategoryItem = ({ text, icon, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.categoryContainer}>
        <View style={styles.leftContainer}>
          <AntDesign name={icon} size={20} color="#1659a4" style={styles.icon} />
          <Text style={styles.categoryText}>{text}</Text>
        </View>
        <AntDesign name="right" size={20} color="#1659a4" />
      </View>
    </TouchableOpacity>
  );

  
  const styles = StyleSheet.create({
    categoryContainer: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderBottomColor: '#ddd',
      borderBottomWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    leftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    categoryText: {
      fontSize: 18,
      color: 'black',
      marginLeft: 10,
    },
    icon: {
      marginRight: 10,
    },
  });
export default CategoryItem