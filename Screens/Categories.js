import React, { Component } from "react";
import { ScrollView, TouchableOpacity, View, Text, Image } from "react-native";

export default class Categories extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this.props.navigation.navigate("Breakfast")}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              backgroundColor: "#faebd7",
            }}
          >
            <Image
              style={{ margin: 10, width: 100, height: 100 }}
              source={require("../assets/recipes/sinangag.jpg")}
            />
            <Text
              style={{
                marginLeft: 120,
                width: 150,
                height: 80,
                position: "absolute",
                bottom: 0,
                fontSize: 20,
                color: "black",
              }}
            >
              Breakfast
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this.props.navigation.navigate("Snacks")}
        >
          <View
            style={{
              flex: 1,
              marginTop: 10,
              flexDirection: "row",
              backgroundColor: "#faebd7",
            }}
          >
            <Image
              style={{ margin: 10, width: 100, height: 100 }}
              source={require("../assets/recipes/banana-que.jpg")}
            />
            <Text
              style={{
                marginLeft: 120,
                width: 150,
                height: 80,
                position: "absolute",
                bottom: 0,
                fontSize: 20,
                color: "black",
              }}
            >
              Snacks
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this.props.navigation.navigate("Desserts")}
        >
          <View
            style={{
              flex: 1,
              marginTop: 10,
              flexDirection: "row",
              backgroundColor: "#faebd7",
            }}
          >
            <Image
              style={{ margin: 10, width: 100, height: 100 }}
              source={require("../assets/recipes/salad.jpg")}
            />
            <Text
              style={{
                marginLeft: 120,
                width: 150,
                height: 80,
                position: "absolute",
                bottom: 0,
                fontSize: 20,
                color: "black",
              }}
            >
              Desserts
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this.props.navigation.navigate("Lunch")}
        >
          <View
            style={{
              flex: 1,
              marginTop: 10,
              flexDirection: "row",
              backgroundColor: "#faebd7",
            }}
          >
            <Image
              style={{ margin: 10, width: 100, height: 100 }}
              source={require("../assets/recipes/tinola-manok.jpg")}
            />
            <Text
              style={{
                marginLeft: 120,
                width: 150,
                height: 80,
                position: "absolute",
                bottom: 0,
                fontSize: 20,
                color: "black",
              }}
            >
              Lunch
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => this.props.navigation.navigate("Dinner")}
        >
          <View
            style={{
              flex: 1,
              marginTop: 10,
              flexDirection: "row",
              backgroundColor: "#faebd7",
            }}
          >
            <Image
              style={{ margin: 10, width: 100, height: 100 }}
              source={require("../assets/recipes/ampalaya.jpg")}
            />
            <Text
              style={{
                marginLeft: 120,
                width: 150,
                height: 80,
                position: "absolute",
                bottom: 0,
                fontSize: 20,
                color: "black",
              }}
            >
              Dinner
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
