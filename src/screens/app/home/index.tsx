import { useState } from "react";
import { useBalance, useReceives } from "@/hooks";
import { useIsFocused } from "@react-navigation/native";

import { Background, Header, BalanceItem, HistoryItem } from "@/components";
import { Container, ListBalance, Area, Title, List } from "./styles";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/config";

export default function Home() {
  const isFocused = useIsFocused();
  const [dateMovements, setDateMovements] = useState(new Date());

  const { listBalance } = useBalance(dateMovements, isFocused);
  const { listReceives } = useReceives(dateMovements, isFocused);

  return (
    <Background>
      <Header title="Minhas Movimentações" />

      <Container>
        <ListBalance
          data={listBalance}
          keyExtractor={(item) => item.tag}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <BalanceItem data={item} />}
        />

        <Area>
          <TouchableOpacity>
            <MaterialIcons name="event" color={colors.black} size={25} />
          </TouchableOpacity>

          <Title>Últimas Movimentações</Title>
        </Area>

        <List
          data={listReceives}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <HistoryItem data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </Container>
    </Background>
  );
}
