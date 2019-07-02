import React from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import { Button, CheckBox } from "react-native-elements";
import NumericInput from "react-native-numeric-input";
import { setYearInput } from "./../../actions/inputActions";
import { setActiveInput } from "./../../actions/inputActions";
import { filterCandidates } from "./../../actions/matchActions";
import { container } from "../../styles/Mixins";
import {
  addFilter,
  updateFilter,
  removeFilter
} from "../../actions/databaseActions";

const mapDispatchToProps = dispatch => ({
  addFilter: status => dispatch(addFilter(status)),
  updateFilter: status => dispatch(updateFilter(status)),
  removeFilter: status => dispatch(removeFilter(status)),
  filterCandidates: status => dispatch(filterCandidates(status)),
  setYearInput: status => dispatch(setYearInput(status)),
  setActiveInput: status => dispatch(setActiveInput(status))
});

const mapStateToProps = state => ({
  ...state
});

const onChange = (value, checked, filter, props) => {
  if (value) {
    props.setYearInput({ id: props.name, years: value });
    if (checked) {
      filter.xp = value;
      props.setYearInput({ id: props.name, years: value });
      props.updateFilter({ filter });
      props.filterCandidates();
    }
  } else if (!checked) {
    filter.active = true;
    props.updateFilter({ filter });
    props.filterCandidates();
    props.setActiveInput({ id: props.name, active: true });
  } else {
    filter.active = false;
    props.updateFilter({ filter });
    props.filterCandidates();
    props.setActiveInput({ id: props.name, active: false });
  }
};

const onRemove = (filter, props) => {
  props.removeFilter({ filter });
  props.filterCandidates();
};

const Filter = props => {
  const checked = props.active ? props.active : false;
  const years = props.xp ? props.xp : 0;

  const filter = {
    name: props.name,
    url: props.url,
    logo: props.logo,
    description: props.description,
    xp: years,
    active: checked
  };

  return (
    <View>
      <Text style={styles.text}>{props.name} : </Text>
      {props.filter ? (
        <View style={styles.container}>
          <Text style={styles.xp}>XP:</Text>
          <NumericInput
            type="up-down"
            initValue={years}
            minValue={0}
            value={years}
            onChange={value => onChange(value, checked, filter, props)}
          />
          <CheckBox
            checked={checked}
            checkedColor="red"
            onPress={() => onChange((value = null), checked, filter, props)}
          />
          <Button onPress={() => onRemove(filter, props)} title="Remove" />
        </View>
      ) : (
        <Button
          onPress={() => props.addFilter({ filter })}
          title={"Add to filters"}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  text: {
    fontSize: 25,
    backgroundColor: "transparent",
    color: "black",
    fontWeight: "bold",
    paddingBottom: 10
  },
  xp: {
    paddingRight: 15,
    fontSize: 25,
    backgroundColor: "transparent",
    color: "green"
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
