import React, { useState } from "react";
import { Modal, TouchableOpacity, View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import CityText from "../../atoms/CityText/CityText";
import HeaderInfoStyle from "./HeaderInfo.style";
import DateText from "../../atoms/DateText/DateText";
import WeatherText from "../../atoms/WeatherText/WeatherText";
import { useDispatch } from "react-redux";
import { removeCity } from "../../../store/weatherSlice";

const HeaderInfo = (props) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={HeaderInfoStyle.container}>
          <View style={HeaderInfoStyle.modal}>
            <View style={HeaderInfoStyle.modalHeader}>
              <Text style={HeaderInfoStyle.title} city={props.city}>
                Sei sicuro di voler eliminare la città "{props.city}"?
              </Text>
            </View>
            <View style={HeaderInfoStyle.buttons}>
              <Pressable
                style={HeaderInfoStyle.buttonCancel}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={HeaderInfoStyle.text}>Annulla</Text>
              </Pressable>
              <Pressable
                style={HeaderInfoStyle.buttonConfirm}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  dispatch(removeCity(props.city));
                  navigation.navigate("HomeScreen");
                }}
              >
                <Text style={HeaderInfoStyle.text}>Conferma</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={[HeaderInfoStyle.info, props.style]}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <MaterialCommunityIcons name="arrow-left" size={40} color={"white"} />
        </TouchableOpacity>
        <CityText city={props.city} style={HeaderInfoStyle.city} />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setModalVisible(true)}
        >
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={40}
            color={"white"}
          />
        </TouchableOpacity>
      </View>
      <DateText
        day={props.day}
        month={props.month}
        style={HeaderInfoStyle.date}
      />
      <WeatherText weather={props.weather} />
    </View>
  );
};

export default HeaderInfo;
