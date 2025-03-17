import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  logout: () => void;
  setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    sessionStorage.getItem("token")
  );

  const isAuthenticated = !!token;

  const logout = () => {
    sessionStorage.clear();
    setToken(null);
  };

  useEffect(() => {
    if (token) {
      sessionStorage.setItem("token", token);
    } else {
      sessionStorage.removeItem("token");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      logout,
      setToken,
    }),
    [isAuthenticated]
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
