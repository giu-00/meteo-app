import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export default StyleSheet.create({
  plusButton: {
    width: 25,
    height: 25,
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 7,
    marginRight: 15,
  },
  plusButtonText: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.primary,
  },
});
