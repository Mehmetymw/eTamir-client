import { View ,StyleSheet} from "react-native";
import Catalog from '../components/Catalog/Catalog' // "Catolog" yerine "Catalog" yazımını düzeltin
import Header from "../components/Header/Header";
import { useNavigation } from '@react-navigation/native'; 
import CatalogOptions from '../components/Catalog/CatalogOptions';

function HomeScreen() {
    const navigation = useNavigation(); 

    return(
        <View style={styles.container}>
            <Header isHome={true} ></Header>
            <Catalog navigation={navigation} />
            <CatalogOptions navigation={navigation}></CatalogOptions>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    },
 
})

export default HomeScreen;
