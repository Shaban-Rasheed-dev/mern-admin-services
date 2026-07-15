/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //service data
  const [services, setServices] = useState([]);
  //user profile data
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //token get data logic
  const [token, setToken] = useState(localStorage.getItem("token"));
  let isLoggedIn = !!token;
  //token
  const authorizationToken = `Bearer ${token}`;
  const logOut = () => {
    setToken("");
    setUser("");
    localStorage.removeItem("token");
  };

  //get the services data from the server
  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/services", {
        method: "GEt",
      });
      if (response.ok) {
        const serviceData = await response.json();
        setServices(serviceData.msg);
        // console.log(serviceData.msg);
      }
    } catch (error) {
      console.log(`Error from the service getting data: ${error}`);
    }
  };

  useEffect(() => {
    getServices();
  }, []);
  //jwt authetication to get the currently user loggedin data
  const Authtentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        // console.log("data", data.userData);

        setUser(data.userData);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log("err", error);
    }
  };
  useEffect(() => {
    if (token) {
      Authtentication();
    } else {
      setIsLoading(false);
    }
  }, [token]);

  //store the token in localstorage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLS,
        logOut,
        isLoggedIn,
        user,
        services,
        authorizationToken,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return authContextValue;
};
