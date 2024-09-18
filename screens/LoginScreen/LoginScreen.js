import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import LoginScreenStyle from "./LoginScreen.style";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setCities, setUsers } from "../../store/weatherSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = (props) => {
  const navigation = useNavigation();
  const [inputValueUser, setInputValueUser] = useState("");
  const [inputValuePwd, setInputValuePwd] = useState("");
  const { username } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  return (
    <View style={LoginScreenStyle.container}>
      <View style={LoginScreenStyle.title}>
        <Text style={LoginScreenStyle.titleText}>
          Per iniziare a vedere il meteo effettua il login!
        </Text>
      </View>
      <View style={LoginScreenStyle.form}>
        <Text style={LoginScreenStyle.label}>Inserisci l'username:</Text>
        <TextInput
          style={LoginScreenStyle.input}
          placeholder="Username"
          value={inputValueUser}
          onChangeText={(text) => setInputValueUser(text)}
        />

        <Text style={LoginScreenStyle.label}>Inserisci la password:</Text>
        <TextInput
          style={LoginScreenStyle.input}
          placeholder="Password"
          value={inputValuePwd}
          onChangeText={(text) => setInputValuePwd(text)}
        />
        <Pressable
          style={LoginScreenStyle.button}
          onPress={() => {
            navigation.navigate("HomeScreen", {
              username: inputValueUser,
              password: inputValuePwd,
            });
            dispatch(setUsers(inputValueUser));
            setInputValueUser("");
            setInputValuePwd("");
          }}
        >
          <Text style={LoginScreenStyle.text}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
