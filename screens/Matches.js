import React from "react";
import { View, Text } from "react-native";
import { container, backgroundText } from "../styles/Mixins";
import GestureRecognizer from "react-native-swipe-gestures";

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80
};

const Matches = props => {
  return (
    <GestureRecognizer
      onSwipeRight={() => props.navigation.navigate("Swipe")}
      config={config}
      style={container}
    >
      <Text style={backgroundText}>Low budget :(...</Text>
    </GestureRecognizer>
  );
};

export default Matches;
