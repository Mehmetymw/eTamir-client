import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

const CustomSearchBar = ({value,onChangeText}) => {

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search..."
        onChangeText={onChangeText}
        value={value}
        platform="ios"
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
        cancelButtonProps={{ color: '#007aff' }} // İptal butonu rengi
        clearIcon={{ color: '#86939e' }} // Temizleme simgesi rengi
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 5,
    width: '100%',
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  inputContainer: {
    backgroundColor: '#dcdce1',
    borderRadius: 10,
    borderWidth: 0,
    height: 36, 
  },
  input: {
    fontSize: 14,
  },
});

export default CustomSearchBar;
