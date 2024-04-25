// CatalogItem.js
import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Card, Text } from "react-native-paper";

const CatalogItem = ({ title, img, onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Card style={styles.card}>
        <Image style={styles.image} source={{ uri: img }} resizeMode="cover" />
        <Card.Content style={styles.content}>
          <Text style={styles.title}>{title}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "49%",
    marginBottom: 10,
    opacity: 1,
    alignSelf: "center",
  },
  card: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },
  image: {
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    padding: 10,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
});

export default CatalogItem;
