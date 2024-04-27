// LoginScreen.js

import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import LoginForm from '../../components/Auth/LoginForm';

const LoginScreen = ({ navigation }) => {
  const handleLogin = (token) => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <LoginForm
        onSubmit={handleLogin}
        switchText="Bir hesabınız yok mu? Kayıt Olun"
        switchHandler={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
