import React, { Component } from 'react';
import { ScrollView, StatusBar, View, Text, ImageBackground, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default class Turon extends Component {
render(){ 
  return(
       <View style={{ flex: 1, alignItems: 'center', margin:20, justifyContent: 'center' }}>
        <StatusBar barStyle='black' />
          <ImageBackground
           source={require("../assets/recipes/turon.jpg")}
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

          <Text style={{ fontSize: 50, color:"white" }}>Turon</Text>
        </View> */}
        
        <ScrollView style={{
          backgroundColor: 'white',
          width: 350,
          height: 400,
          position: 'absolute',
          bottom: 0}}>
          <Text style={{margin:20,fontSize: 24, color:"black" }}>Turon</Text>
          <Text style={{fontSize: 18, color:"black" }}>Ingredients</Text>

          <Text style={{fontSize: 15, color:"black" }}>6 pcs saba bananas (or plantains), cut in half (lenghtwise)</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 cup ripe Jackfruit</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 1/2 cup brown sugar</Text>
          <Text style={{fontSize: 15, color:"black" }}>12 pcs spring roll wrapper</Text>
          <Text style={{marginBottom:20,fontSize: 15, color:"black" }}>2 cups cooking oil</Text>

          <Text style={{fontSize: 18, color:"black" }}>Directions</Text>

          <Text style={{fontSize: 15, color:"black" }}>1. Roll the banana on the brown sugar plate and ensure that the banana is coated with enough sugar</Text>
          <Text style={{fontSize: 15, color:"black" }}>2. Place the banana with sugar coating in the spring roll wrapper and add some ripe jackfruit</Text>
          <Text style={{fontSize: 15, color:"black" }}>3. Fold and lock the spring roll wrapper, use water to seal the edge</Text>
          <Text style={{fontSize: 15, color:"black" }}>4. In a pan, heat the oil and put-in some brown sugar.Wait until the brown sugar floats</Text>
          <Text style={{fontSize: 15, color:"black" }}>5. Put-in the wrapped banana and fry until the wrapper turns golden brown and the extra sugar sticks on wrapper</Text>
          <Text style={{fontSize: 15, color:"black" }}>6. Serve hot during dessert or meryenda. Share and Enjoy!</Text>
              
        </ScrollView>
        </View>
      )
}
}