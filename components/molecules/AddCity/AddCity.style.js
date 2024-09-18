import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalHeaderCloseText: {
    fontSize: 20,
  },
  modal: {
    margin: 20,
    width: "90%",
    height: 380,
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
  title: {
    fontSize: 25,
    fontWeight: "800",
    color: Colors.primary,
  },
  closeButton: {
    marginLeft: 40,
  },
  input: {
    height: 50,
    width: "95%",
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    height: 40,
    width: "95%",
    borderRadius: 20,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  addCity: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
});
