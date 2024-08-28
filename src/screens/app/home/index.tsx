import { useState } from "react";
import { useBalance } from "@/hooks";

import { Background, Header, BalanceItem } from "@/components";
import { Container, ListBalance } from "./styles";

export default function Home() {
  const [dateMovements, setDateMovements] = useState(new Date());

  const { listBalance } = useBalance(dateMovements);

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
      </Container>
    </Background>
  );
}
