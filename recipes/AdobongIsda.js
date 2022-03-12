import React, { Component } from 'react';
import { ScrollView, StatusBar, View, Text, ImageBackground, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default class AdobongIsda extends Component {
render(){ 
  return(
       <View style={{ flex: 1, alignItems: 'center', margin:20, justifyContent: 'center' }}>
        <StatusBar barStyle='black' />
          <ImageBackground
          source={require("../assets/recipes/adobong-isda.jpg")}
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

          <Text style={{ fontSize: 50, color:"white" }}>Adobong Isda</Text>
        </View> */}
        
        <ScrollView style={{
          backgroundColor: 'white',
          width: 350,
          height: 400,
          position: 'absolute',
          bottom: 0}}>

          <Text style={{margin:20,fontSize: 24, color:"black" }}>Adobong Isda</Text>
          <Text style={{fontSize: 18, color:"black" }}>Ingredients</Text>

          <Text style={{fontSize: 15, color:"black" }}>1/2 kilo Sapsap</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 kilo Tilapia ( Cleaned and sliced)</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/2 cup soy sauce</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/2 cup vinegar</Text>
          <Text style={{fontSize: 15, color:"black" }}>3 cloves garlic</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 tablespoon ginger strips</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 small onion</Text>
          <Text style={{fontSize: 15, color:"black" }}>3 pieces Finger chili (siling haba)</Text>
          <Text style={{marginBottom:20,fontSize: 15, color:"black" }}>salt and pepper to taste</Text>

          <Text style={{fontSize: 18, color:"black" }}>Directions</Text>

          <Text style={{fontSize: 15, color:"black" }}>1. Saute the ginger, garlic and onion then put the vinegar and soy sauce and simmer for a minute.</Text>
          <Text style={{fontSize: 15, color:"black" }}>2. Add the fish, cover then simmer until done over medium heat.</Text>
          <Text style={{fontSize: 15, color:"black" }}>3. Add the chili, salt and pepper to taste then simmer for a minute and turn off the heat. Serve</Text>

              
        </ScrollView>
        </View>
      )
}
}