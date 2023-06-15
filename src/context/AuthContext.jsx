import axios from "axios";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [checkingUser, setCheckingUser] = useState(true);

  const login = async (email, password) => {
    try {
      const response = await axios.get("https://64400c883dee5b763e2d6c25.mockapi.io/Login");
      const foundedUser = response.data.find((user) => user.email === email && user.password === password);

      if (!foundedUser) {
        return false;
      }

      localStorage.setItem("user", JSON.stringify(foundedUser));
      setCurrentUser(foundedUser);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem("user");
      setCurrentUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (email, password) => {
    try {
      const response = await axios.get("https://64400c883dee5b763e2d6c25.mockapi.io/Login");
      const foundedUser = response.data.find((user) => user.email === email);

      if (foundedUser) {
        alert("Email sudah dipakai");
        return false;
      }

      // Harus sama dengan yang ada di mockapi bentuknya
      const newUser = {
        email,
        password,
        role: "user",
      };

      const newUserResponse = await axios.post("https://64400c883dee5b763e2d6c25.mockapi.io/Login", newUser);

      if (!newUserResponse) {
        alert("Terjadi kesalahan");
        return false;
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const isLoggedIn = Boolean(currentUser);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setCheckingUser(false);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ currentUser, isLoggedIn, register, login, logout }}>{!checkingUser && children}</AuthContext.Provider>
    </>
  );
};
