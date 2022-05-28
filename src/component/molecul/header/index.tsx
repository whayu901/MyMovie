import React, { memo } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { TYPHOGRAPHY, COLORS } from "../../../config";
import { IS_ANDROID, RFPercentage, isIphoneX } from "../../../utils";

interface Props {
  onPress?: () => void;
  title?: string;
  isSurvey?: boolean;
}

const HeaderGeneral = ({ onPress, title, isSurvey = false }: Props) => {
  return (
    <View
      style={[styles.containerHeader, { backgroundColor: COLORS.blackLight }]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={"dark-content"}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <TouchableOpacity onPress={onPress}>
          <Ionicons
            name="arrow-back"
            color={COLORS.white}
            size={RFPercentage(6.5)}
          />
        </TouchableOpacity>
      </View>
      {title && (
        <View style={{ flex: 1, alignItems: "center", marginRight: 30 }}>
          <Text style={[styles.titleHeader, { color: COLORS.white }]}>
            {title}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: COLORS.blackLight,
    paddingTop: IS_ANDROID ? StatusBar.currentHeight : isIphoneX() ? 10 : 15,
    paddingBottom: IS_ANDROID ? 10 : 10,
  },
  titleHeader: {
    ...TYPHOGRAPHY.semiLargeSofia,
    color: COLORS.white,
    textAlign: "center",
    alignSelf: "center",
  },
});

export default memo(HeaderGeneral);
