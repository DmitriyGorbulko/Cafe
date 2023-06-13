import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "./useLocalStorage";

// NOTE: optimally move this into a separate file

export const useUser = () => {
  const { token, setToken: setUser } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (user: string) => {
    setUser(user);
    setItem("token", JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    setItem("token", "");
  };

  const isAuth = !!token;

  return { token, addUser, removeUser, isAuth };
};