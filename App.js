import "react-native-gesture-handler";

import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./navigation/tabs";
// import * as Recipe from "./recipes";

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    );
  }
}
