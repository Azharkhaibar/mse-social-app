import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import { featuredPerson, ProfileIMG, PostDataProfile, SavedDataProfile } from "../data/profiledata";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { statsData } from "../data/profiledata";
import { useNavigation } from "@react-navigation/native";

export const ProfileScreen = () => {
  const [ openTabActive, setOpenTabActive ] = useState('post');
  const NavigateToSubPage = useNavigation()
  const HandlerNavigate = () => {
    NavigateToSubPage.navigate('Findperson')
  }
  const RenderContent = () => {
      if (openTabActive === "Post") {
        return PostDataProfile.map((post, index) => (
          <View
            key={index}
            style={{
              width: "32%",
              marginBottom: 15,
              borderRadius: 10,
              overflow: "hidden",
              backgroundColor: "#2c2c2c",
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
            }}
          >
            {post.imgData && (
              <Image
                source={post.imgData}
                style={{
                  width: "100%",
                  height: 150,
                  resizeMode: "cover",
                }}
              />
            )}
          </View>
        ));
      } else if (openTabActive === "Saved") {
        return SavedDataProfile.map((saved, index) => (
          <View
            key={index}
            style={{
              width: "32%",
              marginBottom: 15,
              borderRadius: 10,
              overflow: "hidden",
              backgroundColor: "#2c2c2c",
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
            }}
          >
            {saved.imgSaved && (
              <Image
                source={saved.imgSaved}
                style={{
                  width: "100%",
                  height: 150,
                  resizeMode: "cover",
                }}
              />
            )}
          </View>
        ));
      }
  };
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

          <View style={{ marginTop: 12, backgroundColor: "#0E0220", width: "100%" }}>
            <View style={{ flexDirection: "row", gap: 230, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: "white", marginTop: 15 }}>Featured</Text>
              <TouchableOpacity onPress={HandlerNavigate}>
                <Text style={{ color: "white" }}>View All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
              {featuredPerson.map((person, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    marginHorizontal: 10,
                    marginTop: 20,
                  }}
                >
                  <Image
                    source={person.img}
                    style={{
                      borderRadius: 50,
                      width: 65,
                      height: 65,
                      marginBottom: 8,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "600",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    {person.namePerson}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={{ width: "100%", padding: 10, marginTop: 20 }}>
            {/* Tab Navigation */}
            <View style={{ flexDirection: "row", justifyContent: "center", gap: 80 }}>
              <TouchableOpacity onPress={() => setOpenTabActive("Post")}>
                <Text
                  style={{
                    color: openTabActive === "Post" ? "white" : "gray",
                    fontSize: 18,
                    fontWeight: "bold",
                    marginBottom: 10,
                    borderBottomWidth: openTabActive === "Post" ? 2 : 0,
                    borderBottomColor: "white",
                  }}
                >
                  Post
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setOpenTabActive("Saved")}>
                <Text
                  style={{
                    color: openTabActive === "Saved" ? "white" : "gray",
                    fontSize: 18,
                    fontWeight: "bold",
                    marginBottom: 10,
                    borderBottomWidth: openTabActive === "Saved" ? 2 : 0,
                    borderBottomColor: "white",
                  }}
                >
                  Saved
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 20 }}>{RenderContent()}</View>
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
