import { View, Text ,StyleSheet} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

const Rating = ({ rating, size = 12 }) => {
  return (
    <View style={styles.ratingContainer}>
      {/* <MaterialIcons name="star" size={size} color="#1659a4" /> */}
      <Icon name="star" size={size} color="#1659a4" />
      <Text style={[styles.ratingText, { fontSize: size }]}>
        {rating.toFixed(1)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    justifyContent: "space-between",
    width: 'fit-content',
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 5,
    borderBlockColor: "#1659a4",
    borderWidth: 1,
  },
  ratingText: {
    fontWeight:"500",
    marginLeft: 5,
    color: "#1659a4",
  },
});

export default Rating;
