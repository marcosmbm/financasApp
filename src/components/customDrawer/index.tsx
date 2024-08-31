import { useAuth } from "@/hooks";

import {
  type DrawerContentComponentProps,
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

import { View, Text } from "react-native";
import { Logo } from "../ui";
import { colors } from "@/styles/config";

export function CustomDrawer(props: DrawerContentComponentProps) {
  const { user, signOut } = useAuth();

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25,
        }}
      >
        <Logo size={100} />

        <Text style={{ fontSize: 18, marginTop: 14 }}>Bem-vindo(a)</Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 14,
            paddingHorizontal: 20,
          }}
          numberOfLines={1}
        >
          {user?.name}
        </Text>
      </View>

      <DrawerItemList {...props} />

      <DrawerItem
        {...props}
        label={"Sair"}
        style={{ borderColor: colors.red, borderWidth: 1 }}
        labelStyle={{ color: colors.red, fontWeight: "bold" }}
        onPress={() => signOut()}
      />
    </DrawerContentScrollView>
  );
}
