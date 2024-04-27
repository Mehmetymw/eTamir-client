import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomSearchBar from './CustomSearchBar';
import {useNavigation} from '@react-navigation/native';
import Location from '../Location';
import IonIcons from 'react-native-vector-icons/Ionicons';

const Header = ({
  onBackPress,
  hideLocation,
  location = 'Karacaoğlan Mah.',
  isHome,
  isMechanicList = false,
  searchText,
  onSearchChange,
}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  const handleSearchChange = text => {
    onSearchChange(text);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />

      <View style={styles.mainHeader}>
        {isHome ? (
          <Image style={styles.logo} source={require('../../icons/logo.png')} /> // Make sure the source path is correct and image format is compatible (e.g., png instead of svg)
        ) : (
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <IonIcons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        )}
        {!hideLocation && <Location location={location} />}
      </View>

      {isMechanicList && (
        <CustomSearchBar
          style={styles.searchBar}
          value={searchText}
          onChangeText={handleSearchChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: 5,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    alignItems: 'center',
    width: '100%',
  },
  mainHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
  },
  backButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  searchBar: {
    width: '100%',
  },
});

export default Header;
