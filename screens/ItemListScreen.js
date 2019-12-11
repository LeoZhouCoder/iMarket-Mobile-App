import React, { Component } from "react";

import SectionFlatList from "../components/SectionFlatList";
import ItemDetailCard from "../components/ItemDetailCard";

import { navigate } from "../navigator/NavigationService";
import { getListData } from "../actions/fetchData";

import {
  ACTION_DETAIL,
  ACTION_WISH,
  ACTION_CART
} from "../components/ItemDetailCard";

export default class ItemListScreen extends Component {
  handleClickItem(item, action) {
    console.log(item.title, action);
    switch (action) {
      case ACTION_DETAIL:
        navigate("ItemDetail", item);
        break;
      case ACTION_WISH:
        break;
      case ACTION_CART:
        break;
      default:
        break;
    }
  }
  render() {
    const { navigation } = this.props;
    return (
      <SectionFlatList
        data={getListData(navigation.getParam("list"))}
        ItemComponent={ItemDetailCard}
        sectionSpace={0}
        sectionPadding={0}
        handleClickItem={this.handleClickItem}
      />
    );
  }
}
