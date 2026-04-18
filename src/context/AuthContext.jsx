import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // restore login after refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const signup = (name, email, password) => {
    const newUser = { name, email, password };

    localStorage.setItem("registeredUser", JSON.stringify(newUser));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));

    setUser(newUser);

    return {
      success: true,
      message: "Signup successful",
    };
  };

  const login = (email, password) => {
    const savedUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (!savedUser) {
      return {
        success: false,
        message: "Please signup first",
      };
    }

    if (
      savedUser.email === email &&
      savedUser.password === password
    ) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(savedUser)
      );

      setUser(savedUser);

      return {
        success: true,
        message: "Login successful",
      };
    }

    return {
      success: false,
      message: "Invalid credentials",
    };
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);