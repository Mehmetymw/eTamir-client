import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const CustomTextInput = ({
  field: { name, onBlur, onChange, value },
  form: { errors, touched },
  placeholder,
  ...props
}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      onChangeText={onChange(name)}
      onBlur={onBlur(name)}
      value={value}
      placeholder={placeholder}
      {...props}
    />
    {touched[name] && errors[name] && (
      <Text style={styles.errorText}>{errors[name]}</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    fontStyle: "italic",
    marginTop: 5,
  },
});

export default CustomTextInput;
