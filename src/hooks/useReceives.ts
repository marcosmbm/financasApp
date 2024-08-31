import { useEffect, useState } from "react";

import { format } from "date-fns";
import { api, getError } from "@/services/api";
import type { ReceiveModel } from "@/models";
import { Alert } from "react-native";

export function useReceives(dateMovements: Date, isFocused: boolean) {
  const [listReceives, setListReceives] = useState<ReceiveModel[]>([]);

  useEffect(() => {
    let isActive = isFocused;

    async function getMovements() {
      try {
        const dateFormatted = format(dateMovements, "dd/MM/yyyy");
        const balance = await api.get("/receives", {
          params: {
            date: dateFormatted,
          },
        });

        setListReceives(balance.data);
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

  async function deleteReceive(item: ReceiveModel) {
    try {
      await api.delete("/receives/delete", {
        params: {
          item_id: item.id,
        },
      });

      return true;
    } catch (error) {
      const errorMessage = getError(error);
      Alert.alert(errorMessage);
      return false;
    }
  }

  return {
    listReceives,
    deleteReceive,
  };
}
