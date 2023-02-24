import React, { createContext, useEffect, useContext, useState } from 'react';
import api from '../services/axios';
import { toast } from 'react-toastify';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [isAuthed, setIsAuthed] = useState(false);
  const [userData, setUserData] = useState({});

  async function login(login, senha) {
    try {
      const res = await api.post('auth/login', {
        login,
        senha,
      });

      api.setUserToken(res.data.token);
      window.sessionStorage.setItem('user-token', res.data.token);
      setUserData(res.data.data);
      setIsAuthed(true);
    } catch (error) {
      setIsAuthed(false);
      throw new Error('erro');
    }
  }

  async function logout() {
    window.sessionStorage.removeItem('user-token');
    setIsAuthed(false);
    setUserData({});
    toast.info('Você foi deslogado com sucesso');
  }

  useEffect(() => {
    async function init() {
      const userToken = window.sessionStorage.getItem('user-token');
      if (userToken) {
        setIsAuthed(true);
        const result = await api.post('auth/decode-token', { token: userToken });
        setUserData(result.data.data);
      }
    }

    init();
  }, []);

  return <AuthContext.Provider value={{ isAuthed, userData, login, logout }}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an GeolocationProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
