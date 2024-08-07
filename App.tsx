import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './app/screens/homescreen';
import { ProfileScreen } from './app/screens/profilescreen';
import { ExploreScreen } from './app/screens/explorescreen';
import { SignInScreen } from './app/screens/signinscreeen';
import { FirstPage } from './app/screens/firstpage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* menghilangkan header top */}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='firstPage' component={FirstPage} />
        <Stack.Screen name='Signin' component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
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
