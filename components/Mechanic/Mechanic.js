import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Rating from "../Rating";

function Mechanic({ mechanic }) {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.nameRatingContainer}>
          <Text style={styles.title}>{mechanic.name}</Text>
          <Rating rating={mechanic.rating}></Rating>
        </View>
        <Text style={styles.location}>{mechanic.location}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: mechanic.picture }} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: "white",
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomColor: 'lightgrey',

  },
  infoContainer: {
    flex: 1,
    padding: 10,
  },
  nameRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  title: {
    fontWeight: '600',
    marginRight: 10,
  },
  ratingContainer: {
    justifyContent:'space-between',
    width:48,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 5,
    borderBlockColor: '#1659a4',
    borderWidth:1,
    marginLeft: 10,
  },
  rating: {
    marginLeft: 2,
    color: '#1659a4',
  },
  location: {
    color: '#666',
    position: 'absolute',
    left: 10,
    bottom: 10,
  },
  imageContainer: {
    width: 120, 
    padding:5,
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
});

export default Mechanic;
