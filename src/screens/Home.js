import React from "react";
import 'react-native-gesture-handler'
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import logo from "./assets/logo.png";
import { MaterialIcons } from "@expo/vector-icons";


export default function App() {
  return (
    <View
      style={{flex: 1,paddingHorizontal: 10,paddingVertical: 20,display: "flex", justifyContent:"space-around", alignItems: "center"}}> 
      <Image source={logo} style={{ width: "90%", height: "38%" }} />
      <Text style={{fontSize: 27, fontWeight: "500",lineHeight: 34, textAlign: "center"}}>
        Saiba as cores{"\n"}que te favorecem
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "400", textAlign: "center", lineHeight: 18}}>
        Indentificaremos sua tonalidade de pele e mostraremos as cores que
        valorizam a sua beleza natural
      </Text>

    </View>
  )
}

