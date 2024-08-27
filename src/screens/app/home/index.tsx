import { useAuth } from "@/hooks/useAuth";

import { View, Text, Button } from "react-native";

export default function Home() {
  const { signOut } = useAuth();

  return (
    <View>
      <Text>Home</Text>

      <Button title="Sair" onPress={() => signOut()} />
    </View>
  );
}
