import { View, Text ,StyleSheet,TouchableOpacity} from "react-native";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons'; // veya react-native-vector-icons kullanarak import edebilirsiniz

const Location = ({location}) => {
  return (
    <TouchableOpacity style={styles.locationContainer}>
      <MaterialIcons name="location-on" size={16} color="rgb(103,103,103)'" />
      <Text style={styles.locationText}>{location}Karacaoğlan Mah.</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
   
    locationContainer: {
        backgroundColor:'#DCDCE1',
        padding:5,
        borderRadius:5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        color : 'rgb(103,103,103)',
        marginLeft: 5,
    },
   
});
export default Location;
