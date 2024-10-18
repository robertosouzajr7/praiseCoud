import React from "react";
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

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        placeholder="E-mail"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        inputMode="email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <Button title="Entrar" onPress={() => handleSignup({ email, senha })} />
      <Text style={styles.link} onPress={() => navigation.navigate("Signup")}>
        Não tem uma conta? Cadastre-se
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },

  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  link: {
    marginTop: 20,
    textAlign: "center",
    color: "blue",
  },
});
