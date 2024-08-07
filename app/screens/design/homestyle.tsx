import { StyleSheet } from "react-native";

export const HomeStyle = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 35,
  },
  container: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#3aa6b9",
    padding: 20,
    marginTop: 18,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  childContainer: {
    flex: 1,
    height: 100,
    backgroundColor: "white",
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  pressable: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  pressableText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
