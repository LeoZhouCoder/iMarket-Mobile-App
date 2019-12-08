import { NavigationActions } from "react-navigation";

let _navigator;

export function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

export function navigate(routeName, params = null) {
  if (!_navigator || !routeName) return;
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}
