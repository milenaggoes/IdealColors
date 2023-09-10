import React from "react";
import {Text, View, StatusBar, TextInput, TouchableOpacity} from "react-native";

export default function App (){
    return(
        <View  style={{flex:1}}>
            <StatusBar hidden = {false} backgroundColor = "#61AEBB" translucent = {true}/>
            <View style={{flex:3, backgroundColor:"#61AEBB", justifyContent:"center", alignItems:"center"}}>
                <Text style={{fontSize: 30, color: "#fff", fontWeight: "600"}}>Atualizar Dados</Text>
            </View>
            <View style={{flex:8, paddingHorizontal: 30, display:"flex", justifyContent:"space-evenly"}}>
                <View>
                    <TextInput placeholder="Nome" style={{backgroundColor: "#EFEFEF", borderRadius: 20, paddingVertical: 10, paddingLeft: 28, marginBottom:38}}/>
                    <TextInput placeholder="Email" style={{backgroundColor: "#EFEFEF", borderRadius: 20, paddingVertical: 10, paddingLeft: 28, marginBottom:38}}/>
                    <TextInput placeholder="Senha" style={{backgroundColor: "#EFEFEF", borderRadius: 20, paddingVertical: 10, paddingLeft: 28}}/>
                </View>
                <TouchableOpacity style={{width:"100%", paddingVertical: 14, backgroundColor: "#61AEBB",borderRadius: 20, alignItems: "center"}}>
                    <Text style={{fontSize: 15, color: "#fff", fontWeight: "600"}}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}