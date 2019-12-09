import React, { Component } from "react";
import { View, SectionList, FlatList } from "react-native";
import PropTypes from "prop-types";

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
      <View
        style={{
          justifyContent: "center",
          paddingTop: this.props.sectionPadding,
          paddingLeft: this.props.sectionPadding,
          paddingRight: this.props.sectionPadding
        }}
      >
        <SectionList
          sections={this.props.data}
          keyExtractor={(item, index) => item + index}
          renderItem={this.renderFlatList}
        />
      </View>
    );
  }
}

SectionFlatList.propTypes = {
  sectionSpace: PropTypes.number.isRequired,
  sectionPadding: PropTypes.number.isRequired,
  ItemComponent: PropTypes.elementType.isRequired,
  handleClickItem: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      size: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(PropTypes.object).isRequired
    })
  ).isRequired
};
/**
 *
 */
