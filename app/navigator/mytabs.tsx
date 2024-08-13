import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { HomeScreen } from "../screens/homescreen";
import { ExploreScreen } from "../screens/explorescreen";
import { ShopScreen } from "../screens/shopscreen";
import { ProfileScreen } from "../screens/profilescreen";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Explore") {
            iconName = focused ? "compass" : "compass-outline";
          } else if (route.name === "Shop") {
            iconName = focused ? "shopping" : "shopping-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "account" : "account-outline";
          }

          return <Icon name={iconName} size={30} color={color} />; // Ukuran ikon diubah menjadi 30
        },
        tabBarActiveTintColor: "tomato", // Warna aktif menjadi tomato
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "black",
          paddingBottom: 5, // Tambahkan padding bawah untuk spasi lebih baik
          paddingTop: 5, // Tambahkan padding atas untuk spasi lebih baik
          height: 60, // Tinggi tab untuk ruang yang lebih luas
        },
        tabBarLabelStyle: {
          fontSize: 12, // Ukuran teks label tab
          fontWeight: "bold", // Membuat teks label menjadi tebal
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
