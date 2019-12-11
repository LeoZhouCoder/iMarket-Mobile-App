import React, { Component } from "react";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

import Price from "./Price";

export const ACTION_DETAIL = "detail";
export const ACTION_WISH = "wish";
export const ACTION_CART = "cart";

export default class ItemDetailCard extends Component {
  render() {
    let { item, handleClickItem } = this.props;
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => handleClickItem(item, ACTION_DETAIL)}
      >
        <Image style={styles.image} source={{ uri: item.image }} />
        <Image
          style={styles.badge}
          source={require("../assets/image/special.png")}
        />
        <Ionicons
          style={styles.like}
          name="ios-heart"
          size={30}
          color="gray"
          onPress={() => handleClickItem(item, ACTION_WISH)}
        />
        <Text style={styles.title}>
          {item.title}
          {"\n"}
          {item.volume}
        </Text>
        <Price
          style={styles.price}
          presentPrice={item.price}
          previousPrice={item.previousPrice}
          volumeUnit={item.volumeUnit}
        />
        <Button
          title="ADD TO TROLLEY"
          buttonStyle={{ backgroundColor: "red" }}
          onPress={() => handleClickItem(item, ACTION_CART)}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    padding: 10,
    borderWidth: 0.2,
    borderColor: "#888888",
    aspectRatio: 0.6
  },
  image: {
    flex: 8,
    alignSelf: "center",
    height: "100%",
    aspectRatio: 0.8,
    marginBottom: 10
  },
  badge: {
    position: "absolute",
    width: 40,
    height: 40,
    top: 10,
    left: 10
  },
  like: {
    position: "absolute",
    top: 10,
    right: 10
  },
  title: {
    flex: 3,
    marginBottom: 10
  },
  price: {
    marginBottom: 10
  }
});
