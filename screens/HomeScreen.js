import React, { Component } from "react";

import { getHomeCategories } from "../actions/fetchData";
import SectionFlatList from "../components/SectionFlatList";
import HomeCategory from "../components/HomeCategory";

export default class HomeScreen extends Component {
  handleClickItem = item => {
    console.log(item);
  };
  render() {
    return (
      <SectionFlatList
        data={getHomeCategories()}
        ItemComponent={HomeCategory}
        sectionSpace={0}
        handleClickItem={this.handleClickItem}
      />
    );
  }
}
