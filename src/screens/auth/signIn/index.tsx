import { useNavigation } from "@react-navigation/native";
import type { AuthNavigationParamList } from "@/routes/auth.routes";

import { Platform } from "react-native";

import { Container } from "./styles";

import {
  Background,
  Logo,
  Input,
  Button,
  KeyboardDismissContainer,
} from "@/components";

export default function SignIn() {
  const navigation = useNavigation<AuthNavigationParamList>();

  return (
    <Background>
      <KeyboardDismissContainer>
        <Container
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          enabled
        >
          <Logo size={150} />

          <Input placeholder="Digite seu email" keyboardType="email-address" />

          <Input placeholder="Digite sua senha" secureTextEntry />

          <Button variant="primary">Acessar</Button>

          <Button variant="link" onPress={() => navigation.navigate("signUp")}>
            Criar uma conta gratuita
          </Button>
        </Container>
      </KeyboardDismissContainer>
    </Background>
  );
}
