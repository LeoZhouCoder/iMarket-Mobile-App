import React from "react";
import { TouchableOpacity, StyleSheet, View, Image } from "react-native";

export default HomeCategory = ({ item, size, handleClickItem }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleClickItem(item)}>
        <Image style={styles[size + "Item"]} source={{ uri: item.src }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 2
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
