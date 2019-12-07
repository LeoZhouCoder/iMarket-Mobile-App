import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/Home/HomeScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
