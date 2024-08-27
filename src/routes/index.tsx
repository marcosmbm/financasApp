import { useAuth } from "@/hooks/useAuth";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function RoutesApp() {
  const { signed } = useAuth();

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
