import type { ReceiveModel } from "@/models";

import { Container, Type, TypeText, IconView, ValueText } from "./styles";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/config";

import { formattedMoney } from "@/utils";

interface HistoryItemProps {
  data: ReceiveModel;
}

export function HistoryItem({ data }: HistoryItemProps) {
  return (
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
  );
}
