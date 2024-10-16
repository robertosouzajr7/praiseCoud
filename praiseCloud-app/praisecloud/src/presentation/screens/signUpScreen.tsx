import React = require("react");
import { useState } from "react";

import { View, TextInput, Button, StyleSheet, Text, Alert } from "react-native";

import { AuthCase } from "../../domain/usecases/AuthCases";

export default function SingUpGroupScreen({ navigation }: any) {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirSenha, setConfirSenha] = useState<string>("");

  const handleSignup = async (data: any) => {
    if (senha !== confirSenha) {
      Alert.alert("Erro", "As senhas não conferem.");
      return;
    }

    try {
      const user = await AuthCase.signUpGroup(data);
      Alert.alert("Grupo cadastrado com sucesso!");

      navigation.navigate("Login");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return(
    
  )
}
