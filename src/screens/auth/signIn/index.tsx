import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import type { AuthNavigationParamList } from "@/routes/auth.routes";

import { Alert, Platform } from "react-native";

import { Container } from "./styles";

import {
  Background,
  Logo,
  Input,
  Button,
  KeyboardDismissContainer,
} from "@/components";

export default function SignIn() {
  const { isLoadingAuth, signIn } = useAuth();

  const navigation = useNavigation<AuthNavigationParamList>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const emailValue = email.trim();
    const passwordValue = password.trim();

    if (emailValue === "") {
      Alert.alert("Email é obrigatório");
      return;
    }

    if (passwordValue === "") {
      Alert.alert("Senha é obrigatória");
      return;
    }

    await signIn(emailValue, passwordValue);
  }

  return (
    <Background>
      <KeyboardDismissContainer>
        <Container
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          enabled
        >
          <Logo size={150} />

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
            Acessar
          </Button>

          <Button variant="link" onPress={() => navigation.navigate("signUp")}>
            Criar uma conta gratuita
          </Button>
        </Container>
      </KeyboardDismissContainer>
    </Background>
  );
}
