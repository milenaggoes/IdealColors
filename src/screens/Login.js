import { useState } from "react";
import Home from "./Home";
import {
  Modal,
  Text,
  TextInput,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Perfil from "./Perfil";


export default function Login({navigation}) {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [userName, setUserName] = useState("mi");
  const [password, setPassword] = useState("123");
  const [listaUsuarios, setListaUsuarios] = useState([]);

  return (
    <View style={{ flex: 1 }}visible={!usuarioLogado}>
   
        <StatusBar
          hidden={false}
          backgroundColor="#61AEBB"
          translucent={true}
        />

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
          style={{ flex: 8, paddingHorizontal: 30, display: "flex", gap: 60 }}
        >
          <Text style={{ fontSize: 16, textAlign: "center", marginTop: 69 }}>
            Faça Login ou Cadastre-se para continuar
          </Text>
          <TextInput
            placeholder="Nome"
            value={userName}
            onChangeText={setUserName}
            style={{
              backgroundColor: "#DCDCDC",
              borderRadius: 20,
              paddingVertical: 10,
              paddingLeft: 28,
            }}
          />
          <TextInput
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            style={{
              backgroundColor: "#DCDCDC",
              borderRadius: 20,
              paddingVertical: 10,
              paddingLeft: 28,
            }}
          />

          <TouchableOpacity
            style={{
              width: "100%",
              paddingVertical: 14,
              backgroundColor: "#61AEBB",
              borderRadius: 20,
              alignItems: "center",
            }}
            onPress={() => {
              let achou = false;
              for (let i = 0; i < listaUsuarios.length; i++) {
                const item = listaUsuarios[i];
                if (item.userName === userName && item.password === password) {
                  achou = true;
                  setUsuarioLogado(userName);
                  navigation.navigate('Home')
                }
              }
              if (!achou) {
                alert("Usuario ou senha incorretos");
              }
            }}
          >
            <Text style={{ fontSize: 16, color: "#fff", fontWeight: 500 }}>
              Logar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: "100%",
              paddingVertical: 14,
              backgroundColor: "#61AEBB",
              borderRadius: 20,
              alignItems: "center",
              marginBottom: 24,
            }}
            onPress={() => {
              const obj = { userName, password };
              const lista = [...listaUsuarios, obj];
              setListaUsuarios(lista);
              AsyncStorage.setItem("USUARIOS", JSON.stringify(lista))
                .then((info) => {
                  alert("Usuario registrado com sucesso " + info);
                })
                .catch((err) => {
                  alert("Erro: " + err);
                });
            }}
          >
            <Text style={{ fontSize: 16, color: "#fff", fontWeight: 500 }}>
              Cadastrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}