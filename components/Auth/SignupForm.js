import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import CustomTextInput from '../../components/CustomTextInput';
import Logo from '../Logo';
import { getTokenBasic } from '../../Services/AuthService';
import { useNavigation } from '@react-navigation/native';
import { postBasic } from '../../Services/RequestService';
import DropdownComponent from '../DropdownComponent';

const SignupForm = ({ onSubmit, switchText, switchHandler }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('TR'); // Default olarak Türkiye seçili

  const validationSchema = yup.object().shape({
    name: yup.string().required('Adınızı giriniz'),
    surname: yup.string().required('Soyadınızı giriniz'),
    email: yup
      .string()
      .email('Geçerli bir e-posta adresi giriniz')
      .required('E-posta adresi gereklidir'),
    phoneNumber: yup.string().required('Telefon numaranızı giriniz'),
    password: yup
      .string()
      .min(6, 'Şifre en az 6 karakter olmalıdır')
      .required('Şifre gereklidir'),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Şifreler eşleşmiyor')
      .required('Şifreyi tekrar giriniz'),
  });

  const handleSignup = async values => {
    try {
      setLoading(true);
      const token = await getTokenBasic();
      values.countryCode = selectedCountry; // Seçilen ülkenin kodunu kaydediyoruz
      const data = JSON.stringify(values);
      const response = await postBasic('/signup', data, token);
      await onSubmit();
      if (response.status === 200) {
        navigation.navigate('Login');
        Alert.alert('Başarılı', 'Başarıyla kayıt oldunuz.');
      }
    } catch (error) {
      Alert.alert('Hata', 'Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require('../../icons/background.jpg')}
      style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formContainer}>
          <Logo width={200} style={styles.logo} />
          <Formik
            initialValues={{
              name: '',
              surname: '',
              email: '',
              phoneNumber: '',
              countryCode: 'TR',
              password: '',
              passwordConfirmation: '',
            }}
            onSubmit={values => handleSignup(values)}
            validationSchema={validationSchema}>
            {({ handleSubmit }) => (
              <>
                <Text style={styles.title}>Kayıt Ol</Text>
                <View style={styles.nameContainer}>
                  <View style={{ flex: 1 }}>
                    <Field
                      component={CustomTextInput}
                      name="name"
                      placeholder="Ad"
                      inputStyle={styles.input}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Field
                      component={CustomTextInput}
                      name="surname"
                      placeholder="Soyad"
                      inputStyle={styles.input}
                    />
                  </View>
                </View>
                <Field
                  component={CustomTextInput}
                  name="email"
                  placeholder="E-posta"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={styles.input}
                />
                <View style={styles.phoneContainer}>
                  <View style={{ flex: 2 }}>
                    <Field
                      component={DropdownComponent}
                      name="countryCode"
                      keyboardType="phone-pad"
                      style={styles.input}
                    />
                  </View>
                  <View style={{ flex: 4 }}>
                    <Field
                      component={CustomTextInput}
                      name="phoneNumber"
                      placeholder="Telefon Numarası"
                      keyboardType="phone-pad"
                      style={styles.input}
                    />
                  </View>
                </View>

                <Field
                  component={CustomTextInput}
                  name="password"
                  placeholder="Şifre"
                  secureTextEntry
                  style={styles.input}
                />
                <Field
                  component={CustomTextInput}
                  name="passwordConfirmation"
                  placeholder="Şifreyi Onayla"
                  secureTextEntry
                  style={styles.input}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleSubmit}
                  disabled={loading}>
                  {loading ? (
                    <ActivityIndicator size="small" color="white" />
                  ) : (
                    <Text style={styles.buttonText}>Kayıt Ol</Text>
                  )}
                </TouchableOpacity>
                <TouchableOpacity onPress={switchHandler}>
                  <Text style={styles.switchText}>{switchText}</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  formContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1659a4',
  },
  nameContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  phoneContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    width: '100%', // İki input alanı yan yana olacak şekilde genişlik ayarı
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#1659a4',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  switchText: {
    color: '#1659a4',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});

export default SignupForm;
