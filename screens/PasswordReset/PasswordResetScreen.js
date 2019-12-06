import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default class PasswordResetScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the PasswordResetScreen.</Text>
      </View>
    );
  }
}
