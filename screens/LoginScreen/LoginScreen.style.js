import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.bgColor,
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 30,
    color: Colors.primary,
    textAlign: "center",
    paddingTop: 10,
    fontWeight: "600",
  },
  title: {
    marginBottom: 50,
  },
  form: {
    width: "100%",
  },
  label: {
    textAlign: "left",
  },
  input: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    marginVertical: 20,
  },
  button: {
    height: 40,
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
});
