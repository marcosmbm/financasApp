import type { ReceiveModel } from "@/models";

import { Container, Type, TypeText, IconView, ValueText } from "./styles";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/config";
import { Alert, TouchableWithoutFeedback } from "react-native";

import { formattedMoney } from "@/utils";

interface HistoryItemProps {
  data: ReceiveModel;
  deleteItem: (item: ReceiveModel) => Promise<void>;
}

export function HistoryItem({ data, deleteItem }: HistoryItemProps) {
  function handleDeleteItem() {
    Alert.alert(
      "Atenção",
      "Você tem certeza que deseja deletar esse registro ?",
      [
        {
          style: "cancel",
          text: "Cancelar",
        },
        {
          style: "default",
          text: "Deletar",
          onPress: () => deleteItem(data),
        },
      ],
    );
  }

  return (
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
      <Container>
        <Type>
          <IconView type={data.type}>
            <Feather
              name={data.type === "receita" ? "arrow-up" : "arrow-down"}
              size={20}
              color={colors.white}
            />
            <TypeText>{data.type}</TypeText>
          </IconView>
        </Type>

        <ValueText>{formattedMoney(data.value)}</ValueText>
      </Container>
    </TouchableWithoutFeedback>
  );
}
