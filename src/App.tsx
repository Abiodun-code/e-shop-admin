/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { RootState, store } from './services/store/store';
import DynamicTitleProvider from './contexts/dynamicTitle';
import NotificationProvider from './contexts/notificationContext';
import Authenticated from './routes';
import { SignIn, SignUp } from './pages';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const loginToken = useSelector<RootState, string | null>((state) => state?.signIn.accessToken);

  useEffect(() => {
    const checkAuthStatus = () => {
      try {
        const token = localStorage.getItem("accessToken");
        setIsAuthenticated(!!token);
      } catch (error) {
        console.error("Error checking auth status:", error);
        setIsAuthenticated(false);
      }
    };
    checkAuthStatus();
  }, []);

  useEffect(() => {
    if (loginToken) setIsAuthenticated(true);
    else setIsAuthenticated(false);
  }, [loginToken]);

  if (isAuthenticated === null) return null; // Prevent rendering before auth status is determined

  return (
    <NotificationProvider>
      <DynamicTitleProvider>
        <Routes>

          {isAuthenticated ? (
            <Route path="/*" element={<Authenticated />} />
          ): (
            <>
              <Route path="/" element={<SignIn />} />
              <Route path="/register" element={<SignUp />} />
            </>
          )}
            
            
        </Routes>
      </DynamicTitleProvider>
    </NotificationProvider>
  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
