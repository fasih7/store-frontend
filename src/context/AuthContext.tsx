// src/context/AuthContext.tsx
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextType {
  user: string | null;
  login: (access_token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (access_token: string) => {
    localStorage.setItem("access_token", access_token);
    setUser(access_token); // Optionally decode token if needed
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setUser(null);
  };

  // On initial load, check if there's a token in localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    if (storedToken) {
      setUser(storedToken);
      //   const decodedToken = jwt_decode<{ email: string }>(storedToken);
      //   setEmail(decodedToken.email);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
