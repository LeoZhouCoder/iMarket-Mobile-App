import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default Price = ({ price, presentPrice = -1, volume = null }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 2, flexDirection: "row" }}>
        <Text style={{ flex: 1 }}>$</Text>
        <Text style={{ flex: 2 }}>14</Text>
        <View style={{ flex: 2 }}>
          <Text style={{ flex: 2 }}>${item.price}</Text>
          <Text style={{ flex: 2 }}>${item.price}</Text>
        </View>
      </View>
      <View style={{ flex: 3 }}>
        <Text>${item.price}</Text>
        <Text>${item.price}</Text>
      </View>
    </View>
  );
};
