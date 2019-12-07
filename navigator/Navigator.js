import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/HomeScreen";
import BrowseScreen from "../screens/BrowseScreen";
import SpecialsScreen from "../screens/SpecialsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Browse: {
    screen: BrowseScreen
  },
  Specials: {
    screen: SpecialsScreen
  },
  Settings: {
    screen: SettingsScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
