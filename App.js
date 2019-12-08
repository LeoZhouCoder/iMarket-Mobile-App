import React from "react";
import AppContainer from "./navigator/Navigator";
import { localize } from "./utils/Localization";
import { setTopLevelNavigator } from "./navigator/NavigationService";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    localize();
  }

  render() {
    return (
      <AppContainer ref={ref => setTopLevelNavigator(ref)} />
    );
  }
}
