// AuthContext.js
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    console.log("✅ Login clicked");
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };
 

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook must return useContext()
export const useAuth = () => {
  return useContext(AuthContext);
};
