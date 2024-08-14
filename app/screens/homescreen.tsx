import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { FirstAds, StoriesIMG, PostOne, PostTwo, ImgScrollHome3, ImgScrollHome, ImgScrollHome2 } from "../data/homedata";
import { styles } from "./design/homestyle";
import { useNavigation } from "@react-navigation/native";
export const HomeScreen = () => {
  const NavigationToSubPage = useNavigation();
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

  const HandleNavigateSearch = () => {
    NavigationToSubPage.navigate('Explore');
  }

  const HandleNavigateMessages = () => {
    NavigationToSubPage.navigate('Messages')
  }

  const HandleNavigateIntoProfile = () => {
    NavigationToSubPage.navigate('Profile')
  }

  const renderPosts = (posts) =>
    posts.map((post, index) => (
      <View key={index} style={styles.postImageContainer}>
        <Image source={post.ImageStoriesOne} style={styles.postImage} />
      </View>
    ));

  const renderAds = (posts) =>
    posts.map((post, index) => (
      <View key={index} style={styles.adContainer}>
        <Image source={post.Ads} style={styles.adImage} />
      </View>
    ));

  const renderPostHeader = (imgSrc, userName, timeAgo) => (
    <View style={styles.postHeader}>
      <Image source={imgSrc} style={styles.userImage} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.timeAgo}>{timeAgo}</Text>
      </View>
      <Icon name="share" size={24} color="white" style={styles.shareIcon} />
    </View>
  );

  const renderActions = () => (
    <View style={styles.actionsContainer}>
      {["like", "comment", "share"].map((action) => {
        const isActive = activeButtonTouchableUser[action];
        const color = isActive ? (action === "like" ? "red" : action === "comment" ? "blue" : "green") : "white";

        return (
          <TouchableOpacity key={action} style={styles.actionButton} onPress={() => handlePressTchUser(action)}>
            <Icon name={action === "like" ? "thumb-up" : action === "comment" ? "comment" : "share"} size={20} color={color} />
            <Text style={[styles.actionText, { color }]}>{action}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerText} onPress={HandleNavigateIntoProfile}>Keezars</Text>
          <View style={styles.iconContainer}>
            <Icon name="chat" size={25} color="white" onPress={HandleNavigateMessages} />
            <Icon name="bell" size={25} color="white" />
            <Icon name="search" size={25} color="white" onPress={HandleNavigateSearch} />
          </View>
        </View>

        <StoriesImgApprove />

        <View style={styles.postsContainer}>
          {renderPostHeader(ImgScrollHome.imgScroll, "Azhar Khaibar", "3 Minutes ago")}
          <View style={styles.postContent}>
            <Text style={styles.postText}>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {renderPosts(PostOne)}
            </ScrollView>
            <View style={styles.postFooter}>
              <View style={styles.likesContainer}>
                <Icon name="thumb-up" size={20} color="white" />
                <Text style={styles.likesText}>2 Likes</Text>
              </View>
              <View style={styles.commentsContainer}>
                <Text style={styles.commentsCount}>140</Text>
                <Text style={styles.commentsText}>Commented</Text>
              </View>
            </View>
            {renderActions()}
          </View>
          {renderPostHeader(ImgScrollHome2.imgScroll, "Adinda Safira", "3 Minutes ago")}
          <View style={styles.postContent}>
            <Text style={styles.postText}>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {renderPosts(PostTwo)}
            </ScrollView>
            <View style={styles.postFooter}>
              <View style={styles.likesContainer}>
                <Icon name="thumb-up" size={20} color="white" />
                <Text style={styles.likesText}>2 Likes</Text>
              </View>
              <View style={styles.commentsContainer}>
                <Text style={styles.commentsCount}>140</Text>
                <Text style={styles.commentsText}>Commented</Text>
              </View>
            </View>
            {renderActions()}
          </View>

          {renderPostHeader(ImgScrollHome2.imgScroll, "Adinda Safira", "3 Minutes ago")}
          <View style={styles.postContent}>
            <Text style={styles.postText}>s simply dummy text of the printing and typesetting industry...</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {renderAds(FirstAds)}
            </ScrollView>
            <View style={styles.postFooter}>
              <View style={styles.likesContainer}>
                <Icon name="thumb-up" size={20} color="white" />
                <Text style={styles.likesText}>2 Likes</Text>
              </View>
              <View style={styles.commentsContainer}>
                <Text style={styles.commentsCount}>140</Text>
                <Text style={styles.commentsText}>Commented</Text>
              </View>
            </View>
            {renderActions()}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const StoriesImgApprove = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.containerStories}>
      {StoriesIMG.map((story, index) => (
        <View key={index} style={styles.storyItem}>
          <Image source={story.IMGStories} style={styles.storiesImg} />
          <Text style={styles.storyText}>{story.nameUserStories}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
