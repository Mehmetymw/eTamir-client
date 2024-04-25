import UstaCagirScreen from "../components/Catalog/UstaCagirScreen";
import CekiciScreen from "../components/Catalog/CekiciScreen";
import UstayaGitScreen from "../components/Catalog/UstayaGitScreen";
import ExpertizScreen from "../components/Catalog/ExpertizScreen";
import MechanicListScreen from "../screens/mechanics/MechanicListScreen";
import HomeScreen from "../screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import MechanicDetailScreen from "../screens/mechanics/MechanicDetailScreen";
import RequestAppointmentScreen from "../screens/mechanics/RequestAppointmentScreen";

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
        name="UstaCagirScreen"
        component={UstaCagirScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CekiciScreen"
        component={CekiciScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExpertizScreen"
        component={ExpertizScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UstayaGitScreen"
        component={UstayaGitScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default HomeStackScreen;
