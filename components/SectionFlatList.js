import React, { Component } from "react";

import { StyleSheet, View, SectionList, FlatList, Image } from "react-native";

import { navigate } from "../navigator/NavigationService";

const Columns = {
  large: 1,
  normal: 1,
  small: 2
};
export default class SectionFlatList extends Component {
  constructor() {
    super();
    var data = [];

    data.push({
      title: "Normal",
      size: "normal",
      data: Array.apply(null, Array(1)).map((v, i) => {
        return { id: i, src: "http://placehold.it/200x160?text=" + (i + 1) };
      })
    });
    data.push({
      title: "Small",
      size: "small",
      data: Array.apply(null, Array(8)).map((v, i) => {
        return { id: i, src: "http://placehold.it/180x200?text=" + (i + 1) };
      })
    });
    data.push({
      title: "Large",
      size: "large",
      data: Array.apply(null, Array(1)).map((v, i) => {
        return { id: i, src: "http://placehold.it/200x220?text=" + (i + 1) };
      })
    });
    data.push({
      title: "Small",
      size: "small",
      data: Array.apply(null, Array(8)).map((v, i) => {
        return { id: i, src: "http://placehold.it/180x200?text=" + (i + 1) };
      })
    });
    this.state = {
      dataSource: data
    };
  }

  renderFlatList = ({ section, index }) => {
    if (index !== 0) return null;
    return (
      <FlatList
        style={styles.flatList}
        numColumns={Columns[section.size]}
        data={section.data}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: "column", margin: 2 }}>
            <Image
              style={styles[section.size + "Item"]}
              source={{ uri: item.src }}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  render() {
    console.log(this.state.dataSource);
    return (
      <View style={styles.sectionList}>
        <SectionList
          sections={this.state.dataSource}
          keyExtractor={(item, index) => item + index}
          renderItem={this.renderFlatList}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionList: {
    justifyContent: "center",
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5
  },
  flatList: {
    justifyContent: "center",
    paddingTop: 5
  },
  largeItem: {
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1.2
  },
  normalItem: {
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1.62
  },
  smallItem: {
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 0.9
  }
});
