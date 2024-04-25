import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import SignupForm from '../../components/Auth/SignupForm';

const SignupScreen = ({ navigation }) => {
  const handleSignup = (formData) => {
    // Burada kayıt işlemleri yapılabilir
    console.log('Signup Data:', formData);
  };

  return (
    <View style={styles.container}>
      <SignupForm
        onSubmit={handleSignup}
        switchText="Bir hesabınız var mı? Giriş Yapın"
        switchHandler={() => navigation.navigate('Login')}
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

export default SignupScreen;
