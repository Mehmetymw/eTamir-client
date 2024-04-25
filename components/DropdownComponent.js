import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import countries from "../assets/countries.json";
const DropdownComponent = ({setCountryCode}) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const defaultCountry = countries.find(country => country.value === "90");
    setSelectedCountry(defaultCountry);
  }, [selectedCountry]);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Image source={{ uri: `https://flagsapi.com/${item.code}/flat/24.png` }} style={{ width: 24, height: 24 }} />
        <Text style={styles.textItem}>
          {item.name} (+{item.value})
        </Text>
        {item.value === selectedCountry?.value && (
          <AntDesign style={styles.icon} color="black" name="check" size={20} />
        )}
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdownContiner}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      
      iconStyle={styles.iconStyle}
      data={countries}
      maxHeight={300}
      placeholder="90"
      labelField="value"
      valueField="value"
      searchPlaceholder="Search..."
      value={selectedCountry}
      onChange={(item) => {
        setSelectedCountry(item);
        setCountryCode(item.value)
      }}
      renderLeftIcon={() => (
        <Image
          source={{ uri: `https://flagsapi.com/${selectedCountry?.code}/flat/24.png` }}
          style={{ width: 24, height: 24 , marginRight:5}} 
        />
      )}
      renderItem={renderItem}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdownContiner: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    padding: 5,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
