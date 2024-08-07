import React from "react";
import { View, Text, Pressable, SafeAreaView, ScrollView, TouchableOpacity, TouchableHighlight } from "react-native";
import { cardTexts } from "../data/homedata";
import { HomeStyle } from "./design/homestyle"; // Adjust path if necessary
import { Link } from "@react-navigation/native";
import { Header } from "../layout/home/homelayout";
import { useNavigation } from "@react-navigation/native";
import { CardHome } from "../layout/cardhome";

export const HomeScreen = () => {
  const navigationExplore = useNavigation();
  const handleLinkToExplore = () => {
    navigationExplore.navigate('Explore');
  }

  return (
    <SafeAreaView style={HomeStyle.safeArea}>
      <ScrollView contentContainerStyle={HomeStyle.scrollView}>
        <View>
          <Header />
        </View>
        <View style={HomeStyle.container}>
          <Text style={HomeStyle.text}>Hello MAMAMANG</Text>
          <View style={HomeStyle.subContainer}>
            <View style={HomeStyle.childContainer}>
              <Text>Tes</Text>
            </View>
            <View style={HomeStyle.childContainer}>
              <Text>Tes</Text>
            </View>
          </View>
            <TouchableOpacity style={{ padding: 10, backgroundColor: "white", borderRadius: 15, marginTop: 10, width: 200 }}
            onPress={handleLinkToExplore}
            >
              <Text style={{ fontSize: 15, color: "black" }}>Explore</Text>
            </TouchableOpacity>
        </View>
        
        <View style={{ padding: 20, flex: 1, width: 380, height: 300, backgroundColor: "#3aa6b9", marginTop: 20 }}>
          <CardHome />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
