import { createContext, useContext, useEffect, useMemo, useState } from "react";
import getUserFromSessionStorage from "../utils/getFromSessionStorage";

interface AuthContextType {
  isAuthenticated: boolean;
  role: string | null;
  logout: () => void;
  setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    sessionStorage.getItem("token")
  );
  const [role, setRole] = useState<string | null>(
    getUserFromSessionStorage()?.rol || null
  );

  const isAuthenticated = !!token;

  const logout = () => {
    sessionStorage.clear();
    setToken(null);
    setRole(null);
  };

  useEffect(() => {
    if (token) {
      sessionStorage.setItem("token", token);
      const user = getUserFromSessionStorage();
      setRole(user?.rol || null);
    } else {
      sessionStorage.removeItem("token");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      role,
      logout,
      setToken,
    }),
    [isAuthenticated, role]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
