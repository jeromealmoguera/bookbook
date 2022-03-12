import React, { Component } from 'react';
import { ScrollView, StatusBar, View, Text, ImageBackground, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default class BukoPie extends Component {
render(){ 
  return(
       <View style={{ flex: 1, alignItems: 'center', margin:20, justifyContent: 'center' }}>
        <StatusBar barStyle='black' />
          <ImageBackground
          source={require("../assets/recipes/buko-pie.jpg")}
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

          <Text style={{ fontSize: 50, color:"white" }}>Buko Pie</Text>
        </View> */}
        
        <ScrollView style={{
          backgroundColor: 'white',
          width: 350,
          height: 400,
          position: 'absolute',
          bottom: 0}}>

<Text style={{margin:20,fontSize: 24, color:"black" }}>Buko Pie</Text>
          <Text style={{fontSize: 18, color:"black" }}>Ingredients</Text>

          <Text style={{fontSize: 15, color:"black" }}>2 cups all-purpose flour</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/3 cup butter</Text>
          <Text style={{fontSize: 15, color:"black" }}>1 teaspoon salt</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/3 cup vegetable shortening</Text>
          <Text style={{fontSize: 15, color:"black" }}>6 to 8 tablespoons cold water</Text>
          <Text style={{fontSize: 15, color:"black" }}>2 cups young coconut meat</Text>
          <Text style={{fontSize: 15, color:"black" }}>3/4 cup granulated white sugar</Text>
          <Text style={{fontSize: 15, color:"black" }}>1/2 cup cornstarch diluted in 1/2 cup young coconut water</Text>
          <Text style={{marginBottom:20,fontSize: 15, color:"black" }}>1/2 cup evaporated milk</Text>

          <Text style={{fontSize: 18, color:"black" }}>Directions</Text>

          <Text style={{fontSize: 15, color:"black" }}>1. Create the crust. Combine flour and salt then mix using a balloon whisk. Add butter and shortening then mix using a pastry mixer. Gradually add cold water a tablespoon at a time while mixing the ingredients. When everything is completely mixed, gather the mixture and divide into two equal parts. In a flat surface flatten each of the dough and roll using a rolling pin until wide enough to fit an eight or nine inch cake pan. Note: Sprinkle flour over the flat surface to prevent the dough from sticking or use a silicon mat. Arrange the first dough over the cake pan. This will be the base. Set the second flattened dough aside. This will be needed after arranging the filling in the cake pan.</Text>
          <Text style={{fontSize: 15, color:"black" }}>2. Make the filling by heating a saucepan and pour-in the milk. Let boil.</Text>
          <Text style={{fontSize: 15, color:"black" }}>3. Add the granulated white sugar and stir.</Text>
          <Text style={{fontSize: 15, color:"black" }}>4. Put-in the young coconut meat and cook for 3 minutes.</Text>
          <Text style={{fontSize: 15, color:"black" }}>5. Pour-in the cornstarch diluted in young coconut water and stir thoroughly while cooking. Cook until the texture thickens.</Text>
          <Text style={{fontSize: 15, color:"black" }}>6. Turn-off the heat and allow the mixture to cool down.</Text>
          <Text style={{fontSize: 15, color:"black" }}>7. Preheat oven to 375 degrees Fahrenheit.</Text>
          <Text style={{fontSize: 15, color:"black" }}>8. Arrange the cooked filling in the cake pan.</Text>
          <Text style={{fontSize: 15, color:"black" }}>9. Put the second crust over the filling and seal the sides.</Text>
          <Text style={{fontSize: 15, color:"black" }}>10. Create holes on the secondary crust using a fork. This will serve as exhaust vents that will prevent the crust from deforming.</Text>
          <Text style={{fontSize: 15, color:"black" }}>11. Bake for 45 to 55 minutes or until the color turns golden brown. Note: Baking time may vary; make sure to check the color of the crust to determine if baking is complete.</Text>
              
        </ScrollView>
        </View>
      )
}
}