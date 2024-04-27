import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Güncellenmiş import

const Location = ({ location }) => {
  return (
    <TouchableOpacity style={styles.locationContainer}>
      <Icon name="location-on" size={16} color="rgb(103, 103, 103)" />
      <Text style={styles.locationText}>{location}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  locationContainer: {
    backgroundColor: '#DCDCE1',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: 'rgb(103, 103, 103)',
    marginLeft: 5,
  },
});

export default Location;
