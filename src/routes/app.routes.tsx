import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "@/screens/app/home";
import { colors } from "@/styles/config";

export type AppRoutesParamList = {
  home: undefined;
};

const Drawer = createDrawerNavigator<AppRoutesParamList>();

export default function AppRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.white,
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: colors.blue,
        drawerActiveTintColor: colors.white,
        drawerInactiveBackgroundColor: colors.mainBg,
        drawerInactiveTintColor: colors.black,
      }}
    >
      <Drawer.Screen name="home" component={Home} />
    </Drawer.Navigator>
  );
}
