
import React, { Component } from 'react';
import { ScrollView, StatusBar, View, Text, ImageBackground, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default class Sinangag extends Component {
render(){ 
  return(
       <View style={{ flex: 1, alignItems: 'center', margin:20, justifyContent: 'center' }}>
        <StatusBar barStyle='black' />
          <ImageBackground
           source={require("../assets/recipes/sinangag.jpg")}
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

          <Text style={{ fontSize: 50, color:"white" }}>Sinangag</Text>
        </View> */}
        
        <ScrollView style={{
          backgroundColor: 'white',
          width: 350,
          height: 400,
          position: 'absolute',
          bottom: 0}}>       
          <Text style={{margin:20,fontSize: 24, color:"black" }}>Sinangag</Text>
          <Text style={{fontSize: 18, color:"black" }}>Ingredients</Text>

          <Text style={{fontSize: 15, color:"black" }}>4 cups of leftover rice; cold and well preserved</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 small Carrot chopped</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/4 cup Cabbage chopped</Text>
          <Text style={{fontSize: 15, color:"black" }}>6 cloves garlic; minced</Text>
          <Text style={{fontSize: 15, color:"black" }}>Olive oil or Cooking Oil</Text>
          <Text style={{fontSize: 15, color:"black" }}>Salt and pepper to taste</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 tablespoon stems of scallions; chopped
          Optional:</Text>
          <Text style={{fontSize: 15, color:"black" }}>2 well beaten eggs; fried and sliced in pieces</Text>
          <Text style={{marginBottom:20,fontSize: 15, color:"black" }}>1/4 cup leftover Luncheon Meat or Ham</Text>

          <Text style={{fontSize: 18, color:"black" }}>Directions</Text>

          <Text style={{fontSize: 15, color:"black" }}>1. Saute’ garlic and when browned, add the Luncheon Meat or Ham, and salt to taste.</Text>
          <Text style={{fontSize: 15, color:"black" }}>2. Turn to high heat, then add rice and thoroughly mix well for 5 minutes with the other ingredients.</Text>
          <Text style={{fontSize: 15, color:"black" }}>3. Add the eggs (optional) and scallions. Continue mixing until all ingredients are well blended.</Text>
          <Text style={{fontSize: 15, color:"black" }}>4. Salt and pepper in preference to your taste.</Text>
          <Text style={{fontSize: 15, color:"black" }}>5. Remove from fire and serve.</Text>
              
        </ScrollView>
        </View>
      )
}
}