import {View, Text} from 'react-native';
import React, {useState} from 'react';

export const GetCategories = async () => {
  try {
    var categories = await getRequestWithCredentials('/catalog/categories');
  } catch (error) {
    throw new Error(
      'An error occurred while getting categories: ' + error.message,
    );
  }
};
