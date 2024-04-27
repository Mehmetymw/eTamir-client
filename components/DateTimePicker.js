import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Modal,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/FontAwesome";

const CustomDateTimePicker = ({ onDateTimeSelect, workingHours = { start: 9, end: 18 }, appointmentInterval = 60 }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);
    const [availableTimes, setAvailableTimes] = useState([]);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedHourIndex, setSelectedHourIndex] = useState(null);
  
    useEffect(() => {
      generateAvailableTimes(selectedDate);
    }, [selectedDate]);
  
    const generateAvailableTimes = (date) => {
      const startHour = workingHours.start;
      const endHour = workingHours.end;
      const interval = appointmentInterval;
  
      const times = [];
      const currentDate = new Date(date);
      for (let hour = startHour; hour <= endHour; hour++) {
        for (let minute = 0; minute < 60; minute += interval) {
          const time = new Date(currentDate);
          time.setHours(hour, minute, 0, 0);
          times.push(time);
        }
      }
      setAvailableTimes(times);
    };
  
    const handleDateChange = (event, selected) => {
      const currentDate = selected || selectedDate;
      setSelectedDate(currentDate);
      setSelectedTime(null);
      setShowDatePicker(Platform.OS === 'ios');
      if (Platform.OS === 'android') {
        setShowDatePicker(false);
      }
    };
  
    const handleTimeSelect = (time, index) => {
      setSelectedTime(time);
      setSelectedHourIndex(index);
      if (Platform.OS === 'android') {
        setShowDatePicker(false);
      }
    };
  
    const handleDateTimeSelect = () => {
      if (selectedTime) {
        const dateTime = new Date(selectedDate);
        dateTime.setHours(selectedTime.getHours());
        dateTime.setMinutes(selectedTime.getMinutes());
        onDateTimeSelect(dateTime);
      }
    };
  
    return (
      <View style={styles.dateTimePicker}>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePicker}>
          <View style={styles.dateTextContainer}>
            <Icon name="calendar" size={16} style={styles.calendarIcon} />
            <Text style={styles.dateText}>{selectedDate.toLocaleDateString()}</Text>
          </View>
        </TouchableOpacity>
        <Modal visible={showDatePicker} transparent={true} animationType="slide">
          <View style={styles.datePickerModal}>
            <DateTimePicker
              testID="dateTimePicker"
              value={selectedDate}
              mode="date"
              display="spinner"
              onChange={handleDateChange}
              maximumDate={new Date(new Date().setMonth(new Date().getMonth() + 1))}
            />
          </View>
        </Modal>
        <View style={styles.timePicker}>
          {availableTimes.map((time, index) => {
            const isSelected = selectedHourIndex === index;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleTimeSelect(time, index)}
                style={[
                  styles.timeButton,
                  isSelected && styles.selectedTimeButton
                ]}
              >
                <Text style={styles.timeButtonText}>{time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity onPress={handleDateTimeSelect} style={styles.button}>
          <Text style={styles.buttonText}>Randevu İste</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  dateTimePicker: {
    alignItems: "center",
    marginBottom: 20,
  },
  datePicker: {
    marginBottom: 10,
  },
  dateTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ddd",
    width: "100%",
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    textAlign: "center",
  },
  
  dateTextContainer: {
    justifyContent:'center',
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderRadius: 10, 
    paddingHorizontal: 15,
    backgroundColor:'#ddd',
    display:'flex'
  },
  
  calendarIcon: {
    marginRight: 5,
  },
  datePickerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  timePicker: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 10,
  },
  timeButton: {
    backgroundColor: `#${process.env.BASE_COLOR}`,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginVertical: 5,
    marginRight: 10,
    flexBasis: "auto",
  },
  selectedTimeButton: {
    backgroundColor: "rgb(68 191 95)",
  },
  timeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    backgroundColor: `#${process.env.BASE_COLOR}`,
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: "stretch",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomDateTimePicker;