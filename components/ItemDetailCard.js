import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

import Price from "./Price";

export default ItemDetailCard = ({ item, size, handleClickItem }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => handleClickItem(item)}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.title}>{item.title}</Text>
      <Price
        style={styles.price}
        presentPrice={10}
        previousPrice={14}
        volume={"kg"}
      />
      <Button
        style={styles.button}
        title="Add to trolley"
        buttonStyle={{ backgroundColor: "red" }}
        onPress={() => console.log(item.id)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'stretch',
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
    marginBottom: 10,

    borderWidth: 1,
    borderColor: "#000000"
    //backgroundColor: "powderblue"
  },
  title: {
    flex: 3,
    marginBottom: 10,

    borderWidth: 1,
    borderColor: "#000000"
    //textAlign: "center"
    //backgroundColor: 'skyblue'
  },
  price: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#000000"
    //backgroundColor: "steelblue"
  },
  button: {
    //marginTop: 10
  }
});
