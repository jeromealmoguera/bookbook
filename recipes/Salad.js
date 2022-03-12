import React, { Component } from 'react';
import { ScrollView, StatusBar, View, Text, ImageBackground, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default class Salad extends Component {
render(){ 
  return(
       <View style={{ flex: 1, alignItems: 'center', margin:20, justifyContent: 'center' }}>
        <StatusBar barStyle='black' />
          <ImageBackground
           source={require("../assets/recipes/salad.jpg")}
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

          <Text style={{ fontSize: 50, color:"white" }}>Buko Salad</Text>
        </View> */}
        
        <ScrollView style={{
          backgroundColor: 'white',
          width: 350,
          height: 400,
          position: 'absolute',
          bottom: 0}}>
          <Text style={{margin:20,fontSize: 24, color:"black" }}>Buko Salad</Text>
          <Text style={{fontSize: 18, color:"black" }}>Ingredients</Text>

          <Text style={{fontSize: 15, color:"black" }}>4 cups young coconut (buko), shredded</Text>
          <Text style={{fontSize: 15, color:"black" }}>6 ounces sugar palm fruit (kaong), drained</Text>
          <Text style={{fontSize: 15, color:"black" }}>12 ounces coconut gel (nata de coco), drained</Text>
          <Text style={{fontSize: 15, color:"black" }}>2 cans (15 ounces each) fruit cocktail, drained</Text>
          <Text style={{fontSize: 15, color:"black" }}>8 ounces pineapple chunks, drained</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 (14 ounce) can sweetened condensed milk</Text>
          <Text style={{marginBottom:20,fontSize: 15, color:"black" }}>7 ounces table cream</Text>

          <Text style={{fontSize: 18, color:"black" }}>Directions</Text>

          <Text style={{fontSize: 15, color:"black" }}>1. In a mixing bowl, combine young coconut, kaong, nata de coco, pineapple chunks, and fruit cocktail. Gently stir to distribute the ingredients.</Text>
          <Text style={{fontSize: 15, color:"black" }}>2. Add sweetened condensed milk and table cream. Mix until all the ingredients are properly distributed.</Text>
          <Text style={{fontSize: 15, color:"black" }}>3. Refrigerate for at least 4 hours or place in the freezer for 1 hour.</Text>
          <Text style={{fontSize: 15, color:"black" }}>4. Transfer to a serving bowl.</Text>
          <Text style={{fontSize: 15, color:"black" }}>5. Serve for dessert.</Text>
              
        </ScrollView>
        </View>
      )
}
}