import { View, Text, Image ,StyleSheet} from "react-native";
import React from "react";

const Logo = ({ width }) => (
  <View style={[styles.container, { width: width }]}>
    <Image
      source={require("../icons/logo.png")} // Logo resminin yolunu düzeltin
      style={styles.logo}
      resizeMode="contain"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center", 
    marginBottom: 20, 
  },
  logo: {
    width: "100%", 
    height: 100, 
  },
});

export default Logo;
