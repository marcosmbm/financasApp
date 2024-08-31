import type { DrawerNavigationProp } from "@react-navigation/drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "@/screens/app/home";
import New from "@/screens/app/new";
import Profile from "@/screens/app/profile";

import { CustomDrawer } from "@/components";

import { colors } from "@/styles/config";

export type AppRoutesParamList = {
  home: undefined;
  new: undefined;
  profile: undefined;
};

export type AppNavigationParamList = DrawerNavigationProp<AppRoutesParamList>;

const Drawer = createDrawerNavigator<AppRoutesParamList>();

export default function AppRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
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
      <Drawer.Screen
        name="home"
        component={Home}
        options={{
          title: "Home",
        }}
      />

      <Drawer.Screen
        name="new"
        component={New}
        options={{
          title: "Registrar",
        }}
      />

      <Drawer.Screen
        name="profile"
        component={Profile}
        options={{
          title: "Meu perfil",
        }}
      />
    </Drawer.Navigator>
  );
}
