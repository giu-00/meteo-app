import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    margin: 20,
    width: "90%",
    height: 220,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalHeaderCloseText: {
    fontSize: 20,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "700",
    color: Colors.primary,
  },
  closeButton: {
    marginLeft: 40,
  },
  buttons: {
    flexDirection: "row",
  },
  buttonCancel: {
    height: 40,
    width: 120,
    borderRadius: 20,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonConfirm: {
    height: 40,
    width: 120,
    borderRadius: 20,
    marginLeft: 30,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  city: {
    fontSize: 35,
  },
  button: {
    borderColor: "white",
    color: "white",
  },
  date: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
  },
});
