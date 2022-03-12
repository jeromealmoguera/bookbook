import React, { Component } from 'react';
import { ScrollView, StatusBar, View, Text, ImageBackground, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default class Bibingka extends Component {
render(){ 
  return(
       <View style={{ flex: 1, alignItems: 'center', margin:20, justifyContent: 'center' }}>
        <StatusBar barStyle='black' />
          <ImageBackground
           source={require("../assets/recipes/bibingka.jpg")}
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

          <Text style={{ fontSize: 50, color:"white" }}>Bibingka</Text>
        </View> */}
        
        <ScrollView style={{
          backgroundColor: 'white',
          width: 350,
          height: 400,
          position: 'absolute',
          bottom: 0}}>

          <Text style={{marginLeft:20,marginBottom:20,fontSize: 24, color:"black" }}>Bibingka</Text>
          <Text style={{fontSize: 18, color:"black" }}>Ingredients</Text>

          <Text style={{fontSize: 15, color:"black" }}>2 cups all purpose flour</Text>
          <Text style={{fontSize: 15, color:"black" }}>2 tsp baking powder</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 tsp salt</Text>
          <Text style={{fontSize: 15, color:"black" }}>3 eggs</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 cup sugar</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 1/3 cup NESTLE Fresh Milk</Text>
          <Text style={{fontSize: 15, color:"black" }}>Â¼ cup butter</Text>
          <Text style={{fontSize: 15, color:"black" }}>Â¼ cup sugar</Text>
          <Text style={{fontSize: 15, color:"black" }}>Â1/2 cup grated cheese</Text>
          <Text style={{marginBottom:20,fontSize: 15, color:"black" }}>2 pcs salted eggs, sliced</Text>

          <Text style={{fontSize: 18, color:"black" }}>Directions</Text>

          <Text style={{fontSize: 15, color:"black" }}>1. Preheat oven to 350ÂºF. Grease and line bottom of 2 8-inch layer baking pan with banana leaves or wax paper. Set aside.</Text>
          <Text style={{fontSize: 15, color:"black" }}>2. Sift flour, baking powder and salt together. Set aside.</Text>
          <Text style={{fontSize: 15, color:"black" }}>3. Beat the eggs until light and creamy. Gradually add sugar, beating well after each addition.</Text>
          <Text style={{fontSize: 15, color:"black" }}>4. Add flour mixture alternately with NESTLE Fresh Milk into the egg. Beat to blend thoroughly.</Text>
          <Text style={{fontSize: 15, color:"black" }}>5. Pour mixture in lined pans.</Text>
          <Text style={{fontSize: 15, color:"black" }}>6. Bake for 10 minutes, then remove from the oven.</Text>
          <Text style={{fontSize: 15, color:"black" }}>7. Spread butter on top then sprinkle with sugar and grated cheese.</Text>
          <Text style={{fontSize: 15, color:"black" }}>8. Decorate with salted egg slices and bake for 10 to 15 minutes more.</Text>
              
        </ScrollView>
        </View>
      )
}
}