import { createContext, useEffect, useState } from "react";

export const RouterContext = createContext();

export const RouterProvider = ({ children }) => {
  let [isLogged, setIsLogged] = useState({
    flag: false,
    user: "",
  });

  useEffect(() => {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser) {
      setIsLogged({
        flag: true,
        user: loggedUser.username,
      });
    }
  }, []);

  return (
    <RouterContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </RouterContext.Provider>
  );
};
