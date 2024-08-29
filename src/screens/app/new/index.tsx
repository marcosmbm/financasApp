import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import type { AppNavigationParamList } from "@/routes/app.routes";

import { Container } from "./styles";
import { Alert, Keyboard } from "react-native";

import {
  Background,
  Header,
  Input,
  KeyboardDismissContainer,
  Button,
  RegisterTypes,
} from "@/components";

import { api, getError } from "@/services/api";
import { format } from "date-fns";

export default function New() {
  const navigation = useNavigation<AppNavigationParamList>();

  const [labelInput, setLabelInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [type, setType] = useState<"receita" | "despesa">("receita");

  async function handleRegister(label: string, value: number) {
    try {
      await api.post("/receive", {
        value,
        description: label,
        type,
        date: format(new Date(), "dd/MM/yyyy"),
      });

      setLabelInput("");
      setValueInput("");
      setType("receita");

      navigation.navigate("home");
    } catch (error) {
      const errroMessage = getError(error);
      Alert.alert("Erro ao salva", errroMessage);
    }
  }

  async function handleSubmit() {
    Keyboard.dismiss();

    const label = labelInput.trim();
    const valueNumber = Number(valueInput);

    if (label === "" || Number.isNaN(valueNumber)) {
      Alert.alert(
        "Valores inválidos",
        "Os campos digitado estão com valores inválidos ou vazio!",
      );
      return;
    }

    Alert.alert("Confirmando dados", `Tipo: ${type} - Valor: ${valueNumber}`, [
      {
        style: "cancel",
        text: "Cancelar",
      },
      {
        style: "default",
        text: "Continuar",
        onPress: () => handleRegister(label, valueNumber),
      },
    ]);
  }

  return (
    <KeyboardDismissContainer>
      <Background>
        <Header title="Registrando" />

        <Container>
          <Input
            placeholder="Descrição desse registro"
            value={labelInput}
            onChangeText={(value) => setLabelInput(value)}
          />

          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={(value) => setValueInput(value)}
          />

          <RegisterTypes
            type={type}
            sendTypeChanged={(item) => setType(item)}
          />

          <Button variant="secondary" onPress={handleSubmit}>
            Registrar
          </Button>
        </Container>
      </Background>
    </KeyboardDismissContainer>
  );
}
