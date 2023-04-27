import React from 'react';
import { useAuth } from "../../hooks/useAuth";
import { AuthContext } from "./AuthContext";

const AuthContextProvider = ({children}) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
 
export default AuthContextProvider;
