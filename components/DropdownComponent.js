import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/AntDesign';
import countries from '../assets/countries.json'; // Bu JSON dosyasının ülke isimleri, değerleri ve bayrak kodları içermesi gerekmekte.

const DropdownComponent = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const defaultCountry = countries.find(country => country.value === '90');
    if (defaultCountry) {
      setSelectedCountry(defaultCountry);
    }
  }, []);

  const renderItem = (item) => (
    <View style={styles.item}>
      <Image
        source={{ uri: `https://flagsapi.com/${item.code}/flat/24.png` }}
        style={styles.image}
      />
      <Text style={styles.textItem}>+ {item.value}</Text>
      {item.value === selectedCountry?.value && (
        <Icon name="check" size={20} style={styles.icon} />
      )}
    </View>
  );

  return (
    <Dropdown
      style={styles.dropdownContainer}
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
  dropdownContainer: {
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
