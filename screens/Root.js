import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import { onComponentDidMount } from "react-redux-lifecycle";
import Filters from "./Settings";
import CategoryList from "../components/categories/CategoryList";
import Swipe from "./Swipe";
import Matches from "./Matches";
import { setLastSession } from "../db/appDB";
import { getCategories } from "../api/categoriesAPI";
import { getCandidates } from "../api/candidatesAPI";

const SettingsStack = createStackNavigator({
  Filters: {
    screen: Filters,
    navigationOptions: () => ({
      title: `Filters`
    })
  },
  CategoryList: {
    screen: CategoryList,
    navigationOptions: () => ({
      title: `Categories`
    })
  }
});

const Root = createAppContainer(
  createBottomTabNavigator(
    {
      Settings: SettingsStack,
      Swipe: Swipe,
      Matches: Matches
    },
    {
      initialRouteName: "Swipe",
      tabBarOptions: {
        activeTintColor: "black",
        labelStyle: {
          fontSize: 25
        },
        style: {
          backgroundColor: "white"
        }
      }
    }
  )
);

export default onComponentDidMount([
  getCategories,
  getCandidates,
  setLastSession
])(Root);
