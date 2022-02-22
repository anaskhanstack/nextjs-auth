import React, { createContext } from "react";

interface Auth {
  user: object | null;
  login: Function;
  onLogout: Function;
  onRegister:Function;
  authReady: Boolean;

}

export const AuthContext = createContext<Auth>({
  user: null,
  login: () => {},
  onLogout: () => {},
  onRegister:()=>{},
  authReady: false,
});

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser]: any = React.useState(null);
  const authReady = false;

  const login = (param: Auth) => {
    setUser(param);
    return true
  };

  const onLogout = () => {
    console.log("logged out");
  };

  const onRegister = (data:object)=>{
    console.log(data)
  } 

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
