// RequestAppointmentScreen.js
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Header from '../../components/Header/Header';
import CustomDateTimePicker from '../../components/DateTimePicker';

const RequestAppointmentScreen = ({ route }) => {
  const { mechanic } = route.params;
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const handleDateTimeSelect = (dateTime) => {
    setSelectedDateTime(dateTime);
  };

  const requestAppointment = () => {
    if (selectedDateTime) {
      console.log('Appointment requested for:', selectedDateTime);
    } else {
      Alert.alert('Hata', 'Lütfen bir tarih ve saat seçiniz.');
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.mechanicInfo}>
          <Text style={styles.mechanicName}>{mechanic.name}</Text>
          <CustomDateTimePicker onDateTimeSelect={handleDateTimeSelect} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  mechanicInfo: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  mechanicName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RequestAppointmentScreen;
