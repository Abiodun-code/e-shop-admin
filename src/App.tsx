/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { RootState, store } from './services/store/store';
import DynamicTitleProvider from './contexts/dynamicTitle';
import NotificationProvider from './contexts/notificationContext';
import Authenticated from './routes';
import { SignIn, SignUp, VerifyOtp } from './pages';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const loginToken = useSelector<RootState, string | null>((state) => state.signIn.accessToken);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem("accessToken"));

  useEffect(() => {
    if (loginToken) {
      localStorage.setItem("accessToken", loginToken);
      setIsAuthenticated(true);
    } else {
      const token = localStorage.getItem("accessToken");
      setIsAuthenticated(!!token);
    }
  }, [loginToken]);

  if (isAuthenticated === null) return null; // Prevent rendering before auth status is determined

  return (
    <div className=''>
      <Routes>

        {isAuthenticated ? (
          <Route path="/*" element={<Authenticated />} />
        ) : (
          <>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/verify-otp" element={<VerifyOtp />} />
          </>
        )}
      </Routes>
      <ToastContainer
        position='top-center'
        transition={Slide}
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ fontSize: 16, fontFamily: 'inherit' }}
      />
    </div>
  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <NotificationProvider>
      <DynamicTitleProvider>
        <App />
      </DynamicTitleProvider>
    </NotificationProvider>
  </Provider>
);

export default AppWrapper;
