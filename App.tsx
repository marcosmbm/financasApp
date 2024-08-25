import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

import RoutesApp from "@/routes";
import Theme from "@/styles/theme";
import { colors } from "@/styles/config";

export default function App() {
  return (
    <NavigationContainer>
      <Theme>
        <StatusBar
          backgroundColor={colors.mainBg}
          animated
          barStyle={"dark-content"}
        />
        <RoutesApp />
      </Theme>
    </NavigationContainer>
  );
}
