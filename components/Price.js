import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

export default class Price extends Component {
  render() {
    let { presentPrice, previousPrice, volumeUnit, style } = this.props;
    let dollars = Math.floor(presentPrice);
    let cents = Math.floor((presentPrice - dollars) * 100);
    let color = "black";
    let previousPriceNode = null;
    if (previousPrice) {
      color = "red";
      let save = (previousPrice - presentPrice).toFixed(2);
      previousPriceNode = (
        <Text
          style={{
            flex: 1,
            color: color,
            marginLeft: 10,
            fontSize: 16,
            lineHeight: 20
          }}
        >
          <Text style={{ color: "gray" }}>
            {"was "} ${previousPrice.toFixed(2)}
          </Text>
          {"\n"}save ${save}
        </Text>
      );
    }

    return (
      <View
        style={{
          ...style,
          flexDirection: "row",
          alignItems: "flex-start"
        }}
      >
        <Text
          style={{
            color: color,
            fontWeight: "bold",
            fontSize: 20,
            lineHeight: 24
          }}
        >
          $
        </Text>
        <Text
          style={{
            color: color,
            fontWeight: "bold",
            fontSize: 38,
            lineHeight: 40
          }}
        >
          {dollars}
        </Text>
        <Text
          style={{
            color: color,
            fontWeight: "bold",
            fontSize: 16,
            lineHeight: 20
          }}
        >
          {cents ? cents : "00"}
          {"\n"}
          {volumeUnit ? volumeUnit : ""}
        </Text>
        {previousPriceNode}
      </View>
    );
  }
}

Price.propTypes = {
  presentPrice: PropTypes.number.isRequired,
  previousPrice: PropTypes.number,
  volume: PropTypes.string
};
