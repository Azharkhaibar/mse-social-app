import React from "react";
import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

const popularSuggestions = [
  { id: 1, name: "John Doe", img: require("../images/user/cewe baru2.jpg") },
  { id: 2, name: "John Doe", img: require("../images/user/cewe baru2.jpg") },
  { id: 3, name: "John Doe", img: require("../images/user/cewe baru2.jpg") },
  { id: 4, name: "John Doe", img: require("../images/user/cewe baru2.jpg") },
  { id: 5, name: "John Doe", img: require("../images/user/cewe baru2.jpg") },
  { id: 6, name: "John Doe", img: require("../images/user/cewe baru2.jpg") },
  { id: 7, name: "John Doe", img: require("../images/user/cewe baru2.jpg") },
  { id: 8, name: "John Doe", img: require("../images/user/cewe baru2.jpg") },
  { id: 9, name: "John Doe", img: require("../images/user/cewe baru2.jpg") },

  // Add more suggestions as needed
];

export const FindPerson = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 20 }}>
        <Text style={styles.header}>Popular Suggestions</Text>
        <View style={styles.grid}>
          {popularSuggestions.map((person) => (
            <View key={person.id} style={styles.card}>
              <Image source={person.img} style={styles.image} />
              <Text style={styles.name}>{person.name}</Text>
              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.followText}>Follow</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "47%",
    backgroundColor: "#2c2c2c",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  followButton: {
    backgroundColor: "#1e90ff",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginTop: 15
  },
  followText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

