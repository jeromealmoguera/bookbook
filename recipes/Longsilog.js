import React, { Component } from 'react';
import { ScrollView, StatusBar, View, Text, ImageBackground, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default class Longsilog extends Component {
render(){ 
  return(
       <View style={{ flex: 1, alignItems: 'center', margin:20, justifyContent: 'center' }}>
        <StatusBar barStyle='black' />
          <ImageBackground
          source={require("../assets/recipes/longsilog.jpg")}
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

          <Text style={{ fontSize: 50, color:"white" }}>Longsilog</Text>
        </View> */}
        
        <ScrollView style={{
          backgroundColor: 'white',
          width: 350,
          height: 400,
          position: 'absolute',
          bottom: 0}}>

          <Text style={{margin:20,fontSize: 24, color:"black" }}>Longsilog</Text>
          <Text style={{fontSize: 18, color:"black" }}>Ingredients</Text>

          <Text style={{fontSize: 15, color:"black" }}>4 Cups of left over rice from the previous night</Text>
          <Text style={{fontSize: 15, color:"black" }}>5 Links of longanisa sausage</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 Cup of water for cooking longanisa</Text>
          <Text style={{fontSize: 15, color:"black" }}>3 Eggs</Text>
          <Text style={{fontSize: 15, color:"black" }}>2 Cloves of garlic</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/2 Tbs. Salt</Text>
          <Text style={{fontSize: 15, color:"black" }}>¼ Tbs. Ground black pepper</Text>
          <Text style={{fontSize: 15, color:"black" }}>¼ Tbs. MSG</Text>
          <Text style={{marginBottom:20,fontSize: 15, color:"black" }}>Oil for frying</Text>

          <Text style={{fontSize: 18, color:"black" }}>Directions</Text>

          <Text style={{fontSize: 15, color:"black" }}>1. Longanisa Sausage in a frying pan add water and oil and bring to a boil. Let the water totally evaporate and wait for the oil to extract from the sausage links. Let it fry for about 5 minutes rolling the sausage links constantly to cook evenly.</Text>
          <Text style={{fontSize: 15, color:"black" }}>2. The Eggs: Beat two eggs as you would normally make an omelet. Season them with salt, cook in a frying pan, remove, and set aside. Next get a third egg and cook it sunny side up. Remove and set aside.</Text>
          <Text style={{fontSize: 15, color:"black" }}>3. The Garlic-Fried Rice: Break up the rice smoothly and set aside. Heat frying pan, add oil, and saute garlic until golden brown. Next add rice and stir for 1 minute. Then add salt & pepper and msg to taste and let it cook for an additional 5 minutes. Stir the rice constantly to avoid scorching. Add more salt if needed.</Text>

              
        </ScrollView>
        </View>
      )
}
}