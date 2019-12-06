import DetailScreen from "../screens/Detail/DetailScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import LoadingScreen from "../screens/Loading/LoadingScreen";
import OptionsScreen from "../screens/Options/OptionsScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";

import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const HomeStack = createStackNavigator({
  DetailScreen,
  HomeScreen,
  OptionsScreen
});

/*const MainTabs = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsScreen
});

const RootSwitch = createSwitchNavigator({ LoadingScreen, MainTabs });*/

const AppContainer = createAppContainer(HomeStack);

export default AppContainer;
