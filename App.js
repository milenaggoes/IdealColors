import { useState } from "react";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import {Modal, Text, TextInput, View, StatusBar, TouchableOpacity, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Perfil from "./src/screens/Perfil";


const Stack = createStackNavigator();

export default function App(){
    return(

        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Perfil" component={Perfil} options={{ headerTitle: '', headerStyle:{backgroundColor: '#61AEBB'}}}/>
          
        </Stack.Navigator>
        </NavigationContainer>
     
    )
}