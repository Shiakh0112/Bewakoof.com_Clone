import { createContext, useState } from "react";

export const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
  let [isLogged, setIsLogged] = useState({
    flag: false,
    user: "",
  });

  return (
    <RouterContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </RouterContext.Provider>
  );
};
