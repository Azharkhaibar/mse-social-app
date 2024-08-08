import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StoriesIMG, ImgScrollHome, PostOne, PostTwo, ImgScrollHome2 } from "../data/homedata";

export const HomeScreen = () => {
  const [activeButtonTouchableUser, setActiveButtonTouchableUser] = useState({
    like: false,
    comment: false,
    share: false,
  });

  const handlePressTchUser = (buttonName) => {
    setActiveButtonTouchableUser((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  const renderPosts = (posts) =>
    posts.map((post, index) => (
      <View key={index} style={{ marginTop: 15 }}>
        <Image source={post.ImageStoriesOne} style={{ objectFit: "cover", height: 200, width: 300 }} />
      </View>
    ));

  const renderPostHeader = (imgSrc, userName, timeAgo) => (
    <View style={{ padding: 20, display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Image source={imgSrc} style={{ width: 50, height: 50, borderRadius: 50 }} />
      <View style={{ marginLeft: 10, marginTop: 5, gap: 5 }}>
        <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>{userName}</Text>
        <Text style={{ opacity: 0.5, color: "white" }}>{timeAgo}</Text>
      </View>
      <Icon name="share" size={24} color="white" style={{ marginLeft: 150, opacity: 0.5 }} />
    </View>
  );

  const renderActions = () => (
    <View style={styles.actionsContainer}>
      {["like", "comment", "share"].map((action) => {
        const isActive = activeButtonTouchableUser[action];
        const color = isActive ? (action === "like" ? "red" : action === "comment" ? "blue" : "green") : "white";

        return (
          <TouchableHighlight key={action} style={styles.actionButton} onPress={() => handlePressTchUser(action)} underlayColor="transparent">
            <>
              <Icon name={action === "like" ? "thumb-up" : action === "comment" ? "comment" : "share"} size={15} color={color} />
              <Text style={{ color, marginLeft: 5 }}>{action}</Text>
            </>
          </TouchableHighlight>
        );
      })}
    </View>
  );


  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: "#1C1C1C" }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Keezars</Text>
          <View style={styles.iconContainer}>
            <Icon name="chat" size={25} color="white" />
            <Icon name="bell" size={25} color="white" />
            <Icon name="plus-circle" size={25} color="white" />
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

        <ScrollView showsVerticalScrollIndicator={true}>
          <View style={{ height: "auto" }}>
            {renderPostHeader(ImgScrollHome.imgScroll, "Azhar Khaibar", "3 Minutes ago")}
            <View style={{ height: "auto", paddingHorizontal: 20 }}>
              <Text style={{ color: "white" }}>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {renderPosts(PostOne)}
              </ScrollView>
              <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icon name="thumb-up" size={20} color="white" />
                  <Text style={{ marginLeft: 10, color: "white" }}>2 Likes</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={{ color: "white", marginRight: 10 }}>140</Text>
                  <Text style={{ color: "white" }}>Commented</Text>
                </View>
              </View>
              {renderActions()}
            </View>

            {renderPostHeader(ImgScrollHome2.imgScroll, "Adinda Safira  ", "3 Minutes ago")}
            <View style={{ height: "auto", paddingHorizontal: 20 }}>
              <Text style={{ color: "white" }}>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {renderPosts(PostTwo)}
              </ScrollView>
              <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icon name="thumb-up" size={20} color="white" />
                  <Text style={{ marginLeft: 10, color: "white" }}>2 Likes</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={{ color: "white", marginRight: 10 }}>140</Text>
                  <Text style={{ color: "white" }}>Commented</Text>
                </View>
              </View>
              {renderActions()}
            </View>
          </View>
        </ScrollView>
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
    color: "white",
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
  },
  storyItem: {
    alignItems: "center",
    marginRight: 15,
    padding: 10,
  },
  storiesImg: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  storyText: {
    marginTop: 10,
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },
  actionsContainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginTop: 10,
    gap: 10,
  },
  actionButton: {
    height: 40,
    width: 110,
    backgroundColor: "transparent",
    borderColor: "#F6F5F2",
    borderWidth: 2,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  actionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    marginLeft: 5,
    fontSize: 14,
    textAlignVertical: "center",
  },
});
