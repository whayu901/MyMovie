export const _backgroundStyle = (
  width: any,
  height: any,
  shadowPaddingBottom: any,
) => ({
  width,
  height,
  paddingBottom: shadowPaddingBottom, // needed for shadow
});

export const _shadowStyle = (shadowColor: any) => ({
  shadowColor,
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51,
});

export const _blackOverlay = (
  overlayHeight: any,
  width: any,
  overlayBackgroundColor: any,
  overlayBorderBottomLeftRadius: any,
  overlayBorderBottomRightRadius: any,
) => ({
  bottom: 0,
  height: overlayHeight,
  width,
  position: "absolute",
  justifyContent: "center",
  borderBottomLeftRadius: overlayBorderBottomLeftRadius,
  borderBottomRightRadius: overlayBorderBottomRightRadius,
  backgroundColor: overlayBackgroundColor,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  textStyle: {
    fontSize: 18,
    color: "white",
    marginLeft: 16,
    fontWeight: "600",
  },
};
