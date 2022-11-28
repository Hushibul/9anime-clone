/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [loginData, setLoginData] = useState("");
  // const [registerData, setRegisterData] = useState([]);

  return (
    <LoginContext.Provider
      value={{
        showModal,
        setShowModal,
        loginData,
        setLoginData,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
