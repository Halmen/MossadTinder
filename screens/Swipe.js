import React from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Swiper from "react-native-deck-swiper";
import { addBlackList } from "./../actions/databaseActions";
import { container } from "../styles/Mixins";

const mapDispatchToProps = dispatch => ({
  addBlackList: status => dispatch(addBlackList(status))
});

const mapStateToProps = state => ({
  ...state
});

const Swipe = props => {
  const cards = props.matchReducer.matching_cand;
  if (cards !== undefined && cards.length > 0) {
    return (
      <Swiper
        cards={cards}
        verticalSwipe={false}
        renderCard={card => {
          if (card !== undefined) {
            return (
              <View style={styles.card}>
                <ImageBackground
                  source={{ uri: card.img ? card.img : null }}
                  style={{ width: "100%", height: "100%" }}
                >
                  <Text style={styles.text}>
                    {card.name.first} {card.name.last}
                  </Text>
                </ImageBackground>
              </View>
            );
          } else {
            return (
              <View style={styles.card}>
                <Text style={styles.empty}>ERORR :(</Text>
              </View>
            );
          }
        }}
        onSwipedLeft={i => {
          props.addBlackList({ id: cards[i].id, match: false });
        }}
        onSwipedRight={i => {
          props.addBlackList({ id: cards[i].id, match: true });
        }}
        onSwipedAll={() => {
          console.log("onSwipedAll");
        }}
        cardIndex={0}
        backgroundColor={"#4FD0E9"}
        stackSize={3}
      />
    );
  } else {
    return (
      <View style={container}>
        <Text style={styles.empty}>No Matches!</Text>
        <Text style={styles.arrow}>⇦</Text>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    textAlign: "left",
    fontSize: 50,
    backgroundColor: "transparent"
  },
  empty: {
    fontSize: 30,
    color: "black",
    backgroundColor: "transparent",
    fontWeight: "bold"
  },
  arrow: {
    fontSize: 50,
    color: "black",
    backgroundColor: "transparent",
    fontWeight: "bold"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Swipe);
