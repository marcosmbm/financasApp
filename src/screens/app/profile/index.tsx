import { useAuth } from "@/hooks";
import { useNavigation } from "@react-navigation/native";
import type { AppNavigationParamList } from "@/routes/app.routes";

import { Background, Header, Button } from "@/components";
import { Container, Name, Title, TitleArea } from "./styles";

export default function Profile() {
  const { user, signOut } = useAuth();

  const navigation = useNavigation<AppNavigationParamList>();

  return (
    <Background>
      <Header title="Meu perfil" />

      <Container>
        <TitleArea>
          <Title>Bem vindo(a) de volta</Title>

          <Name>{user?.name}</Name>
        </TitleArea>

        <Button variant="primary" onPress={() => navigation.navigate("new")}>
          Registrar Gastos
        </Button>

        <Button variant="warning" onPress={async () => await signOut()}>
          Sair
        </Button>
      </Container>
    </Background>
  );
}
