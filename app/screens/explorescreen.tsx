import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableHighlight, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { stackPhoto } from "../data/homedata";

// Komponen Filter Button
const BtnFilter = ({ text }) => {
  return (
    <TouchableHighlight
      style={styles.filterButton}
      onPress={() => {
        console.log(`${text} button pressed`);
      }}
      underlayColor="#444"
    >
      <Text style={styles.filterButtonText}>{text}</Text>
    </TouchableHighlight>
  );
};

// Komponen StackPhotoExplore (Grid View)
const StackPhotoExplore = () => {
  return (
    <View style={styles.photoGrid}>
      {stackPhoto.map((stack, index) => (
        <View key={index} style={styles.photoItem}>
          <Image source={stack.stackPhoto} style={styles.photo} />
        </View>
      ))}
    </View>
  );
};

export const ExploreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerWrapper}>
        <View style={styles.searchContainer}>
          <Icon name="magnify" size={25} color="#fff" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search..." placeholderTextColor="#bbb" selectionColor="#fff" />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterContainer}>
            <BtnFilter text="All" />
            <BtnFilter text="Popular" />
            <BtnFilter text="Entertainment" />
            <BtnFilter text="Technology" />
            <BtnFilter text="Sports" />
            <BtnFilter text="Staycation" />
            <BtnFilter text="Girlfriend" />
          </View>
        </ScrollView>
        <StackPhotoExplore />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  containerWrapper: {
    paddingHorizontal: 15,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 8,
    marginVertical: 15,
    padding: 10,
    marginTop: 20,
    marginBottom: 5
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  filterButton: {
    backgroundColor: "#444",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  filterButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  photoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 7
  },
  photoItem: {
    width: "32%", 
    aspectRatio: 1,
    marginBottom: 5,
  },
  photo: {
    width: "100%",
    height: "100%",
  },
});
