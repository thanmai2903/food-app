import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // ✅ initialize directly from localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // optional sync effect
  useEffect(() => {
    if (user) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
      );
    } else {
      localStorage.removeItem("loggedInUser");
    }
  }, [user]);

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
    ){
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
    setUser(null);
  };

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
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