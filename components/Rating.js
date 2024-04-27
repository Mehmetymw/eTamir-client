import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // FontAwesome icon kullanımı

const Rating = ({ rating, size = 12 }) => {
  return (
    <View style={styles.ratingContainer}>
      <Icon name="star" size={size} color="#1659a4" /> {/* FontAwesome icon */}
      <Text style={[styles.ratingText, { fontSize: size }]}>
        {rating.toFixed(1)} {/* Derecelendirmeyi bir ondalık basamakla formatla */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 5,
    borderColor: "#1659a4", // borderColor ile değiştirildi
    borderWidth: 1,
  },
  ratingText: {
    fontWeight: "500",
    marginLeft: 5,
    color: "#1659a4",
  },
});

export default Rating;
