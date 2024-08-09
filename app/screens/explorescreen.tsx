import React from "react";
import { View, SafeAreaView, ScrollView, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const ExploreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerWrapper}>
        <View style={styles.searchContainer}>
          <Icon name="magnify" size={25} color="#fff" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search..." placeholderTextColor="#bbb" selectionColor="#fff" />
        </View>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
  },
  containerWrapper: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#444",
    borderRadius: 28,
    paddingVertical: 12,
    paddingHorizontal: 15,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    padding: 0,
  },
});
