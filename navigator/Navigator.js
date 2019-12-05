import { DetailScreen } from '../screens/DetailScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { LoadingScreen } from '../screens/LoadingScreen';
import { OptionsScreen } from '../screens/OptionsScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

import { createStackNavigator } from 'react-navigation'; 

const HomeStack = createStackNavigator({ DetailScreen, HomeScreen, OptionsScreen });

const MainTabs = createBottomTabNavigator({ HomeStack, SettingsScreen });

const RootSwitch = createSwitchNavigator({ LoadingScreen, MainTabs });

export default RootSwitch;