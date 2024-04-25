import { View ,StyleSheet} from "react-native";
import Catalog from '../components/Catalog/Catalog' // "Catolog" yerine "Catalog" yazımını düzeltin
import Header from "../components/Header/Header";
import { useNavigation } from '@react-navigation/native'; 

function HomeScreen() {
    const navigation = useNavigation(); 

    return(
        <View style={styles.container}>
            <Header isHome={true}></Header>
            <Catalog navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // backgroundColor:'white'
    }
})

export default HomeScreen;
