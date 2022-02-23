import React, { createContext, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

interface Auth {
  user: object | null;
  onLogin: Function;
  onLogout: Function;
  onRegister: Function;
  authReady: Boolean;
}

interface User {
  name?: string;
  email: string;
  password: string;
}

export const AuthContext = createContext<Auth>({
  user: null,
  onLogin: () => {},
  onLogout: () => {},
  onRegister: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser]: any = React.useState(null);

  const authReady = false;

  const onLogin = async (param: User) => {
    try {
      const users = await axios.get(`${BASE_URL}/users`);
      const filteredUser = users.data.find(
        (user: User) =>
          user.email === param.email && user.password === param.password
      );
      if (filteredUser?.id) {
        setUser(filteredUser);
        return true;
      } else {
        throw { message: "Enter correct email or password" };
      }
    } catch (e) {
      return e;
    }
  };

  const onLogout = () => {
    console.log("logged out");
  };

  const onRegister = async (data: User) => {
    try {
      const users = await axios.get(`${BASE_URL}/users`);
      const filteredUser = users.data.find(
        (user: User) => user.email === data.email
      );
      console.log(filteredUser);
      if (filteredUser?.id) {
        throw { message: "Email Already Exist" };
      } else {
        await axios.post(`${BASE_URL}/users`, data);
        setUser(data);
        return true;
      }
    } catch (e) {
      return e;
    }
  };

  const context: Auth = {
    user,
    onLogin,
    onLogout,
    onRegister,
    authReady,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
