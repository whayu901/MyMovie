import { useState, useRef, useCallback } from "react";
import {
  NativeSyntheticEvent,
  NativeScrollEvent,
  LayoutAnimation,
} from "react-native";

const useHandleScroll = () => {
  const [show, setShow] = useState(true);

  const scrollOffset = useRef(0);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const CustomLayoutLinear = {
        duration: 500,
        create: {
          type: LayoutAnimation.Types.linear,
          property: LayoutAnimation.Properties.opacity,
        },
        update: {
          type: LayoutAnimation.Types.linear,
          property: LayoutAnimation.Properties.opacity,
        },
        delete: {
          type: LayoutAnimation.Types.linear,
          property: LayoutAnimation.Properties.opacity,
        },
      };
      // Check if the user is scrolling up or down by confronting the new scroll position with your own one
      const currentOffset = event.nativeEvent.contentOffset.y;
      const direction =
        currentOffset > 0 && currentOffset > scrollOffset.current
          ? "down"
          : "up";
      // If the user is scrolling down (and the action-button is still visible) hide it
      const isActionButtonVisible = direction === "up";
      if (isActionButtonVisible !== show) {
        LayoutAnimation.configureNext(CustomLayoutLinear);
        setShow(isActionButtonVisible);
      }
      // Update scroll position
      scrollOffset.current = currentOffset;
    },
    [show],
  );

  return { handleScroll, show };
};

export default useHandleScroll;
