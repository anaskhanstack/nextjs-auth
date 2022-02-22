import React, { createContext, useEffect } from "react";
import Cookies from "universal-cookie";

interface Auth {
  user: object | null;
  login: Function;
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
  login: () => {},
  onLogout: () => {},
  onRegister: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser]: any = React.useState(null);
  const cookies = new Cookies();

  const authReady = false;

  useEffect(() => {
    const user = cookies.get("user");
    if (user?._id) {
      setUser(user);
    }
  }, []);

  const login = (param: User) => {
    const userList = cookies?.get("userList");
    if (!userList) return false;

    const check = userList?.find(
      (user: User) =>
        user.email === param.email && user.password === param.password
    );

    if (check?._id) {
      cookies.set("user", JSON.stringify(check));
      setUser(check);

      return true;
    }
  };

  const onLogout = () => {
    console.log("logged out");
  };

  const onRegister = (data: object) => {
    const cookies = new Cookies();
    const userList = cookies?.get("userList");

    if (!userList) cookies.set("userList", JSON.stringify([data]));
    else {
      cookies.set("userList", JSON.stringify([...userList, data]));
    }

    cookies.set("user", JSON.stringify(data));
    setUser(data);

    return true;
  };

  const context: Auth = {
    user,
    login,
    onLogout,
    onRegister,
    authReady,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
