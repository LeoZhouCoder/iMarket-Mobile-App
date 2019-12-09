import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";

import { MaterialHeaderButtons, Item } from "./HeaderButtons";
import { navigate } from "./NavigationService";
import { translate } from "../utils/Localization";

import HomeScreen from "../screens/HomeScreen";
import BrowseScreen from "../screens/BrowseScreen";
import SpecialsScreen from "../screens/SpecialsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ItemListScreen from "../screens/ItemListScreen";
import ItemDetailScreen from "../screens/ItemDetailScreen";
import CartScreen from "../screens/CartScreen";
import SearchScreen from "../screens/SearchScreen";

const HeaderButtons = {
  search: { icon: "ios-search", action: () => navigate("Search") },
  cart: { icon: "ios-cart", action: () => navigate("Cart") },
  more: { icon: "md-more", action: () => console.log("more") }
};

const MainScreenButtons = ["search", "cart"];
const DeepScreenButtons = ["search", "cart", "more"];

function getHeaderButton(name, icon, action) {
  return <Item title={name} key={name} iconName={icon} onPress={action} />;
}

function getHeader(buttonNames) {
  if (!buttonNames) return null;
  let items = [];
  buttonNames.forEach(name => {
    if (!HeaderButtons[name]) return;
    let config = HeaderButtons[name];
    items.push(getHeaderButton(name, config.icon, config.action));
  });
  if (!items.length) return null;
  return <MaterialHeaderButtons>{items}</MaterialHeaderButtons>;
}

const BottomTabIcons = {
  Home: "ios-home",
  Browse: "ios-list",
  Specials: "ios-pricetags",
  Settings: "ios-settings"
};

const TINT_COLOR = "red";

function getNavigationOptions(isHeader, title = null, headerRight = null) {
  let config = {};
  config.headerTintColor = TINT_COLOR;
  if (!isHeader) config.header = null;
  if (title) {
    config.title = translate(title);
    config.headerTruncatedBackTitle = translate(title);
  }else{
    config.headerTruncatedBackTitle = translate("default.backButton");
  }
  
  if (headerRight) config.headerRight = headerRight;
  return config;
}

function getRouteConfig(screen, title, buttonNames = null) {
  return {
    screen: screen,
    navigationOptions: ({ navigation }) =>
      getNavigationOptions(true, title, getHeader(buttonNames))
  };
}

function createTabStack(path, screen, title, buttonNames = null) {
  let config = {};
  config[path] = getRouteConfig(screen, title, buttonNames);
  return createStackNavigator(config);
}

const HomeStack = createTabStack(
  "Home",
  HomeScreen,
  "screenNames.home",
  MainScreenButtons
);

const BrowseStack = createTabStack(
  "Browse",
  BrowseScreen,
  "screenNames.browse",
  MainScreenButtons
);

const SpecialsStack = createTabStack(
  "Specials",
  SpecialsScreen,
  "screenNames.specials",
  MainScreenButtons
);

const SettingsStack = createTabStack(
  "Settings",
  SettingsScreen,
  "screenNames.settings"
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: getRouteConfig(HomeStack, "screenNames.home"),
    Browse: getRouteConfig(BrowseStack, "screenNames.browse"),
    Specials: getRouteConfig(SpecialsStack, "screenNames.specials"),
    Settings: getRouteConfig(SettingsStack, "screenNames.settings")
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

const AppNavigator = createStackNavigator({
  MainTab: {
    screen: TabNavigator,
    navigationOptions: ({ navigation }) => getNavigationOptions(false)
  },
  ItemList: getRouteConfig(ItemListScreen, null, DeepScreenButtons),
  ItemDetail: getRouteConfig(ItemDetailScreen, null, DeepScreenButtons),
  Cart: getRouteConfig(CartScreen, null, DeepScreenButtons),
  Search: getRouteConfig(SearchScreen, null, DeepScreenButtons)
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
