import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import Filter from "../components/categories/Filter";
import { Button } from "react-native-elements";
import { container, backgroundText } from "../styles/Mixins";
import GestureRecognizer from "react-native-swipe-gestures";

const mapStateToProps = state => ({
  ...state
});

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80
};

const renderSeparator = () => {
  return (
    <View
      style={{
        height: 3,
        width: "100%",
        backgroundColor: "#CED0CE",
        marginBottom: 15,
        marginTop: 15
      }}
    />
  );
};

const CategoryTab = props => {
  return (
    <GestureRecognizer
      onSwipeLeft={() => props.navigation.navigate("Swipe")}
      config={config}
      style={container}
    >
      {props.filterReducer.filters.length > 0 ? (
        <FlatList
          data={props.filterReducer.filters}
          renderItem={({ item }) => (
            <Filter style={styles.list} {...item} filter />
          )}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={renderSeparator}
        />
      ) : (
        <Text style={backgroundText}>No filters set</Text>
      )}
      <Button
        onPress={() => props.navigation.navigate("CategoryList")}
        title={"Add a filter"}
      />
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingBottom: 10,
    paddingTop: 10
  }
});

export default connect(mapStateToProps)(CategoryTab);
