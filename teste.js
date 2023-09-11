import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StatusBar,
  TextInput,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [listaUsuarios, setListaUsuarios] = useState([]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={false} backgroundColor="#61AEBB" translucent={true} />
      <View
        style={{
          flex: 3,
          backgroundColor: "#61AEBB",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30, color: "#fff", fontWeight: "600" }}>
          Ideal Colors
        </Text>
      </View>
      <View
        style={{
          flex: 8,
          paddingHorizontal: 30,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <View>
          <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 69 }}>
            Faça Login ou Cadastre-se para continuar
          </Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={{
              backgroundColor: "#EFEFEF",
              borderRadius: 20,
              paddingVertical: 10,
              paddingLeft: 28,
              marginBottom: 38,
            }}
          />
          <TextInput
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            style={{
              backgroundColor: "#EFEFEF",
              borderRadius: 20,
              paddingVertical: 10,
              paddingLeft: 28,
            }}
          />
        </View>
        <View>
          <Button title="Logar"
            style={{
              width: "100%",
              paddingVertical: 14,
              backgroundColor: "#61AEBB",
              borderRadius: 20,
              alignItems: "center",
              marginBottom: 24,
            }}
            onPress={() => {
              let achou = false;
              for (let i = 0; i < listaUsuarios.length; i++) {
                const item = listaUsuarios[i];
                if (item.email === email && item.senha === senha) {
                  setUsuarioLogado(email);
                  setListaReceitas([]);
                  AsyncStorage.getItem(email)
                    .then((info) => {
                      if (info) {
                        setListaReceitas(JSON.parse(info));
                      }
                    })
                    .catch((err) => {
                      alert("Erro ao carregar a lista de receitas");
                    });
                  achou = true;
                  break;
                }
              }
              if (!achou) {
                alert("Usuario ou senha estao incorretos");
              }
            }}
          />
          <Button title="Cadastrar"
            style={{
              width: "100%",
              paddingVertical: 14,
              backgroundColor: "#61AEBB",
              borderRadius: 20,
              alignItems: "center",
            }} onPress={()=>{
                console.log("Botao Registrar apertado")
                const obj = {email, senha} 
                const lista = [...listaUsuarios, obj]
                setListaUsuarios(lista)
                AsyncStorage.setItem("USUARIOS", JSON.stringify(lista))
                .then((info)=>{alert("Usuario registrado com sucesso " + info)})
                .catch((err)=>{alert("Erro: " + err)})
                
              }}/>
                    <Button title="Ler chaves" onPress={()=>{
              AsyncStorage.getAllKeys()
              .then((info)=>{alert("Chaves: " + info)})
            }}/>
        </View>
      </View>
    </View>
  );
}
