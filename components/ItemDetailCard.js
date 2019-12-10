import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

import { Button } from "react-native-elements";

export default ItemDetailCard = ({ item, size, handleClickItem }) => {
  return (
    <View style={styles[size + "Item"]}>
      <TouchableOpacity onPress={() => handleClickItem(item)}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Button
          style={styles.button}
          title="Add to trolley"
          buttonStyle={{ backgroundColor: "red" }}
          onPress={() => console.log(item.id)}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  smallItem: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    borderWidth: 0.2,
    borderColor: "#888888",
    aspectRatio: 0.6
    //backgroundColor: "red"
  },
  largeItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1.2
  },
  normalItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1.6
  },
  image: {
    flex: 8,
    margin: 10,
    alignSelf: "center",
    height: "100%",
    aspectRatio: 0.8
    //backgroundColor: "powderblue"
  },
  title: {
    flex: 3.5,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: "center",
    //textAlign: "center"
    //backgroundColor: 'skyblue'
  },
  price: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18
    //backgroundColor: "steelblue"
  },
  button: {
    marginBottom: 10,
    alignSelf: "center",
    width:"90%"
  }
});
