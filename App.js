import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen/HomeScreen";
import Colors from "./constants/Colors";
import AppStyle from "./App.style";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/*<Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        </Stack.Navigator>*/}
      <Tab.Navigator stile={AppStyle.menu}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
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
          component={HomeScreen}
          options={{
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
          component={HomeScreen}
          options={{
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
  );
}
