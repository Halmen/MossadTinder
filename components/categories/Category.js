import React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Button, Card, Icon } from "react-native-elements";
import { addFilter } from "../../actions/databaseActions";
import { RNToasty } from "react-native-toasty";

const mapDispatchToProps = dispatch => ({
  addFilter: status => dispatch(addFilter(status))
});

const mapStateToProps = state => ({
  ...state
});

const add = (filter, props) => {
  props.addFilter({ filter });
  RNToasty.Success({ title: "Filter added!" });
};

const Category = props => {
  const filter = {
    name: props.name,
    url: props.url,
    logo: props.logo,
    description: props.description,
    xp: 0,
    active: false
  };
  return (
    <View>
      <Card title={props.name} image={{ uri: props.logo ? props.logo : null }}>
        <Text style={{ marginBottom: 10 }}>{props.description}</Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          backgroundColor="#03A9F4"
          title="ADD TO FILTERS"
          onPress={() => add(filter, props)}
        />
      </Card>
    </View>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
