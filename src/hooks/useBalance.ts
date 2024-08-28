import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { format } from "date-fns";
import { api, getError } from "@/services/api";
import type { BalanceModel } from "@/models";
import { Alert } from "react-native";

export function useBalance(dateMovements: Date) {
  const isFocused = useIsFocused();

  const [listBalance, setListBalance] = useState<BalanceModel[]>([]);

  useEffect(() => {
    let isActive = isFocused;

    async function getMovements() {
      try {
        const dateFormatted = format(dateMovements, "dd/MM/yyyy");
        const balance = await api.get("/balance", {
          params: {
            date: dateFormatted,
          },
        });

        setListBalance(balance.data);
      } catch (error) {
        const errorMessage = getError(error);
        Alert.alert(errorMessage);
      }
    }

    if (isActive) getMovements();

    return () => {
      isActive = false;
    };
  }, [dateMovements, isFocused]);

  return {
    listBalance,
  };
}
