import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import * as Screens from "../Screens";

const Tab = createBottomTabNavigator();

export default class tabs extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Recipes") {
              iconName = focused ? "md-restaurant" : "restaurant-outline";
            } else if (route.name === "Categories") {
              iconName = focused ? "book" : "book-outline";
            } else if (route.name === "Favourites") {
              iconName = focused ? "heart" : "heart-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="Home" component={Screens.Home} />
        <Tab.Screen name="Recipes" component={Screens.Recipes} />
        <Tab.Screen name="Categories" component={Screens.Categories} />
        <Tab.Screen name="Favourites" component={Screens.Favourites} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
