import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    width: "90%",
    height: 135,
    borderRadius: 20,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  alignment: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    maxHeight: 30,
  },
  degree: {
    justifyContent: "center",
  },
  icon: {
    width: 80,
    height: 80,
  },
});
