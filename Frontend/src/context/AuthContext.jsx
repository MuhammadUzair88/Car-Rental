import { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || null
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } else {
      localStorage.removeItem("userInfo");
    }
  }, [userInfo]);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKENDURL}/api/user/login`,
        { email, password }
      );
      setUserInfo(response.data.user);
      alert("Login successful");
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  const signup = async (name, email, password) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKENDURL}/api/user/register`,
        { name, email, password }
      );
      setUserInfo(response.data.user);
      alert("Signup successful");
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  const logout = () => {
    setUserInfo(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ userInfo, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 🔥 Custom Hook
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
