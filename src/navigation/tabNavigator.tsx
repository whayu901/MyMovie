import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import IconIonicons from "react-native-vector-icons/Ionicons";

import { COLORS } from "../config";
import Search from "../screen/search";
import Home from "../screen/home";

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      activeColor={COLORS.secondary}
      inactiveColor={COLORS.blackLighter}
      shifting
      barStyle={{ backgroundColor: COLORS.white }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <IconIonicons name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <IconIonicons name="search" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
