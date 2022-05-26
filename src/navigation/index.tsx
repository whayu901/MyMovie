import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RNBootSplash from "react-native-bootsplash";

import MainStack from "./mainStack";

const Route = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <MainStack />
    </NavigationContainer>
  );
};

export default Route;
