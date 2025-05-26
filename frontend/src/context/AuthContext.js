import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

useEffect(() => {
  if (token) {
    try {
      const decoded = jwtDecode(token);
      console.log("Decoded token:", decoded); 
      console.log("Extracted ID:", decoded.id); 
      setUserId(decoded.id);
    } catch (err) {
      console.error("Invalid token", err);
      logout(); 
    }
  }
}, [token]);


  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUserId("");
  };

  return (
    <AuthContext.Provider value={{ token, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
