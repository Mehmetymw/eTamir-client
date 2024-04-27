import MechanicListScreen from "../screens/mechanics/MechanicListScreen";
import HomeScreen from "../screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import MechanicDetailScreen from "../screens/mechanics/MechanicDetailScreen";
import RequestAppointmentScreen from "../screens/mechanics/RequestAppointmentScreen";
import AddStoreScreen from "../screens/AddStoreScreen";
import CatalogScreen from "../screens/CategoryScreen";

const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MechanicListScreen"
        component={MechanicListScreen}
        options={{ title: "Mechanic List" }}
      />
      <Stack.Screen
        name="MechanicDetailScreen"
        component={MechanicDetailScreen}
      />
      <Stack.Screen
        name="RequestAppointmentScreen"
        component={RequestAppointmentScreen}
      />

      <Stack.Screen
        name="CatalogScreen"
        component={CatalogScreen}
        options={{ headerShown: false }}
      />
     
         <Stack.Screen
        name="AddStoreScreen"
        component={AddStoreScreen}
      />
    </Stack.Navigator>
  );
}

export default HomeStackScreen;
