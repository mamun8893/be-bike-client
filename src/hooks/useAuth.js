import React, { useContext } from "react";
import { authContext } from "../contexts/AuthProvider";

const useAuth = () => {
  const auth = useContext(authContext);
  return auth;
};

export default useAuth;