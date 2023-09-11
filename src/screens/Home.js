import React from "react";
import { Text, View, Image, TouchableOpacity, StatusBar } from "react-native";
import logo from "../../assets/logo.png";
import {MaterialCommunityIcons} from '@expo/vector-icons'


export default function Home({navigation}) {
  return (
      <View style={{flex: 1,paddingHorizontal: 30,paddingVertical: 20,display: "flex", justifyContent:"space-around", alignItems: "center", backgroundColor: "#fff"}}>
      <StatusBar hidden={false} backgroundColor="#fff" translucent={true} />
        
      <View style={{alignSelf: "flex-end"}} >
        <MaterialCommunityIcons name="account-edit" size={30} onPress={()=> navigation.navigate('Perfil')}/>
      </View>
      <Image source={logo} style={{ width: "90%", height: "40%" }} />

      <Text style={{fontSize: 27, fontWeight: "500",lineHeight: 34, textAlign: "center"}}>
        Saiba as cores{"\n"}que te favorecem
      </Text>

      <Text style={{ fontSize: 16, fontWeight: "400", textAlign: "center", lineHeight: 18}}>
        Indentificaremos sua tonalidade de pele e mostraremos as cores que
        valorizam a sua beleza natural
      </Text>

      <TouchableOpacity style={{width: "100%", paddingVertical: 14, backgroundColor: "#61AEBB",borderRadius:20,alignItems: "center",marginBottom: 24,}} onPress={()=>{alert("Reconhecimento facial de coloração em produção")}}>
              <Text style={{fontSize:16, color: "#fff", fontWeight: 500}}>Começar</Text>
      </TouchableOpacity>

    
    </View>
  )
}

