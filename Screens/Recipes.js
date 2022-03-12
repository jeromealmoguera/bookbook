import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  Button,
  FlatList,
} from "react-native";

import * as Recipe from "../recipes";
import Foods from "../const/Foods";
import { SafeAreaView } from "react-native-safe-area-context";

export default class Recipes extends Component {
  render() {
    function renderRecipes() {
      return (
        <View>
          {/* TITLE */}
          <Text style={styles.title}>RECIPES</Text>

          <FlatList data={Foods} />
        </View>
      );
    }

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            margin: 20,
          }}
        >
          {renderRecipes()}

          <FlatList
            showsHorizontalScrollIndicator={false}
            style={styles.mainList}
            data={Foods}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => {}}>
                  <View style={styles.itemContainer}>
                    <View style={styles.itemList}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.description}>{item.description}</Text>
                      <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Bantayog",
    fontSize: 40,
    color: "black",
    fontWeight: "600",

    position: "absolute",
  },
  itemContainer: {},
  itemList: {
    margin: 5,
    padding: 5,
    borderRadius: 10,
    height: 150,

    backgroundColor: "#F29191",
  },
  mainList: {
    top: 50,
  },
  name: {
    width: "40%",
    fontWeight: "700",
    fontSize: 20,
  },
  description: {
    width: "40%",
    fontSize: 12,
  },
  image: {
    width: "60%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
