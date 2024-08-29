import { useState } from "react";

import { colors } from "@/styles/config";
import { Container, RegisterTypeButton, RegisterLabel } from "./styles";
import { Feather } from "@expo/vector-icons";

interface RegisterTypesProps {
  type: "receita" | "despesa";
  sendTypeChanged: (item: RegisterTypesProps["type"]) => void;
}

export function RegisterTypes({ type, sendTypeChanged }: RegisterTypesProps) {
  const [typeChecked, setTypeChecked] = useState(type);

  function handleChangeType(item: RegisterTypesProps["type"]) {
    setTypeChecked(item);
    sendTypeChanged(item);
  }

  return (
    <Container>
      <RegisterTypeButton
        checked={type === "receita"}
        onPress={() => handleChangeType("receita")}
      >
        <Feather name="arrow-up" color={colors.black} size={25} />

        <RegisterLabel>Receita</RegisterLabel>
      </RegisterTypeButton>

      <RegisterTypeButton
        checked={type === "despesa"}
        onPress={() => handleChangeType("despesa")}
      >
        <Feather name="arrow-down" color={colors.black} size={25} />

        <RegisterLabel>Despesa</RegisterLabel>
      </RegisterTypeButton>
    </Container>
  );
}
