import { Platform, Dimensions, StatusBar } from "react-native";

const { height, width } = Dimensions.get("window");
const standardLength = width > height ? width : height;
const offset: any =
  width > height ? 0 : Platform.OS === "ios" ? 78 : StatusBar.currentHeight;

const deviceHeight =
  Platform.OS === "android" ? standardLength - offset : standardLength;

const RFPercentage = (percent: number) => {
  const heightPercent = (percent * deviceHeight) / 150;
  return Math.round(heightPercent);
};

export const IS_ANDROID = Platform.OS === "android";

function isIphoneX() {
  const dimen = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926)
  );
}

export { RFPercentage, isIphoneX };
