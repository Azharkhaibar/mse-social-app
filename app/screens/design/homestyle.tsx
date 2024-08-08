import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
  },
  scrollView: {
    flex: 1,
  },
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
  postImage: {
    width: 300,
    height: 300,
    objectFit: 'cover'
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
  postsContainer: {
    paddingHorizontal: 20,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  timeAgo: {
    opacity: 0.5,
    color: "white",
  },
  shareIcon: {
    marginLeft: "auto",
  },
  postContent: {
    marginBottom: 20,
  },
  postText: {
    color: "white",
    marginBottom: 10,
  },
  postFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  likesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  likesText: {
    marginLeft: 10,
    color: "white",
  },
  commentsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentsCount: {
    color: "white",
    marginRight: 5,
  },
  commentsText: {
    color: "white",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    marginLeft: 5,
    fontSize: 14,
  },
  adSection: {
    marginTop: 20,
  },
  adContainer: {
    marginTop: 15,
  },
  adImage: {
    width: 400,
    height: 500,
    resizeMode: "cover",
  },
});
