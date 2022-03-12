import React, { Component } from 'react';
import { ScrollView, StatusBar, View, Text, ImageBackground, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default class Pikbet extends Component {
render(){ 
  return(
       <View style={{ flex: 1, alignItems: 'center', margin:20, justifyContent: 'center' }}>
        <StatusBar barStyle='black' />
          <ImageBackground
           source={require("../assets/recipes/pinakbet.jpg")}
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
          height: 550,
          position: 'absolute',
          bottom: 0}}>

          <Text style={{ fontSize: 50, color:"white" }}>Pinakbet</Text>
        </View> */}
        
        <ScrollView style={{
          backgroundColor: 'white',
          width: 350,
          height: 400,
          position: 'absolute',
          bottom: 0}}>

          <Text style={{margin:20,fontSize: 24, color:"black" }}>Pinakbet</Text>
          <Text style={{fontSize: 18, color:"black" }}>Ingredients</Text>

          <Text style={{fontSize: 15, color:"black" }}>1/2 pound pork (liempo with skin & fat)</Text>
          <Text style={{fontSize: 15, color:"black" }}>4 Cloves garlic</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 Onion medium size</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/4 cup Shrimp Paste (Bagoong Alamang)</Text>
          <Text style={{fontSize: 15, color:"black" }}>4 Eggplants (Long or round)</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 handful of Okra</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/2 cup tomatoes</Text>
          <Text style={{fontSize: 15, color:"black" }}>2 pieces ampalaya (Bitter Melon)</Text>
          <Text style={{fontSize: 15, color:"black" }}>Corn Oil</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 Pork Cube (Maggi or Knorr)</Text>
          <Text style={{marginBottom:20,fontSize: 15, color:"black" }}>Salt</Text>

          <Text style={{fontSize: 18, color:"black" }}>Directions</Text>

          <Text style={{fontSize: 15, color:"black" }}>1. Get a casserole or a wok saute' garlic, onion, pork sliced in strips, tomatoes and shrimp paste.</Text>
          <Text style={{fontSize: 15, color:"black" }}>2. Add the diagonally sliced eggplants, bitter melon and Okra.</Text>
          <Text style={{fontSize: 15, color:"black" }}>3. Add Pork cube and salt to taste.</Text>
          <Text style={{fontSize: 15, color:"black" }}>4. Simmer it until the pork and vegies are cooked</Text>

              
        </ScrollView>
        </View>
      )
}
}