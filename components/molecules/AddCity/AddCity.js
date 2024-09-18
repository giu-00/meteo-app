import React, { useState } from "react";
import {
  Modal,
  Pressable,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";

import AddCityStyle from "./AddCity.style";

import PlusButton from "../../atoms/PlusButton/PlusButton";
import TextAddCity from "../../atoms/TextAddCity/TextAddCity";
import { addCity } from "../../../store/weatherSlice";

const AddCity = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={AddCityStyle.container}>
          <View style={AddCityStyle.modal}>
            <View style={AddCityStyle.modalHeader}>
              <Text style={AddCityStyle.title}>Aggiungi una città!</Text>
              <TouchableOpacity
                style={AddCityStyle.closeButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={AddCityStyle.modalHeaderCloseText}>x</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={AddCityStyle.input}
              placeholder="Inserisci il nome di una città..."
              placeholderTextColor="grey"
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
            />
            <Pressable
              style={AddCityStyle.button}
              onPress={() => {
                setModalVisible(!modalVisible);
                dispatch(addCity(inputValue));
                setInputValue("");
              }}
            >
              <Text style={AddCityStyle.text}>Aggiungi città</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={AddCityStyle.addCity}
        onPress={() => setModalVisible(true)}
      >
        <PlusButton />
        <TextAddCity />
      </TouchableOpacity>
    </View>
  );
};

export default AddCity;
