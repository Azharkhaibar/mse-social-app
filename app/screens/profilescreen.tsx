import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import { ProfileIMG } from "../data/profiledata";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { statsData } from "../data/profiledata";

export const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.profileContainer}>
          <Image source={ProfileIMG[0].imgBanner} style={styles.bannerImage} />
          <View style={styles.profileDetailsContainer}>
            <Image source={ProfileIMG[1].imgProfile} style={styles.profileImage} />
            <View style={styles.textContainer}>
              <Text style={styles.profileName}>Azharsykrii</Text>
              <Text style={styles.profileLive}>DKI Jkarta</Text>
              <Text style={{ color: "white", textAlign: "center", marginTop: 10 }}>Tidak ingin pernah berhenti sampai garis finish di tempuh, stay Foolish & stay hungry</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
                gap: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#333",
                  padding: 10,
                  borderRadius: 20,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  elevation: 5,
                }}
              >
                <Icon name="chat" size={30} color="white" />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "#3aa6b9",
                  paddingVertical: 14,
                  paddingHorizontal: 60,
                  borderRadius: 20,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  elevation: 5,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 18,
                    textAlign: "center",
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                  }}
                >
                  Follow
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "#333",
                  padding: 10,
                  borderRadius: 20,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  elevation: 5,
                }}
              >
                <Icon name="share" size={30} color="white" />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20 }}>
              {statsData.map((item, index) => (
                <View
                  key={index}
                  style={{
                    backgroundColor: "#333",
                    paddingVertical: 15,
                    flexDirection: "column",
                    alignItems: "center",
                    marginHorizontal: 9,
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 5,
                    elevation: 6,
                    width: 100,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", marginBottom: 5 }}>{item.count}</Text>
                  <Text style={{ color: "lightgray", fontSize: 9, textTransform: "uppercase", letterSpacing: 1 }}>{item.label}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={{ marginTop: 20, backgroundColor: "#0E0220", width: '100%' }}>
            <View style={{ flexDirection: "row", gap: 230, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: "white" }}>Featured</Text>
              <Text style={{ color: "white" }}>View All</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollViewContent: {
    alignItems: "center",
    paddingBottom: 20,
  },
  profileContainer: {
    width: "100%",
    alignItems: "center",
  },
  bannerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  profileDetailsContainer: {
    width: "100%",
    backgroundColor: "#0E0220",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
    paddingTop: 60,
    marginTop: -35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6.27,
    elevation: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "white",
    position: "absolute",
    top: -50,
    zIndex: 10,
  },
  textContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  profileName: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  profileLive: {
    color: "white",
    fontSize: 14,
    marginTop: 5,
    opacity: 0.6,
  },
});

export default ProfileScreen;
