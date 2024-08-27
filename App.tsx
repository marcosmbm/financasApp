import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

import RoutesApp from "@/routes";
import Theme from "@/styles/theme";
import { colors } from "@/styles/config";

import AuthProvider from "@/contexts/auth";

export default function App() {
  return (
    <NavigationContainer>
      <Theme>
        <AuthProvider>
          <StatusBar
            backgroundColor={colors.mainBg}
            animated
            barStyle={"dark-content"}
          />
          <RoutesApp />
        </AuthProvider>
      </Theme>
    </NavigationContainer>
  );
}
