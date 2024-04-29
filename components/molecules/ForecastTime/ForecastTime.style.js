import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  now: {
    fontWeight: "800",
    color: "white",
    fontSize: 18,
    position: "relative",
    top: 42,
    marginLeft: 25,
  },
  later: {
    position: "relative",
    top: 40,
    fontSize: 10,
    marginLeft: 19,
  },
});
