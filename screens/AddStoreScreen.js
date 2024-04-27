import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import Header from '../components/Header/Header';
import CustomTextInput from '../components/CustomTextInput';
import {Formik, Field} from 'formik';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Dropdown} from 'react-native-element-dropdown';
import {ScrollView} from 'react-native-gesture-handler';

const AddStoreScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [categories, setCategories] = useState([
    {value: '1', name: 'Category 1'},
    {value: '2', name: 'Category 2'},
    {value: '3', name: 'Category 3'},
  ]);

  const imgOptions = {
    stogareOptions:{
      path: 'image',
    }
  };

  const handleChoosePhoto = () => {
    launchImageLibrary(imgOptions, response => {
      if (response.assets) {
        setSelectedImage(response.assets[0].uri);
        console.log(response.assets[0].uri);
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Header isHome={false} hideLocation={true} />
      <TouchableOpacity
        onPress={handleChoosePhoto}
        style={styles.photoContainer}>
        {selectedImage ? (
          <Image source={{uri: selectedImage}}  style={styles.image} />
        ) : (
          <MaterialIcons name="insert-photo" size={100} color="#999" />
        )}
      </TouchableOpacity>
      <View style={styles.formContainer}>
        <Formik
          initialValues={{
            name: '',
            description: '',
            location: '',
            phone: '',
          }}
          onSubmit={values => {
            console.log({...values, categoryId: selectedCategoryId});
          }}>
          {({handleSubmit}) => (
            <View>
              <View>
                <Field
                  name="name"
                  component={CustomTextInput}
                  placeholder="Dükkan Adı"
                />
              </View>

              <Field
                name="description"
                component={CustomTextInput}
                placeholder="Açıklama"
              />

              <Field
                name="description"
                component={CustomTextInput}
                placeholder="Adres"
              />

              <Dropdown
                style={styles.dropdownContainer}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={categories}
                maxHeight={300}
                placeholder="Bir Kategori Seçiniz"
                labelField="value"
                valueField="value"
                searchPlaceholder="Search..."
                value={selectedCategoryId}
                onChange={item => {
                  setSelectedCategoryId(item);
                }}
              />
              <View style={styles.checkboxContainer}>
                <Field name="callable" type="checkbox" component={CheckBox} />
                <Text style={styles.checkboxLabel}>
                  Müşteriler tarafından çağırılabilir
                </Text>
              </View>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
                title="Dükkan Aç">
                <Text
                  style={{
                    textAlign: 'center',
                    lineHeight: 50,
                    color: 'white',
                    fontSize: 16,
                  }}>
                  Dükkan Aç
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  nameContainer: {
    gap: 10,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  photoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  image:{
    width:"90%",
    height:200,
    borderRadius:10
  },
  formContainer: {
    padding: 20,
  },
  dropdownContainer: {
    height: 50,
    marginBottom: 20,
  },
  dropdown: {
    backgroundColor: '#fafafa',
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
  dropdownList: {
    backgroundColor: '#fafafa',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,

    left: 0,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
  },

  dropdownContainer: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    padding: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  submitButton: {
    marginTop: 20,
    width: '100%',
    height: 50,
    backgroundColor: '#1659a4',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
});

export default AddStoreScreen;
