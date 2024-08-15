import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './app/screens/homescreen';
import { ProfileScreen } from './app/screens/profilescreen';
import { ExploreScreen } from './app/screens/explorescreen';
import { SignInScreen } from './app/screens/signinscreeen';
import { FirstPage } from './app/screens/firstpage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ChatScreen } from './app/screens/chatscreen';
import { ShopScreen } from './app/screens/shopscreen';
import { FindPerson } from './app/screens/findperson';
import { TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* STATUS BAR ATAS */}
      <StatusBar style="light" backgroundColor="black" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="firstPage" component={FirstPage} />
        <Stack.Screen name="Signin" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            headerShown: true,
            title: "Explore",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Messages"
          component={ChatScreen}
          options={{
            headerShown: true,
            title: "Chat",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
            headerTitleAlign: "left",
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log("Photo icon pressed")}>
                <Icon name="camera-outline" size={25} color="white" style={{ marginRight: 15 }} />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: true,
            title: "Profile",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
        />

        <Stack.Screen name="Shop" component={ShopScreen} />
        <Stack.Screen
          name="Findperson"
          component={FindPerson}
          options={{
            headerShown: true,
            title: "Find person",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
