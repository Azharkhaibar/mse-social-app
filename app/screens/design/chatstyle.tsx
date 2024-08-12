import { StyleSheet } from "react-native";
export const ChatStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 30,
    marginVertical: 15,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
  },
  storiesContainer: {
    paddingVertical: 10,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  storyItem: {
    alignItems: "center",
    marginRight: 15,
  },
  storyAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#ff8501",
  },
  storyName: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
  },
  pinnedChatsContainer: {
    paddingLeft: 10,
    width: 385, 
    flexDirection: 'column'
  },
  pinnedChatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    width: 500,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  pinnedChatInfo: {
    flex: 1,
  },
  pinnedAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  pinnedChatName: {
    color: "#fff",
    fontSize: 14,
  },
  pinnedMessage: {
    color: "#bbb",
    fontSize: 14,
    marginTop: 2,
  },
  chatsContainer: {
    paddingHorizontal: 10,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  chatAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatInfo: {
    flex: 1,
  },
  chatName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  chatMessage: {
    color: "#bbb",
    fontSize: 14,
    marginTop: 2,
  },
  chatTime: {
    color: "#bbb",
    fontSize: 12,
  },
});
