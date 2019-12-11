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
              textAlignVertical: "top",
              fontWeight: "bold",
              fontSize: 20,
              lineHeight: 30,
              backgroundColor: "steelblue"
            }}
          >
            $
          </Text>
          <Text
            style={{
              textAlignVertical: "top",
              fontWeight: "bold",
              fontSize: 36,
              backgroundColor: "skyblue"
            }}
          >
            {dollars}
          </Text>
          <Text
            style={{
              textAlignVertical: "top",
              fontWeight: "bold",
              fontSize: 20,
              backgroundColor: "powderblue"
            }}
          >
            {cents}
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
