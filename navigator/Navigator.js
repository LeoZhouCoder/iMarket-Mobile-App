import React from "react";
import { StyleSheet, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import BrowseScreen from "../screens/BrowseScreen";
import SpecialsScreen from "../screens/SpecialsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const BottomTabIcons = {
  Home: "ios-home",
  Browse: "ios-list",
  Specials: "ios-pricetags",
  Settings: "ios-settings"
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});

const DefaultNavigationOptions = {
  headerTintColor: "red",
  headerRight: <View style={styles.container}>
                  <Ionicons name="ios-search" size={25}/>
                  <Ionicons name="ios-cart" size={25}/>
                </View>
};

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: createStackNavigator(
        {
          Home: {
            screen: HomeScreen,
            navigationOptions: ({ navigation }) => ({
              title: `MyHome`
            })
          }
        },
        {
          defaultNavigationOptions: DefaultNavigationOptions
        }
      ),
      navigationOptions: ({ navigation }) => ({
        title: `Home!`
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
