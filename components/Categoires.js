import { View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import CategoryItem from '../components/CategoryItem';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import {getRequestWithCredentials} from '../Services/RequestService';
import {CATEGORIES_API_URL} from '@env'

const Categories = ({isCallable}) => {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await getRequestWithCredentials(process.env.CATEGORIES_API_URL)
        
        setCategories(response.data);
      } catch (error) {
        throw new Error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  
  const handleCategoryPress = (categoryId,categoryName) => {
    navigation.navigate('MechanicListScreen', { categoryId , categoryName, isCallable}); 
  };  

  return (
    <View>
      {categories.map((category, index) => (
          <CategoryItem key={index} text={category.name} onPress={() => handleCategoryPress(category.id,category.name)}/>
      ))}
    </View>
  );
};

export default Categories;
