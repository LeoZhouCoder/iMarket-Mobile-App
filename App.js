import React from "react";
import AppContainer from "./navigator/Navigator";
import { setTopLevelNavigator } from "./navigator/NavigationService";

export default class App extends React.Component {
  render() {
    return (
      <AppContainer ref={ref => setTopLevelNavigator(ref)} />
    );
  }
}
