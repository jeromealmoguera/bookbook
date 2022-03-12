import React, { Component } from 'react';
import { ScrollView, StatusBar, View, Text, ImageBackground, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default class Ukoy extends Component {
render(){ 
  return(
       <View style={{ flex: 1, alignItems: 'center', margin:20, justifyContent: 'center' }}>
        <StatusBar barStyle='black' />
          <ImageBackground
           source={require("../assets/recipes/ukoy.jpg")}
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

          <Text style={{ fontSize: 50, color:"white" }}>Ukoy</Text>
        </View> */}
        
        <ScrollView style={{
          backgroundColor: 'white',
          width: 350,
          height: 400,
          position: 'absolute',
          bottom: 0}}>

          <Text style={{margin:20,fontSize: 24, color:"black" }}>Ukoy</Text>
          <Text style={{fontSize: 18, color:"black" }}>Ingredients</Text>

          <Text style={{fontSize: 15, color:"black" }}>3 cups silverfish</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 tsp salt</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/2 tsp ground pepper</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 small onion, chopped</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/2 cup celery, chopped</Text>
          <Text style={{fontSize: 15, color:"black" }}>2 eggs beaten</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 cup flour</Text>
          <Text style={{fontSize: 15, color:"black" }}>cooking oil for frying</Text>
          <Text style={{fontSize: 15, color:"black" }}>Dipping Sauce:</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/4 cup vinegar</Text>
          <Text style={{fontSize: 15, color:"black" }}>3 cloves garlic chopped</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/4 tsp salt</Text>
          <Text style={{marginBottom:20,fontSize: 15, color:"black" }}>1/8 tsp ground pepper</Text>

          <Text style={{fontSize: 18, color:"black" }}>Directions</Text>

          <Text style={{fontSize: 15, color:"black" }}>1. In a bowl, combine all ingredients together.</Text>
          <Text style={{fontSize: 15, color:"black" }}>2. Heat the oil in a frying pan.</Text>
          <Text style={{fontSize: 15, color:"black" }}>3. When hot, drop about 3 tbsp of the mixture into the hot oil, flatten with a spoon and fry over medium heat until crisp and both sides are brown.</Text>
          <Text style={{fontSize: 15, color:"black" }}>3. Remove from the pan and drain on paper towels.</Text>
          <Text style={{fontSize: 15, color:"black" }}>3. Serve with garlic vinegar sauce.Serve hot & crispy. Enjoy!</Text>
              
        </ScrollView>
        </View>
      )
}
}