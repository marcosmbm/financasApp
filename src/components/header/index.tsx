import { DrawerActions, useNavigation } from "@react-navigation/native";

import { colors } from "@/styles/config";
import { Container, Title, ButtonMenu } from "./styles";
import { Feather } from "@expo/vector-icons";

interface HeaderProps {
  title?: string;
}

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation();

  function handleOpenDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  return (
    <Container>
      <ButtonMenu onPress={handleOpenDrawer}>
        <Feather name="menu" size={35} color={colors.black} />
      </ButtonMenu>

      {title && <Title>{title}</Title>}
    </Container>
  );
}
