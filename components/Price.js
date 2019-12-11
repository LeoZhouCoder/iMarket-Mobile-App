import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Price extends Component {
  render() {
    let { presentPrice, previousPrice, volume, style } = this.props;
    let dollars = Math.floor(presentPrice);
    let cents = (presentPrice - dollars) * 100;
    let color = "black";
    let previousPriceNode = null;
    if (previousPrice) {
      color = "red";
      let save = previousPrice - presentPrice;
      previousPriceNode = (
        <Text
          style={{
            flex: 1,
            color: color,
            textAlign: "center",
            fontSize: 16,
            lineHeight: 20
          }}
        >
          was ${previousPrice}
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
          {volume ? volume : ""}
        </Text>
        {previousPriceNode}
      </View>
    );
  }
}
