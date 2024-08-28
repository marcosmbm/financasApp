import { useMemo } from "react";

import type { BalanceModel } from "@/models";
import { Container, Label, Balance } from "./styles";
import { colors } from "@/styles/config";

import { formattedMoney } from "@/utils";

interface BalanceItemProps {
  data: BalanceModel;
}

export function BalanceItem({ data }: BalanceItemProps) {
  const labelName = useMemo(() => {
    if (data.tag === "saldo")
      return {
        label: "Saldo atual",
        color: colors.blue,
      };

    if (data.tag === "receita")
      return {
        label: "Entradas de hoje",
        color: colors.green,
      };

    if (data.tag === "despesa")
      return {
        label: "Saídas de hoje",
        color: colors.red,
      };
  }, [data]);

  return (
    <Container bg={labelName?.color}>
      <Label>{labelName?.label}</Label>

      <Balance>{formattedMoney(data.saldo)}</Balance>
    </Container>
  );
}
