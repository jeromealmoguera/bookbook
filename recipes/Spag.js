import React, { Component } from 'react';
import { ScrollView, StatusBar, View, Text, ImageBackground, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default class Spag extends Component {
render(){ 
  return(
       <View style={{ flex: 1, alignItems: 'center', margin:20, justifyContent: 'center' }}>
        <StatusBar barStyle='black' />
          <ImageBackground
           source={require("../assets/recipes/spag.jpg")}
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

          <Text style={{ fontSize: 50, color:"white" }}>Spaghetti</Text>
        </View> */}
        
        <ScrollView style={{
          backgroundColor: 'white',
          width: 350,
          height: 400,
          position: 'absolute',
          bottom: 0}}>

          <Text style={{margin:20,fontSize: 24, color:"black" }}>Spaghetti</Text>
          <Text style={{fontSize: 18, color:"black" }}>Ingredients</Text>

          <Text style={{fontSize: 15, color:"black" }}>1 kg. spaghetti noodles</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/2 kg. ground beef</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/2 kg. ground pork</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/4 kg. hotdogs, diagonally sliced</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 kg. tomato sauce</Text>
          <Text style={{fontSize: 15, color:"black" }}>3 pieces laurel leaves (bay leaves)</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/4 cup brown or white sugar</Text>
          <Text style={{fontSize: 15, color:"black" }}>2 green bell peppers, diced</Text>
          <Text style={{fontSize: 15, color:"black" }}>2 onions, chopped</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 head garlic, minced</Text>
          <Text style={{fontSize: 15, color:"black" }}>3 tablespoons of cooking oil</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 cup of water</Text>
          <Text style={{fontSize: 15, color:"black" }}>Salt and pepper to taste</Text>
          <Text style={{marginBottom:20,fontSize: 15, color:"black" }}>1/2 cup grated cheese</Text>

          <Text style={{fontSize: 18, color:"black" }}>Directions</Text>

          <Text style={{fontSize: 15, color:"black" }}>1. Cook spaghetti noodles according to package instructions.</Text>
          <Text style={{fontSize: 15, color:"black" }}>2. In a sauce pan or wok, sautÃ© garlic and onions in cooking oil.</Text>
          <Text style={{fontSize: 15, color:"black" }}>3. Add ground beef, ground pork, laurel leaves, bell pepper and a cup of water. Bring to a boil and let simmer for 10 minutes.</Text>
          <Text style={{fontSize: 15, color:"black" }}>4. Add tomato sauce, salt and pepper to taste then let simmer for another 10 minutes</Text>
          <Text style={{fontSize: 15, color:"black" }}>5. Add brown sugar and hotdogs. Continue to simmer for an additional 5 minutes.</Text>
          <Text style={{fontSize: 15, color:"black" }}>6. Serve with the cooked spaghetti noodles and grated cheese on top.</Text>
              
        </ScrollView>
        </View>
      )
}
}