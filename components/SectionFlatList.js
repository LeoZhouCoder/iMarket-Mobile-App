import React, { Component } from "react";
import { StyleSheet, View, SectionList, FlatList } from "react-native";

const FlatListColumns = {
  large: 1,
  normal: 1,
  small: 2
};
export default class SectionFlatList extends Component {
  renderFlatList = ({ section, index }) => {
    if (index !== 0) return null;
    return (
      <FlatList
        style={{
          justifyContent: "center",
          paddingTop: this.props.sectionSpace
        }}
        numColumns={FlatListColumns[section.size]}
        data={section.data}
        renderItem={({ item }) => {
          let ItemComponent = this.props.ItemComponent;
          return (
            <ItemComponent
              item={item}
              size={section.size}
              handleClickItem={this.props.handleClickItem}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  render() {
    return (
      <View style={styles.sectionList}>
        <SectionList
          sections={this.props.data}
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
  }
});
