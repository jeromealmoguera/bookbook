import React, { Component } from 'react';
import { ScrollView, StatusBar, View, Text, ImageBackground, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default class ChickenCurry extends Component {
render(){ 
  return(
       <View style={{ flex: 1, alignItems: 'center', margin:20, justifyContent: 'center' }}>
        <StatusBar barStyle='black' />
          <ImageBackground
           source={require("../assets/recipes/chicken-curry.jpg")}
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

          <Text style={{ fontSize: 50, color:"white" }}>Chicken Curry </Text>
        </View> */}
        
        <ScrollView style={{
          backgroundColor: 'white',
          width: 350,
          height: 400,
          position: 'absolute',
          bottom: 0}}>
          <Text style={{margin:20,fontSize: 24, color:"black" }}>Chicken Curry</Text>
          <Text style={{fontSize: 18, color:"black" }}>Ingredients</Text>

          <Text style={{fontSize: 15, color:"black" }}>1 kilo chicken</Text>
          <Text style={{fontSize: 15, color:"black" }}>2 medium sized potatoes, chopped</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 big carrot, sliced</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 tbsp garlic, minced</Text>
          <Text style={{fontSize: 15, color:"black" }}>3 stalks celery, cut into 2 inches lengthr</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 medium onion, chopped</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 small red bell pepper, cut into cubes</Text>
          <Text style={{fontSize: 15, color:"black" }}>2 tbsp fish sauce</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 cup coconut milk</Text>
          <Text style={{fontSize: 15, color:"black" }}>2 tbsp curry powder</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 thumb ginger, cut into strips</Text>
          <Text style={{marginBottom:20,fontSize: 15, color:"black" }}>1 cup water</Text>

          <Text style={{fontSize: 18, color:"black" }}>Directions</Text>

          <Text style={{fontSize: 15, color:"black" }}>1. Cut the chicken into pieces. Leave the chicken bone-in. If you prefer boneless chicken meat, then de-bone the chicken.</Text>
          <Text style={{fontSize: 15, color:"black" }}> 2. Heat up a deep pot and add the oil.</Text>
          <Text style={{fontSize: 15, color:"black" }}>3. Fry the potato and carrots for 2 minutes and set aside</Text>
          <Text style={{fontSize: 15, color:"black" }}>4. Saute Chicken together with garlic, onion and ginger.</Text>
          <Text style={{fontSize: 15, color:"black" }}>5. When garlic is light brown in color add fish sauce, and curry powder</Text>
          <Text style={{fontSize: 15, color:"black" }}>6. Stir well then add water then cover the pot and lower the heat to medium and simmer until the chicken is tender.</Text>
          <Text style={{fontSize: 15, color:"black" }}>7. Once the chicken is cooked add the red bell pepper, celery, carrot and potato then simmer for 5 minutes</Text>
          <Text style={{fontSize: 15, color:"black" }}>8. Add the coconut milk and mix well. Simmer for another 5 minutes.</Text>
          <Text style={{fontSize: 15, color:"black" }}>9. Serve hot with rice.</Text>
              
        </ScrollView>
        </View>
      )
}
}