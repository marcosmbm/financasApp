import { useAuth } from "@/hooks/useAuth";

import { Background, Header } from "@/components";
import { Container } from "./styles";

import { View, Text, Button } from "react-native";

export default function Home() {
  const { signOut } = useAuth();

  return (
    <Background>
      <Header title="Minhas Movimentações" />
      <Container>
        <Text>Home</Text>

        <Button title="Sair" onPress={() => signOut()} />
      </Container>
    </Background>
  );
}
