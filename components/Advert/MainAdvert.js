import React from 'react';
import { View, StyleSheet, Image ,Text} from 'react-native';

const MainAdvert = () => {
  return (
    <View style={styles.adContainer}>
      <Image
        source={{uri: '../../icons/f_photo.jpeg'}} // Resmin URI'sini buraya ekleyin
        style={styles.image}
        resizeMode="cover" // Resmi boyutlandırma modu
      />
      <Text style={styles.adTitle}>REKLAM ALANI</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  adContainer: {
    width: '100%', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#ffffff', // Beyaz bir arka plan rengi
    borderRadius: 10,
    shadowColor: '#000000', // Gölge rengi
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3, // Gölge yoğunluğu
    shadowRadius: 4, // Gölge yarıçapı
    elevation: 5, // Android için gölge efekti
  },
  adTitle:{
    fontWeight:700,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  image: {
    width: '100%',
    height: 200, // Resim yüksekliği
    borderRadius: 10,
  },
});

export default MainAdvert;
