import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import BrowseScreen from "../screens/BrowseScreen";
import SpecialsScreen from "../screens/SpecialsScreen";
import SettingsScreen from "../screens/SettingsScreen";

import { MaterialHeaderButtons, Item } from './HeaderButtons'

const BottomTabIcons = {
  Home: "ios-home",
  Browse: "ios-list",
  Specials: "ios-pricetags",
  Settings: "ios-settings"
};

const DefaultNavigationOptions = {
  headerTintColor: "red",
  headerRight: <MaterialHeaderButtons>
                  <Item title="search" iconName="ios-search" onPress={() => console.log('search')} />
                  <Item title="cart" iconName="ios-cart" onPress={() => console.log('cart')} />
                </MaterialHeaderButtons>
};



const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: createStackNavigator(
        {
          Home: {
            screen: HomeScreen,
            navigationOptions: ({ navigation }) => ({
              title: `Home`
            })
          }
        },
        {
          defaultNavigationOptions: DefaultNavigationOptions
        }
      ),
      navigationOptions: ({ navigation }) => ({
        title: `Home`
      })
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
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        return (
          <Ionicons
            name={BottomTabIcons[routeName]}
            size={25}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "gray"
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
