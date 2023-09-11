import React from "react";
import {Text, View, StatusBar, TextInput, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Perfil({navigation}){

    return(
        <View  style={{flex:1}}>
            <StatusBar hidden = {false} backgroundColor = "#61AEBB" translucent = {true}/>
            
            <View style={{flex:1, paddingHorizontal: 30, display:"flex", justifyContent:"space-evenly", backgroundColor: '#fff'}}>
                <View>
                    <Text style={{fontSize: 18, textAlign: "center", marginBottom: 110 }}>Para atualizar insira seus novos dados nos campos</Text>
                    <TextInput placeholder="Nome" style={{backgroundColor: "#DCDCDC", borderRadius: 20, paddingVertical: 10, paddingLeft: 28, marginBottom:38}}/>
                    
                    <TextInput placeholder="Senha" style={{backgroundColor: "#DCDCDC", borderRadius: 20, paddingVertical: 10, paddingLeft: 28}}/>
                </View>
                <TouchableOpacity style={{width:"100%", paddingVertical: 14, backgroundColor: "#61AEBB", borderRadius: 20, alignItems: "center"}} onPress={()=> {
                        AsyncStorage.clear();
                        alert('Conta Atualizada')
                        navigation.navigate('Login')} 
                    }>
                    <Text style={{fontSize: 15, color: "#fff", fontWeight: "600"}}>Confirmar</Text>
                </TouchableOpacity>

                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} >
                    <MaterialCommunityIcons name="delete-circle" size={30} onPress={()=> {
                        AsyncStorage.clear();
                        alert('Conta excluída')
                        navigation.navigate('Login')} 
                    } />
                    <Text style={{marginLeft: 10}}>Excluir Conta</Text>
                </View>
                
            </View>
        </View>
    )
}