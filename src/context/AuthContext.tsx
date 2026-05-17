import React, {
  createContext,
  useState,
  useEffect,
} from 'react';

import {
  getUser,
  removeUser,
  saveUser,
} from '../storage/authStorage';


export const AuthContext = createContext<any>(null);


const AuthProvider = ({
  children,
}: any) => {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);


  // Load saved user
  useEffect(() => {

    checkUser();

  }, []);


  const checkUser = async () => {

    try {

      const savedUser = await getUser();

      setUser(savedUser);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };


  // Login
  const login = async (userData: any) => {

    await saveUser(userData);

    setUser(userData);
  };


  // Logout
  const logout = async () => {

    await removeUser();

    setUser(null);
  };


  return (

    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );
};

export default AuthProvider;