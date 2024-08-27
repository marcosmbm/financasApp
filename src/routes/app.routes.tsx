import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "@/screens/app/home";

export type AppRoutesParamList = {
  home: undefined;
};

const Drawer = createDrawerNavigator<AppRoutesParamList>();

export default function AppRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={Home} />
    </Drawer.Navigator>
  );
}
