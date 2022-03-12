import React, { Component } from 'react';
import { ScrollView, StatusBar, View, Text, ImageBackground, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default class AdobongSitaw extends Component {
render(){ 
  return(
       <View style={{ flex: 1, alignItems: 'center', margin:20, justifyContent: 'center' }}>
        <StatusBar barStyle='black' />
          <ImageBackground
           source={require("../assets/recipes/adobong-sitaw.jpg")}
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

          <Text style={{ fontSize: 45, color:"white" }}>Adobong Sitaw</Text>
        </View> */}
        
        <ScrollView style={{
          backgroundColor: 'white',
          width: 350,
          height: 400,
          position: 'absolute',
          bottom: 0}}>
          <Text style={{margin:20,fontSize: 24, color:"black" }}>Adobong Sitaw</Text>
          <Text style={{fontSize: 18, color:"black" }}>Ingredients</Text>

          <Text style={{fontSize: 15, color:"black" }}>1 lb string beans (sitaw), cut in 2 inch length</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/4 lb pork belly, thinly sliced (optional)</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/2 cup soy sauce</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/3 cup vinegar</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 medium-sized onion, thinly sliced lengthwise</Text>
          <Text style={{fontSize: 15, color:"black" }}>4 to 6 cloves garlic, crushed</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/2 teaspoon ground black pepper</Text>
          <Text style={{marginBottom:20,fontSize: 15, color:"black" }}>1 cup water</Text>
          
          <Text style={{fontSize: 18, color:"black" }}>Directions</Text>

          <Text style={{fontSize: 15, color:"black" }}>1. Heat a frying pan or wok then sear the pork.</Text>
          <Text style={{fontSize: 15, color:"black" }}>2. When oil and juice comes out of the pork, add garlic and onions then cook for 2 minutes.</Text>
          <Text style={{fontSize: 15, color:"black" }}>3. Pour-in the soy sauce, vinegar, and water then bring to a boil.</Text>
          <Text style={{fontSize: 15, color:"black" }}>4. Shake-in the ground black pepper and stir.</Text>
          <Text style={{fontSize: 15, color:"black" }}>5. Cover and simmer for 15 minutes or until the pork is tender.</Text>
          <Text style={{fontSize: 15, color:"black" }}>6. Add the string beans and cook for 3 to 5 minutes.</Text>
          <Text style={{fontSize: 15, color:"black" }}>7. Turn off the heat and transfer to a serving bowl.</Text>
          <Text style={{fontSize: 15, color:"black" }}>8. Serve hot with steamed rice.</Text>

              
        </ScrollView>
        </View>
      )
}
}