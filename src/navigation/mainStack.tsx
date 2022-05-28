import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

import Detail from "../screen/detail";

import Root from "./tabNavigator";

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Root"
      component={Root}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Detail"
      component={Detail}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default MainStack;
