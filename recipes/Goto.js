import React, { Component } from "react";
import {
  ScrollView,
  StatusBar,
  View,
  Text,
  ImageBackground,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class Goto extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          margin: 20,
          justifyContent: "center",
        }}
      >
        <StatusBar barStyle="black" />
        <ImageBackground
          source={require("../assets/recipes/goto.jpg")}
          style={{
            resizeMode: "cover",
            width: "100%",
            height: "32%",
            justifyContent: "center",
            alignItems: "center",
            opacity: 1,
            flex: 1,
            justifyContent: "flex-end",
          }}
        ></ImageBackground>
        {/* <View style={{
          width: 220,
          height: 550,
          position: 'absolute',
          bottom: 0}}>

          <Text style={{ fontSize: 50, color:"white" }}>Goto</Text>
        </View>
         */}
        <ScrollView
          style={{
            backgroundColor: "white",
            width: 350,
            height: 400,
            position: "absolute",
            bottom: 0,
          }}
        >
          <Text style={{ margin: 20, fontSize: 24, color: "black" }}>Goto</Text>
          <Text style={{ fontSize: 18, color: "black" }}>Ingredients</Text>

          <Text style={{ fontSize: 15, color: "black" }}>1 cup rice</Text>
          <Text style={{ fontSize: 15, color: "black" }}>
            200 grams boiled and tender ox tripe ( tuwalya ng baka)
          </Text>
          <Text style={{ fontSize: 15, color: "black" }}>
            1/4 cup ginger strips
          </Text>
          <Text style={{ fontSize: 15, color: "black" }}>1 onion</Text>
          <Text style={{ fontSize: 15, color: "black" }}>
            3 stalks spring onions
          </Text>
          <Text style={{ fontSize: 15, color: "black" }}>
            salt and pepper to taste
          </Text>
          <Text style={{ fontSize: 15, color: "black" }}>
            fish sauce( patis=optional)
          </Text>
          <Text style={{ fontSize: 15, color: "black" }}>
            1 litre of water or more
          </Text>
          <Text style={{ marginBottom: 20, fontSize: 15, color: "black" }}>
            1/4 cup toasted garlic
          </Text>

          <Text style={{ fontSize: 18, color: "black" }}>Directions</Text>

          <Text style={{ fontSize: 15, color: "black" }}>
            1. Saute the ginger and onion until brownish then add the pre-cooked
            ox tripe then simmer for few minutes.
          </Text>
          <Text style={{ fontSize: 15, color: "black" }}>
            2. Add the rice, fish sauce, salt and pepper then simmer for few
            minutes.
          </Text>
          <Text style={{ fontSize: 15, color: "black" }}>
            3. Add the water, then cover ( stirring constantly so that the rice
            will not stick at the bottom of the pot).
          </Text>
          <Text style={{ fontSize: 15, color: "black" }}>
            4. Continue simmering until the rice is so tender making the
            porridge thick in texture. Add more water if necessary.
          </Text>
          <Text style={{ fontSize: 15, color: "black" }}>
            5. Serve it hot with minced spring onion and toasted garlic.
          </Text>
        </ScrollView>
      </View>
    );
  }
}
