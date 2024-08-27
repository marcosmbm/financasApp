import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { api, getError } from "@/services/api";
import { createContext } from "react";
import { Alert } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY_STORAGE = "@financasApp";

interface User {
  id: string;
  name: string;
  token?: string;
  email: string;
}

interface AuthContextProps {
  signed: boolean;
  isLoadingAuth: boolean;
  user: User | null;
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
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadStorage() {
      try {
        const tokenStorage = await AsyncStorage.getItem(KEY_STORAGE);

        if (tokenStorage) {
          const token = JSON.parse(tokenStorage);

          const response = await api.get("/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const { id, name, email } = response.data;

          setUser({ id, name, email, token });
          api.defaults.headers.Authorization = `Bearer ${token}`;
        }
      } catch (error) {
        await AsyncStorage.removeItem(KEY_STORAGE);
        setUser(null);
      }
    }
    loadStorage();
  }, []);

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

  async function signIn(email: string, password: string) {
    try {
      setIsLoadingAuth(true);

      const response = await api.post("/login", { email, password });
      const { id, name, token } = response.data;

      const data = { id, name, token, email };
      setUser(data);

      await AsyncStorage.setItem(KEY_STORAGE, JSON.stringify(token));

      api.defaults.headers.Authorization = `Bearer ${token}`;
    } catch (error) {
      const errorMessage = getError(error);
      Alert.alert("Erro", errorMessage);
    } finally {
      setIsLoadingAuth(false);
    }
  }

  async function signOut() {
    await AsyncStorage.removeItem(KEY_STORAGE);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        isLoadingAuth,
        user,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
