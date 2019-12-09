import React, { Component } from 'react';

import SectionFlatList from "../components/SectionFlatList";
import ItemDetailCard from "../components/ItemDetailCard";

import { navigate } from "../navigator/NavigationService";
import { getListData } from "../actions/fetchData";

export default class ItemListScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SectionFlatList
        data={getListData(navigation.getParam('list'))}
        ItemComponent={ItemDetailCard}
        sectionSpace={0}
        sectionPadding={0}
        handleClickItem={item => navigate("ItemDetail", item)}
      />
    );
  }
}
