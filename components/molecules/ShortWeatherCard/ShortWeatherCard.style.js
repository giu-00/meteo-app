import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flexDirection: "column",
    width: 130,
    height: 220,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    backgroundColor: "rgba(189, 187, 187, 0.2)",
  },
});
