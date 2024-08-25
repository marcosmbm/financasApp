import { Platform } from "react-native";

import { Container } from "../signIn/styles";

import {
  Background,
  Input,
  Button,
  KeyboardDismissContainer,
} from "@/components";

export default function SignIn() {
  return (
    <Background>
      <KeyboardDismissContainer>
        <Container
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          enabled
        >
          <Input placeholder="Digite seu nome" keyboardType="default" />

          <Input placeholder="Digite seu email" keyboardType="email-address" />

          <Input placeholder="Digite sua senha" secureTextEntry />

          <Button variant="primary">Cadastrar</Button>
        </Container>
      </KeyboardDismissContainer>
    </Background>
  );
}
