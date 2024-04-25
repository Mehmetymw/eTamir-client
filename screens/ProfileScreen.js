import { StyleSheet, Text, TouchableOpacity } from "react-native";

import {removeTokenFromStorage} from "../Services/StorageService";
import { useNavigation } from "@react-navigation/native";
function ProfileScreen() {
  var navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        removeTokenFromStorage();
        navigation.navigate("Login");
      }}
    >
      <Text>Çıkış Yap</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ddd",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
