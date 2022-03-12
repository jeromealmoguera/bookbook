import React, { Component } from 'react';
import { ScrollView, StatusBar, View, Text, ImageBackground, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default class BananaQue extends Component {
render(){ 
  return(
       <View style={{ flex: 1, alignItems: 'center', margin:20, justifyContent: 'center' }}>
        <StatusBar barStyle='black' />
          <ImageBackground
           source={require("../assets/recipes/banana-que.jpg")}
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

          <Text style={{ fontSize: 50, color:"white" }}>Banana Que</Text>
        </View>
         */}
        <ScrollView style={{
          backgroundColor: 'white',
          width: 350,
          height: 400,
          position: 'absolute',
          bottom: 0}}>
          <Text style={{margin:20,fontSize: 24, color:"black" }}>Banana Que</Text>
          <Text style={{fontSize: 18, color:"black" }}>Ingredients</Text>

          <Text style={{fontSize: 15, color:"black" }}>16 pcs. semi ripe or ripe Saba banana variety</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/4 cup brown sugar</Text>
          <Text style={{marginBottom:20,fontSize: 15, color:"black" }}>2 cups Vegetable cooking oil</Text>

          <Text style={{fontSize: 18, color:"black" }}>Directions</Text>

          <Text style={{fontSize: 15, color:"black" }}>1. In a large wok at high flame heat cooking oil, when it is smoking hot, drop the bananas and fry for about 2 minutes or until they start to slightly brown.</Text>
          <Text style={{fontSize: 15, color:"black" }}>2. Sprinkle the brown sugar and let it stand without stirring. When the sugar starts to caramelize, start stirring the bananas to have it coated with caramelized sugar.</Text>
          <Text style={{fontSize: 15, color:"black" }}>3. Continue frying, stirring several times to have the bananas fully coated with caramelized sugar. Turn the heat off once the bananas are cook through, do not overcook.</Text>
          <Text style={{fontSize: 15, color:"black" }}>4. Drain in Fry Skimmer Strainer or colander or deep bowl with paper towel to remove excess oil.</Text>
          <Text style={{fontSize: 15, color:"black" }}>5. Skewer two bananas in a bamboo stick while they slightly cool down. Do the same for the rest of the bananas.Serve</Text>
              
        </ScrollView>
        </View>
      )
}
}