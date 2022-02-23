import React, { createContext, useEffect } from "react";
import Cookies from "universal-cookie";

import axios from "axios";

const BASE_URL = "http://localhost:3000";

interface User {
  username?: string;
  email: string;
  password: string;
}

export interface IAuthContext {
  user: User | null;
  onLogin: (param: any) => any;
  onLogout: (param: any) => void;
  onRegister: (param: any) => any;
  authReady: Boolean;
}

const initialValue = {
  user: null,
  onLogin: () => {},
  onLogout: () => {},
  onRegister: () => {},
  authReady: false,
};

export const AuthContext = createContext<IAuthContext>(initialValue);

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser]: any = React.useState(null);
  const cookies = new Cookies();
  const authReady = false;

  useEffect(() => {
    if (!user) {
      const session = cookies.get("user");
      if (session) {
        setUser(session);
      }
    }
  }, [user]);

  const onLogin = async (param: User) => {
    try {
      const users = await axios.get(`${BASE_URL}/users`);
      const filteredUser = users.data.find(
        (user: User) =>
          user.email === param.email && user.password === param.password
      );
      if (filteredUser?.id) {
        cookies.set("user", JSON.stringify(filteredUser));
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
    cookies.remove("user");
    setUser(null);
  };

  const onRegister = async (data: User) => {
    try {
      const users = await axios.get(`${BASE_URL}/users`);
      const filteredUser = users.data.find(
        (user: User) => user.email === data.email
      );

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

  const context: IAuthContext = {
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
