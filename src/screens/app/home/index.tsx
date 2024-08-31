import { useState, useMemo } from "react";
import { useBalance, useReceives } from "@/hooks";
import { useIsFocused } from "@react-navigation/native";

import {
  Background,
  Header,
  BalanceItem,
  HistoryItem,
  CalendarModal,
} from "@/components";
import { TouchableOpacity, Modal } from "react-native";

import { Container, ListBalance, Area, Title, List } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/config";

import type { ReceiveModel } from "@/models";

export default function Home() {
  const isFocused = useIsFocused();

  const [dateMovements, setDateMovements] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);

  const onlyDate = useMemo(() => {
    const date = new Date(dateMovements);
    return new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);
  }, [dateMovements]);

  const { listBalance } = useBalance(onlyDate, isFocused);
  const { listReceives, deleteReceive } = useReceives(onlyDate, isFocused);

  async function handleDeleteItem(item: ReceiveModel) {
    const response = await deleteReceive(item);

    if (response) setDateMovements(new Date());
  }

  function filterDateMovements(dateSelected: Date) {
    setDateMovements(dateSelected);
  }

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
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <MaterialIcons name="event" color={colors.black} size={25} />
          </TouchableOpacity>

          <Title>Últimas Movimentações</Title>
        </Area>

        <List
          data={listReceives}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <HistoryItem data={item} deleteItem={handleDeleteItem} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />

        <Modal
          visible={modalVisible}
          animationType="fade"
          transparent
          statusBarTranslucent
        >
          <CalendarModal
            onClose={() => setModalVisible(false)}
            handleFilter={filterDateMovements}
          />
        </Modal>
      </Container>
    </Background>
  );
}
