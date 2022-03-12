import React, { Component } from 'react';
import { ScrollView, StatusBar, View, Text, ImageBackground, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default class GinataangAlimasag extends Component {
render(){ 
  return(
       <View style={{ flex: 1, alignItems: 'center', margin:20, justifyContent: 'center' }}>
        <StatusBar barStyle='black' />
          <ImageBackground
           source={require("../assets/recipes/ginataang-alimasag.jpg")}
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

          <Text style={{ fontSize: 30, color:"white" }}>Ginataang Alimasag</Text>
        </View> */}
        
        <ScrollView style={{
          backgroundColor: 'white',
          width: 350,
          height: 400,
          position: 'absolute',
          bottom: 0}}>
          <Text style={{margin:20,fontSize: 24, color:"black" }}>Ginataang Alimasag</Text>
          <Text style={{fontSize: 18, color:"black" }}>Ingredients</Text>

          <Text style={{fontSize: 15, color:"black" }}>3 lbs blue crabs (Alimasag)</Text>
          <Text style={{fontSize: 15, color:"black" }}>2 tbsp shrimp paste</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 tbsp fish sauce</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 tsp garlic, minced</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 medium-sized onion, minced</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 knob ginger, cut into thin strips</Text>
          <Text style={{fontSize: 15, color:"black" }}>3 tbsp cooking oil</Text>
          <Text style={{fontSize: 15, color:"black" }}>4 cups coconut milk1/2 tsp ground black pepper</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 bunch fresh spinach</Text>
          <Text style={{marginBottom:20,fontSize: 15, color:"black" }}>6 pieces Thai chili</Text>

          <Text style={{fontSize: 18, color:"black" }}>Directions</Text>

          <Text style={{fontSize: 15, color:"black" }}>1. In a large pot, saute the garlic, onion, and ginger</Text>
          <Text style={{fontSize: 15, color:"black" }}>2. Add the ground black pepper and coconut milk then bring to a boil</Text>
          <Text style={{fontSize: 15, color:"black" }}>3. Put-in the shrimp paste and fish sauce and cook until the coconut milk�s texture is thick and natural oil comes out of it (approximately 20 ++ minutes)</Text>
          <Text style={{fontSize: 15, color:"black" }}>4. Add the Thai chili and simmer for 5 minutes</Text>
          <Text style={{fontSize: 15, color:"black" }}>5. Put the crabs in the pot and mix until evenly covered with coconut milk. Simmer for 5 to 20 minutes.
(Note: If crabs were steamed prior to cooking, 5 to 8 minutes is enough)</Text>
          <Text style={{fontSize: 15, color:"black" }}>6. Add the spinach and simmer for 5 minutes</Text>
          <Text style={{fontSize: 15, color:"black" }}>7. Serve hot.</Text>

              
        </ScrollView>
        </View>
      )
}
}