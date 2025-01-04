/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import DynamicTitleProvider from './contexts/dynamicTitle';
import { Route, Routes } from 'react-router-dom';
import Authenticated from './routes';
import NotificationProvider from './contexts/notificationContext';
import { SignIn, SignUp } from './pages';

const App = () => {

  return (
    <NotificationProvider>
      <DynamicTitleProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/*" element={<Authenticated />} />
        </Routes>
      </DynamicTitleProvider>
    </NotificationProvider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default App;
