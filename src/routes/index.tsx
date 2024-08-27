import { useAuth } from "@/hooks/useAuth";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import { Background, Loader } from "@/components";
import { View } from "react-native";
import { colors } from "@/styles/config";

export default function RoutesApp() {
  const { signed, isLoading } = useAuth();

  if (isLoading) {
    return (
      <Background>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Loader color={colors.black} size={40} />
        </View>
      </Background>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
