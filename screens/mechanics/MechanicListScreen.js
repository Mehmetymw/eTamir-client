import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet ,TouchableOpacity} from "react-native";
import axios from "axios";
import Mechanic from "../../components/Mechanic/Mechanic";
import Header from "../../components/Header/Header";
import { getRequestWithCredentials } from "../../Services/RequestService";
import {MECHANICS_API_URL} from '@env'

const MechanicListScreen = ({ route, navigation }) => {
  const { categoryId, categoryName, isCallable } = route.params;
  const [mechanics, setMechanics] = useState([]);
  const [filteredMechanics, setFilteredMechanics] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = new URL(MECHANICS_API_URL)+`/getallbycategoryId/${categoryId}`;
                
        const response = await getRequestWithCredentials(url);

        const fetchedMechanics = response.data;
        setMechanics(fetchedMechanics);
        setFilteredMechanics(fetchedMechanics);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [categoryId]);

  useEffect(() => {
    var filtered = mechanics.filter((mechanic) =>
      mechanic.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (isCallable) filtered = filtered.filter((t) => t.callable == true);

    setFilteredMechanics(filtered);
  }, [searchText, mechanics]);

  const handleMechanicPress = (id) => {
    navigation.navigate("MechanicDetailScreen", { id });
  };

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <Header
        searchText={searchText}
        isMechanicList={true}
        onSearchChange={handleSearchChange}
      />
      <View style={styles.mapContainer}>
        <Text style={styles.categoryName}>{categoryName}</Text>
        <TouchableOpacity
          style={styles.mapButton}
          onPress={() => {
          }}
        >
          <Text style={styles.mapButtonText}>Map View</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style = {styles.mechanics}>
        {filteredMechanics.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleMechanicPress(item.id)}
          >
            <Mechanic mechanic={item} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  mapContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
  },

  mapButton: {
    backgroundColor: "#FD5557",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },

  mapButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  categoryName: {
    fontWeight: "500",
    padding: 3,
  },
  mechanics: {
    gap:10
  }
});

export default MechanicListScreen;

