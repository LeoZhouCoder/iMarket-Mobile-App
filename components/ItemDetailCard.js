import React from "react";
import { TouchableOpacity, StyleSheet, View, Image } from "react-native";

export default ItemDetailCard = ({ item, size, handleClickItem }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleClickItem(item)}>
        <Image style={styles[size + "Item"]} source={{ uri: item.image }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 0,
    borderWidth: 0.2,
    borderColor: "#888888"
  },
  largeItem: {
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1.2 // 120*100
  },
  normalItem: {
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1.6 // 160*100
  },
  smallItem: {
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 0.8 // 90*100
  }
});
