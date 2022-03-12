import React, { Component } from 'react';
import { ScrollView, StatusBar, View, Text, ImageBackground, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default class TinolangTahong extends Component {
render(){ 
  return(
       <View style={{ flex: 1, alignItems: 'center', margin:20, justifyContent: 'center' }}>
        <StatusBar barStyle='black' />
          <ImageBackground
          source={require("../assets/recipes/tinolang-tahong.jpg")}
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

          <Text style={{ fontSize: 50, color:"white" }}>Tinolang Tanong</Text>
        </View> */}
        
        <ScrollView style={{
          backgroundColor: 'white',
          width: 350,
          height: 400,
          position: 'absolute',
          bottom: 0}}>

<Text style={{margin:20,fontSize: 24, color:"black" }}>Tinolang Tahong</Text>
          <Text style={{fontSize: 18, color:"black" }}>Ingredients</Text>

          <Text style={{fontSize: 15, color:"black" }}>1 lb mussels (tahong), cleaned</Text>
          <Text style={{fontSize: 15, color:"black" }}>2 cups spinach</Text>
          <Text style={{fontSize: 15, color:"black" }}>2 tablespoons ginger, julienned</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 medium yellow onion, sliced</Text>
          <Text style={{fontSize: 15, color:"black" }}>5 cloves garlic, pounded</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 1/2 teaspoons salt</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/2 teaspoon ground black pepper</Text>
          <Text style={{fontSize: 15, color:"black" }}>3 cups water</Text>
          <Text style={{marginBottom:20,fontSize: 15, color:"black" }}>2 tablespoons cooking oil</Text>

          <Text style={{fontSize: 18, color:"black" }}>Directions</Text>

          <Text style={{fontSize: 15, color:"black" }}>1. Heat a cooking pot and pour-in cooking oil.</Text>
          <Text style={{fontSize: 15, color:"black" }}>2. Saute garlic and onion.</Text>
          <Text style={{fontSize: 15, color:"black" }}>3. Add ginger and mussels, and then cook for a minute.</Text>
          <Text style={{fontSize: 15, color:"black" }}>4. Pour-in water. let boil.</Text>
          <Text style={{fontSize: 15, color:"black" }}>5. Add salt and pepper. Stir and cook for 8 to 10 minutes.</Text>
          <Text style={{fontSize: 15, color:"black" }}>6. Put-in the spinach. Turn the heat off and cover the pot.</Text>
          <Text style={{fontSize: 15, color:"black" }}>7. Allow the residual heat to cook the spinach.</Text>
          <Text style={{fontSize: 15, color:"black" }}>8. Transfer to a serving plate.</Text>

              
        </ScrollView>
        </View>
      )
}
}