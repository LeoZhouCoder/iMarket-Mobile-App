import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import BrowseScreen from "../screens/BrowseScreen";
import SpecialsScreen from "../screens/SpecialsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ItemListScreen from "../screens/ItemListScreen";
import ItemDetailScreen from "../screens/ItemDetailScreen";
import CartScreen from "../screens/CartScreen";
import SearchScreen from "../screens/SearchScreen";

import { MaterialHeaderButtons, Item } from "./HeaderButtons";
import { navigate } from "./NavigationService";
import { translate } from "../utils/Localization";
import I18n from "i18n-js";

const BottomTabIcons = {
  Home: "ios-home",
  Browse: "ios-list",
  Specials: "ios-pricetags",
  Settings: "ios-settings"
};

export const NavigationHeader = isMore => {
  let items = [];
  items.push(
    <Item
      title="search"
      key="search"
      iconName="ios-search"
      onPress={() => navigate("Search")}
    />
  );
  items.push(
    <Item
      title="cart"
      key="cart"
      iconName="ios-cart"
      onPress={() => navigate("Cart")}
    />
  );
  if (isMore) {
    items.push(
      <Item
        title="more"
        key="more"
        iconName="md-more"
        onPress={() => console.log("more")}
      />
    );
  }

  return <MaterialHeaderButtons>{items}</MaterialHeaderButtons>;
};

const DefaultNavigationOptions = {
  headerTintColor: "red",
  headerRight: NavigationHeader(false)
};

const DefaultNavigationOptionsWithMoreButton = {
  headerTintColor: "red",
  headerRight: NavigationHeader(true)
};

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: translate("tabNames.home")
      })
    }
  },
  {
    defaultNavigationOptions: DefaultNavigationOptions
  }
);

const BrowseStack = createStackNavigator(
  {
    Browse: {
      screen: BrowseScreen,
      navigationOptions: ({ navigation }) => ({
        title: `Browse`
      })
    }
  },
  {
    defaultNavigationOptions: DefaultNavigationOptions
  }
);

const SpecialsStack = createStackNavigator(
  {
    Specials: {
      screen: SpecialsScreen,
      navigationOptions: ({ navigation }) => ({
        title: `Specials`
      })
    }
  },
  {
    defaultNavigationOptions: DefaultNavigationOptions
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
      navigationOptions: ({ navigation }) => ({
        title: `Settings`
      })
    }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "red"
    }
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({ navigation }) => ({
        title: `Home`
      })
    },
    Browse: {
      screen: BrowseStack,
      navigationOptions: ({ navigation }) => ({
        title: `Browse`
      })
    },
    Specials: {
      screen: SpecialsStack,
      navigationOptions: ({ navigation }) => ({
        title: `Specials`
      })
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: ({ navigation }) => ({
        title: `Specials`
      })
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

const AppNavigator = createStackNavigator({
  MainTab: {
    screen: TabNavigator,
    navigationOptions: {
      header: null
    }
  },
  ItemList: {
    screen: ItemListScreen,
    navigationOptions: DefaultNavigationOptionsWithMoreButton
  },
  ItemDetail: {
    screen: ItemDetailScreen,
    navigationOptions: DefaultNavigationOptionsWithMoreButton
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: DefaultNavigationOptionsWithMoreButton
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: DefaultNavigationOptionsWithMoreButton
  },
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
