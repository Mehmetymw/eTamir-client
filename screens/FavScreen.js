import {StyleSheet, View } from 'react-native';
import Mechanic from '../components/Mechanic/Mechanic.js';

function FavScreen () {
    var mechanics = [];

    return (
        <View style={styles.container}>
{/* {mechanics.map((mechanic) => (
            <Mechanic style={styles.mechanic} key={mechanic.id} mechanic={mechanic} />
        ))} */}
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        gap:2,
    },
    mechanic:{
        borderBottomColor:'#ddd',
        borderWidth:1
    }
})

export default FavScreen;