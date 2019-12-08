import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { navigate } from "../navigator/NavigationService";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default class BrowseScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the BrowseScreen.</Text>
        <Button
          title="ItemList"
          onPress={() => navigate("ItemList")}
        />
      </View>
    );
  }
}
