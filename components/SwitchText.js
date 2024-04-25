import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const SwitchText = ({ text, onPress }) => (
  <View style={styles.switchContainer}>
    <TouchableOpacity style={styles.switchButton} onPress={onPress}>
      <Text style={styles.switchText}>{text}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  switchContainer: {
    position: "absolute",
    bottom: 5,
    width: "100%",
    alignItems: "center",
  },
  switchButton: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  switchText: {
    color: "#1659a4",
    fontSize: 16,
    textDecorationLine: "underline",
    textAlign: "center",
  },
});

export default SwitchText;
