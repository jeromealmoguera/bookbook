import React, { Component } from 'react';
import { ScrollView, StatusBar, View, Text, ImageBackground, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default class Ampalaya extends Component {
render(){ 
  return(
       <View style={{ flex: 1, alignItems: 'center', margin:20, justifyContent: 'center' }}>
        <StatusBar barStyle='black' />
          <ImageBackground
            source={require("../assets/recipes/ampalaya.jpg")}
            style={{
              resizeMode: "cover",
              width: "100%",
              height: "32%",
              justifyContent: "center",
              alignItems: "center",
              opacity: 1,
              flex:1,
              justifyContent:'flex-end'
            }}>
          </ImageBackground>
        {/* <View style={{
          width: 220,
          height: 510,
          position: 'absolute',
          bottom: 0}}>

          <Text style={{ fontSize: 45, color:"white" }}>Ampalaya </Text>
        </View>
         */}
        <ScrollView style={{
          backgroundColor: 'white',
          width: 350,
          height: 400,
          position: 'absolute',
          bottom: 0}}>

          <Text style={{margin:20,fontSize: 24, color:"black" }}>Ginisang Ampalaya with egg</Text>
          <Text style={{fontSize: 18, color:"black" }}>Ingredients</Text>

          <Text style={{fontSize: 15, color:"black" }}>1 big size ampalaya, cut in half deseeded and sliced crosswise</Text>
          <Text style={{fontSize: 15, color:"black" }}>4 pcs. egg, beaten</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/4 head garlic, minced</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 medium size onion, chopped</Text>
          <Text style={{fontSize: 15, color:"black" }}>salt and pepper</Text>
          <Text style={{marginBottom:20,fontSize: 15, color:"black" }}>vegetable oil</Text>

          <Text style={{fontSize: 18, color:"black" }}>Directions</Text>

          <Text style={{fontSize: 15, color:"black" }}>1. In a sauce pan, saute garlic and onion.</Text>
          <Text style={{fontSize: 15, color:"black" }}>2. Add ampalaya stir cook for 3-5 minutes or until ampalaya is just cooked. Add egg and stir cook until egg starts to solidify, season with salt and pepper to taste, remove from pan. Serve with rice.</Text>
              
        </ScrollView>
        </View>
  );
}
}