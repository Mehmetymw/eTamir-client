import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // veya react-native-vector-icons kullanarak import edebilirsiniz
import CustomSearchBar from './CustomSearchBar';
import { useNavigation } from '@react-navigation/native';
import Location from '../Location';

const Header = ({ onBackPress, location, isHome, isMechanicList = false, searchText, onSearchChange }) => {
    const navigation = useNavigation();

    const handleBackPress = () => {
        if (onBackPress) {
            onBackPress();
        } else {
            navigation.goBack();
        }
    };

    const handleSearchChange = (text) => {
        onSearchChange(text);
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true} />

            <View style={styles.mainheader}>
                <View style={styles.backButtonContainer}>
                    {!isHome &&
                        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                            <MaterialIcons name="arrow-back" size={24} color="black" />
                        </TouchableOpacity>
                    }
                    {
                        isHome &&
                        <Image style={styles.logo} source={require('../../icons/logo.svg')} />
                    }
                </View>
                <Location location={location}/>
            </View>

            {isMechanicList &&
                <CustomSearchBar
                    style={styles.searchBar}
                    value={searchText}
                    onChangeText={handleSearchChange}
                />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical:5,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHeight,
            },
            ios: {
                paddingTop: StatusBar.currentHeight,
            }
        }),
    },
    backButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        width: 64,
        height: 32,
        alignItems: 'center',
        justifyContent:'center',
        marginRight: 10, 
    },
    mainheader: {
        flexDirection: 'row', 
        alignItems: 'center', 
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        paddingRight:10
    },
    logo: {
        width: 64,
        height: 32,
    },
    locationContainer: {
        backgroundColor:'#DCDCE1',
        padding:5,
        borderRadius:5,
        marginRight:10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        color : 'rgb(103,103,103)',
        marginLeft: 5,
    },
    searchBar: {
        width: '100%',
    },
});

export default Header;
