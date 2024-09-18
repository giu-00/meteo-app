import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { store } from "./store/store";
import { Provider } from "react-redux";

import HomeScreen from "./screens/HomeScreen/HomeScreen";
import Colors from "./constants/Colors";
import DetailScreen from "./screens/DetailScreen/DetailScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              margin: 20,
              borderRadius: 25,
              shadowColor: "black",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.2,
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 0,
            },
          }}
        >
          <Tab.Screen
            name="Root"
            component={Root}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="home"
                  color={Colors.primary}
                  size={40}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={""}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="magnify"
                  color={Colors.primary}
                  size={40}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Location"
            component={""}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="map-marker"
                  color={Colors.primary}
                  size={40}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
