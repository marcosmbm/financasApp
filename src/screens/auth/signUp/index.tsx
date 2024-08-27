import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

import { Alert, Platform } from "react-native";

import { Container } from "../signIn/styles";

import {
  Background,
  Input,
  Button,
  KeyboardDismissContainer,
} from "@/components";

export default function SignIn() {
  const { signUp, isLoadingAuth } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const nameValue = name.trim();
    const emailValue = email.trim();
    const passwordValue = password.trim();

    if (nameValue === "") {
      Alert.alert("Nome é obrigatório");
      return;
    }

    if (emailValue === "") {
      Alert.alert("Email é obrigatório");
      return;
    }

    if (passwordValue === "") {
      Alert.alert("Senha é obrigatório");
      return;
    }

    await signUp(nameValue, emailValue, passwordValue);
  }

  return (
    <Background>
      <KeyboardDismissContainer>
        <Container
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          enabled
        >
          <Input
            placeholder="Digite seu nome"
            keyboardType="default"
            value={name}
            onChangeText={(value) => setName(value)}
          />

          <Input
            placeholder="Digite seu email"
            keyboardType="email-address"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />

          <Input
            placeholder="Digite sua senha"
            secureTextEntry
            value={password}
            onChangeText={(value) => setPassword(value)}
          />

          <Button
            variant="primary"
            onPress={handleLogin}
            isLoading={isLoadingAuth}
          >
            Cadastrar
          </Button>
        </Container>
      </KeyboardDismissContainer>
    </Background>
  );
}
