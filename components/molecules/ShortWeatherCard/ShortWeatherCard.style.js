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
    backgroundColor: "#82a7eb",
    marginLeft: 20,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
  },
});
