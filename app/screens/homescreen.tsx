import React from "react";
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StoriesIMG, ImgScrollHome } from "../data/homedata";
export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Keezars</Text>
          <View style={styles.iconContainer}>
            <Icon name="chat" size={28} color="#000" />
            <Icon name="bell" size={28} color="#000" />
            <Icon name="plus-circle" size={28} color="#000" />
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.containerStories}>
          {StoriesIMG.map((story, index) => (
            <View key={index} style={styles.storyItem}>
              <Image source={story.IMGStories} style={styles.storiesImg} />
              <Text style={styles.storyText}>{story.nameUserStories}</Text>
            </View>
          ))}
        </ScrollView>

        <View>
          <View>
            <Image source={ImgScrollHome.imgScroll} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    height: 50,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 120,
  },
  containerStories: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'red',
  },
  storyItem: {
    alignItems: "center",
    marginRight: 25,
  },
  storiesImg: {
    width: 70,
    height: 70, 
    borderRadius: 50, 
  },
  storyText: {
    marginTop: 10,
    fontSize: 12,
    textAlign: "center",
  },
});
