import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

class RegisterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the RegisterScreen.</Text>
      </View>
    );
  }
}
