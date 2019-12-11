import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Price extends Component {
  render() {
    let { presentPrice, previousPrice, volume, style } = this.props;
    let dollars = Math.floor(presentPrice);
    let cents = (presentPrice - dollars) * 100;
    let save = previousPrice - presentPrice;
    return (
      <View
        style={{
          ...style,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 3, flexDirection: "row",alignItems: 'flex-start' }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              lineHeight: 24,
            }}
          >
            $
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 38,
              lineHeight: 40,
              backgroundColor: "powderblue"
            }}
          >
            {dollars}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              lineHeight: 20,
              backgroundColor: "skyblue"
            }}
          >
            {cents?cents:"00"}
            {"\n"}
            {volume}
          </Text>
        </View>
        <View style={{ flex: 3, backgroundColor: "gray" }}>
          <Text>was ${previousPrice}</Text>
          <Text>save ${save}</Text>
        </View>
      </View>
    );
  }
}
