import { createContext, useContext, useState, ReactNode, useCallback } from "react";

export type UserRole = "member" | "partner";

interface AuthState {
  isLoggedIn: boolean;
  role: UserRole | null;
  email: string | null;
}

interface AuthContextType extends AuthState {
  login: (role: UserRole, email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthState>(() => {
    const saved = localStorage.getItem("clustr_auth");
    if (saved) {
      try { return JSON.parse(saved); } catch { /* ignore */ }
    }
    return { isLoggedIn: false, role: null, email: null };
  });

  const login = useCallback((role: UserRole, email: string) => {
    const state = { isLoggedIn: true, role, email };
    setAuth(state);
    localStorage.setItem("clustr_auth", JSON.stringify(state));
  }, []);

  const logout = useCallback(() => {
    const state: AuthState = { isLoggedIn: false, role: null, email: null };
    setAuth(state);
    localStorage.removeItem("clustr_auth");
  }, []);

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
