import React from "react";
import { Text, View, ImageBackground } from "react-native";

/**
 * ? Local Imports
 */
import styles, {
  _backgroundStyle,
  _shadowStyle,
  _blackOverlay,
} from "./ImagedCarouselCard.style";

interface Props {
  style?: any;
  text?: string;
  source?: any;
  width?: any;
  height?: any;
  textStyle?: any;
  shadowColor?: any;
  shadowStyle?: any;
  borderRadius?: any;
  overlayHeight?: any;
  shadowPaddingBottom?: any;
  overlayBackgroundColor?: any;
  overlayBorderBottomLeftRadius?: any;
  overlayBorderBottomRightRadius?: any;
}

const ImagedCarouselCard = ({
  style,
  text,
  source,
  width,
  height,
  textStyle,
  shadowColor,
  shadowStyle,
  borderRadius,
  overlayHeight,
  shadowPaddingBottom,
  overlayBackgroundColor,
  overlayBorderBottomLeftRadius,
  overlayBorderBottomRightRadius,
}: Props) => {
  return (
    <ImageBackground
      source={{ uri: source }}
      borderRadius={15}
      style={[
        _backgroundStyle(width, height, shadowPaddingBottom),
        shadowStyle || _shadowStyle(shadowColor),
        style,
      ]}>
      <View
        style={{
          bottom: 0,
          height: 50,
          width,
          position: "absolute",
          justifyContent: "center",
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
          backgroundColor: "rgba(0,0,0,0.3)",
        }}>
        <Text style={textStyle || styles.textStyle}>{text}</Text>
      </View>
    </ImageBackground>
  );
};

ImagedCarouselCard.defaultProps = {
  text: "California Festive 2020",
  width: 300,
  height: 300,
  borderRadius: 16,
  overlayHeight: 50,
  shadowColor: "#000",
  shadowPaddingBottom: 18,
  overlayBorderBottomLeftRadius: 16,
  overlayBorderBottomRightRadius: 16,
  overlayBackgroundColor: "rgba(0,0,0,0.3)",
  source: {
    // eslint-disable-next-line max-len
    uri: "https://images.unsplash.com/photo-1471306224500-6d0d218be372?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
};

export default ImagedCarouselCard;
