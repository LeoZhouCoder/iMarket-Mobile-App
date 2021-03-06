import React, { Component } from "react";

import SectionFlatList from "../components/SectionFlatList";
import HomeCategory from "../components/HomeCategory";

import { getHomeCategories } from "../actions/fetchData";
import { navigate } from "../navigator/NavigationService";

export default class HomeScreen extends Component {
  render() {
    return (
      <SectionFlatList
        data={getHomeCategories()}
        ItemComponent={HomeCategory}
        sectionSpace={5}
        sectionPadding={5}
        handleClickItem={item => navigate("ItemList", item)}
      />
    );
  }
}
