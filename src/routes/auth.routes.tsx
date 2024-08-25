import {
  createNativeStackNavigator,
  type NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import SignIn from "@/screens/auth/signIn";
import SignUp from "@/screens/auth/signUp";
import { colors } from "@/styles/config";

export type AuthRoutesParamList = {
  signIn: undefined;
  signUp: undefined;
};

export type AuthNavigationParamList =
  NativeStackNavigationProp<AuthRoutesParamList>;

const Stack = createNativeStackNavigator<AuthRoutesParamList>();

export default function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="signIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signUp"
        component={SignUp}
        options={{
          title: "Voltar",
          headerStyle: {
            backgroundColor: colors.blue,
          },
          headerTintColor: colors.white,
          headerTitle: "Voltar",
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
