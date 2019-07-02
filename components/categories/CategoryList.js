import React, { useState } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";
import Category from "./Category";
import { container, text } from "../../styles/Mixins";
import GestureRecognizer from "react-native-swipe-gestures";

const mapStateToProps = state => ({
  ...state
});

const onChange = (search, setResult, props) => {
  const categories = props.categoryReducer.categories;
  const result = categories.find(e => e.name === search);
  if (result) {
    setResult(result);
  } else {
    setResult("");
  }
};

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80
};

const CategoryList = props => {
  const [result, setResult] = useState("");

  if (!props.categoryReducer.loading) {
    return (
      <GestureRecognizer
        onSwipeLeft={() => props.navigation.navigate("Filters")}
        config={config}
      >
        {props.categoryReducer.categories.length > 0 ? (
          <View>
            <SearchableDropdown
              onTextChange={text => onChange(text, setResult, props)}
              onItemSelect={item => setResult(item)}
              containerStyle={{ padding: 5 }}
              textInputStyle={{
                padding: 12,
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 5
              }}
              itemStyle={{
                padding: 10,
                marginTop: 2,
                backgroundColor: "#ddd",
                borderColor: "#bbb",
                borderWidth: 1,
                borderRadius: 5
              }}
              itemTextStyle={{ color: "#222" }}
              itemsContainerStyle={{ maxHeight: 500 }}
              items={props.categoryReducer.categories}
              defaultIndex={2}
              placeholder="placeholder"
              resetValue={false}
              underlineColorAndroid="transparent"
            />
            {result ? (
              <Category {...result} />
            ) : (
              <GestureRecognizer
                onSwipeRight={() => props.navigation.navigate("Filters")}
                config={config}
                style={container}
              >
                <Text style={text}>
                  Enter the searhed category or select from the dropdown ;)
                </Text>
              </GestureRecognizer>
            )}
          </View>
        ) : (
          <Text style={text}>Data not found, chek the the internet</Text>
        )}
      </GestureRecognizer>
    );
  } else {
    return (
      <GestureRecognizer
        onSwipeLeft={() => props.navigation.navigate("Filters")}
        config={config}
        style={container}
      >
        <Text>Loading..</Text>
      </GestureRecognizer>
    );
  }
};

export default connect(mapStateToProps)(CategoryList);
