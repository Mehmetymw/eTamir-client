import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomTextInput from '../../components/CustomTextInput';
import Logo from '../Logo';
import {getTokenWithCredentials} from '../../Services/AuthService.js';
// import {GoogleSignin} from '@react-native-google-signin/google-signin'; // Google Sign-In kütüphanesi

const LoginForm = ({onSubmit, switchText, switchHandler}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [eyeIcon, setEyeIcon] = useState('eye-slash');
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Geçerli bir e-posta adresi giriniz.')
      .required('E-posta alanı zorunludur.')
      .max(50),
    password: yup.string().required('Şifre alanı zorunludur.').max(20),
  });

  useEffect(() => {
    setIsButtonDisabled(true);
  }, []);

  const handleLogin = async values => {
    const {email, password} = values;
    try {
      setIsLoading(true);
      const token = await getTokenWithCredentials(email, password);
      console.log("token"+token);
      onSubmit(token);
    } catch (error) {
      console.error('Giriş yapılırken bir hata oluştu:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async provider => {
    switch (provider) {
      case 'google':
        try {
          // await GoogleSignin.hasPlayServices();
          // GoogleSignin.configure({
          //   webClientId:
          //     '1003000345785-82k74gllkcsbg5f0g76a4s1e23jie5s8.apps.googleusercontent.com',
          // });
          // const userInfo = await GoogleSignin.signIn();
          // console.log(userInfo);
        } catch (error) {
          console.error('Google Sign-In Hatası:', error);
        }
        break;
      default:
        break;
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
    setEyeIcon(isPasswordVisible ? 'eye-slash' : 'eye');
  };

  return (
    <ImageBackground
      source={require('../../icons/background.jpg')}
      style={styles.background}>
      <StatusBar backgroundColor="transparent" translucent />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Logo width={200} style={styles.logo} />
          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={handleLogin}
            validationSchema={validationSchema}>
            {({handleSubmit, isValid}) => {
              useEffect(() => {
                setIsButtonDisabled(!isValid);
              }, [isValid]);

              return (
                <>
                  <Text style={styles.title}>Hoş Geldiniz</Text>
                  <Field
                    component={CustomTextInput}
                    name="email"
                    placeholder="E-posta"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                  <View style={styles.passwordContainer}>
                    <Field
                      component={CustomTextInput}
                      name="password"
                      placeholder="Şifre"
                      secureTextEntry={!isPasswordVisible}
                    />
                    <TouchableOpacity
                      style={styles.eyeIcon}
                      onPress={togglePasswordVisibility}>
                      <Icon name={eyeIcon} size={20} color="gray" />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      isButtonDisabled ? styles.disabledButton : null,
                      !isButtonDisabled ? null : styles.dimmedButton,
                    ]}
                    onPress={isValid ? handleSubmit : null}
                    disabled={isButtonDisabled}>
                    {isLoading ? (
                      <ActivityIndicator size="small" color="white" />
                    ) : (
                      <Text style={styles.loginText}>Giriş Yap</Text>
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.forgotPasswordContainer}>
                    <Text style={styles.forgotPasswordText}>
                      Şifreni mi unuttun?
                    </Text>
                  </TouchableOpacity>

                  <View
                    style={{
                      width: '100%',
                      marginTop: 20,
                      marginBottom: -10,
                      borderBottomColor: '#ddd',
                      borderBottomWidth: 1,
                      borderRadius: 100,
                    }}
                  />

                  <View style={styles.socialButtonContainer}>
                    <TouchableOpacity
                      onPress={() => handleSocialLogin('google')}
                      style={[styles.socialButton, styles.googleButton]}>
                      <Icon name="google" size={20} color="white" />
                      <Text style={styles.socialButtonText}>
                        Google ile giriş yap
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[styles.socialButton, styles.facebookButton]}>
                      <Icon name="facebook" size={20} color="white" />
                      <Text style={styles.socialButtonText}>
                        Facebook ile giriş yap
                      </Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                 
    style={[styles.socialButton, styles.twitterButton]}
  >
    <Icon name="twitter" color="white" />
  </TouchableOpacity> */}
                  </View>
                </>
              );
            }}
          </Formik>
          <TouchableOpacity
            style={styles.switchContainer}
            onPress={switchHandler}>
            <Text style={styles.switchText}>{switchText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
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
    color: '#1659a4',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1659a4',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  disabledButton: {
    backgroundColor: '#b3b3b3',
  },
  dimmedButton: {
    opacity: 0.6,
  },
  socialButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    gap: 5,
  },
  socialButton: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 5,
    flex: 1,
  },
  googleButton: {
    backgroundColor: '#DB4437',
  },
  facebookButton: {
    backgroundColor: '#3B5998',
  },
  twitterButton: {
    backgroundColor: '#00ACEE',
  },
  switchContainer: {
    marginTop: 20,
  },
  switchText: {
    color: '#1659a4',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  forgotPasswordContainer: {
    marginTop: 20,
  },
  forgotPasswordText: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
  },
  passwordContainer: {
    width: '100%',
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  socialButtonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default LoginForm;
