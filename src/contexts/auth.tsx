import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { api, getError } from "@/services/api";
import { createContext } from "react";
import { Alert } from "react-native";

interface AuthContextProps {
  signed: boolean;
  isLoadingAuth: boolean;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export default function AuthProvider({ children }: AuthProviderProps) {
  const navigation = useNavigation();

  const [isLoadingAuth, setIsLoadingAuth] = useState(false);

  async function signUp(name: string, email: string, password: string) {
    try {
      setIsLoadingAuth(true);
      await api.post("/users", { name, email, password });
      navigation.goBack();
    } catch (error) {
      const errorMessage = getError(error);
      Alert.alert("Erro", errorMessage);
    } finally {
      setIsLoadingAuth(false);
    }
  }

  async function signIn(email: string, password: string) {}

  async function signOut() {}

  return (
    <AuthContext.Provider
      value={{
        signed: false,
        isLoadingAuth,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
