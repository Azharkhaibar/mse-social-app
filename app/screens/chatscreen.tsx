import { View, Text, SafeAreaView, ScrollView, TextInput, Image, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";
import { ChatStyle } from "./design/chatstyle";
import { recentChats } from "../data/chatdata";

const stories = [
  {
    id: "1",
    name: "Your Story",
    avatar: require("../images/Stackpoto/cewe2.jpg"),
  },
  {
    id: "2",
    name: "Jane",
    avatar: require("../images/Stackpoto/cewe2.jpg"),
  },
  // Tambahkan cerita lainnya jika diperlukan
];

const pinnedChats = [
  {
    id: "1",
    name: "Jane Doe",
    time: "2:30 PM",
    message: "aku sayang kamu",
    avatar: require("../images/Stackpoto/cewe2.jpg"),
  },
  {
    id: "2",
    name: "John Smith",
    time: "2:45 PM",
    message: "aku sayang kamu",
    avatar: require("../images/Stackpoto/cewe2.jpg"),
  },
];

export const ChatScreen = () => {
  const [searchNameSetQuery, setsearchNameSetQuery] = useState("");
  const [filteredRecentChatsNameItem, setFilteredRecentChatsNameItem] = useState(recentChats);
  const [filteredPinnedChatsNameItem, setFilteredPinnedChatsNameItem] = useState(pinnedChats);
  const handleSearchItemName = (query) => {
    setsearchNameSetQuery(query);
    if (query === "") {
      setFilteredRecentChatsNameItem(recentChats);
      setFilteredPinnedChatsNameItem(pinnedChats);
    } else {
      const FilteredRecentChatsNameItem = recentChats.filter((chat) => chat.name.toLowerCase().includes(query.toLowerCase()));
      const FilteredPinnedChatsNameItem = pinnedChats.filter((chat) => chat.name.toLowerCase().includes(query.toLowerCase()));
      setFilteredRecentChatsNameItem(FilteredRecentChatsNameItem);
      setFilteredPinnedChatsNameItem(FilteredPinnedChatsNameItem);
    }
  };

  const renderStoryItem = ({ item }) => (
    <TouchableOpacity style={ChatStyle.storyItem}>
      <Image source={item.avatar} style={ChatStyle.storyAvatar} />
      <Text style={ChatStyle.storyName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderPinnedChatItem = ({ item }) => (
    <TouchableOpacity style={ChatStyle.pinnedChatItem}>
      <Image source={item.avatar} style={ChatStyle.pinnedAvatar} />
      <View style={ChatStyle.pinnedChatInfo}>
        <Text style={ChatStyle.pinnedChatName}>{item.name}</Text>
        <Text style={ChatStyle.pinnedMessage}>{item.message}</Text>
      </View>
      <Text style={ChatStyle.chatTime}>{item.time}</Text>
    </TouchableOpacity>
  );

  const renderRecentChatItem = ({ item }) => (
    <TouchableOpacity style={ChatStyle.chatItem}>
      <Image source={item.avatar} style={ChatStyle.chatAvatar} />
      <View style={ChatStyle.chatInfo}>
        <Text style={ChatStyle.chatName}>{item.name}</Text>
        <Text style={ChatStyle.chatMessage}>{item.message}</Text>
      </View>
      <Text style={ChatStyle.chatTime}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={ChatStyle.container}>
      <ScrollView>
        <View style={ChatStyle.searchContainer}>
          <Icon name="magnify" size={25} color="#bbb" style={ChatStyle.searchIcon} />
          <TextInput style={ChatStyle.searchInput} placeholder="Search..." placeholderTextColor="#bbb" selectionColor="#fff" value={searchNameSetQuery} onChangeText={handleSearchItemName} />
        </View>

        <FlatList data={stories} horizontal renderItem={renderStoryItem} keyExtractor={(item) => item.id} contentContainerStyle={ChatStyle.storiesContainer} showsHorizontalScrollIndicator={false} />
        {filteredPinnedChatsNameItem.length > 0 && (
          <View style={ChatStyle.section}>
            <Text style={ChatStyle.sectionTitle}>Pinned Chats</Text>
            <FlatList data={filteredPinnedChatsNameItem} horizontal renderItem={renderPinnedChatItem} keyExtractor={(item) => item.id} contentContainerStyle={ChatStyle.pinnedChatsContainer} showsHorizontalScrollIndicator={false} />
          </View>
        )}

        <View style={ChatStyle.section}>
          <Text style={ChatStyle.sectionTitle}>Recent Chats</Text>
          <FlatList data={filteredRecentChatsNameItem} renderItem={renderRecentChatItem} keyExtractor={(item) => item.id} contentContainerStyle={ChatStyle.chatsContainer} showsVerticalScrollIndicator={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
