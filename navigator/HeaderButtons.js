import * as React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons';

const MaterialHeaderButton = props => (
  <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color="gray" />
);

export const MaterialHeaderButtons = props => {
  return (
    <HeaderButtons
      HeaderButtonComponent={MaterialHeaderButton}
      OverflowIcon={<Ionicons name="md-more" size={23} color="gray" />}
      {...props}
    />
  );
};
export { Item } from 'react-navigation-header-buttons';