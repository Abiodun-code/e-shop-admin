import React, { createContext, useEffect, useRef, useState } from 'react'
import { notificationChild, notificationContextProps } from '../../types/notificationType'
import { useLocation } from 'react-router-dom'

export interface notificationContextProps {
  isNotify: boolean;
  setIsNotify: React.Dispatch<SetStateAction<boolean>>;
  buttonRef: MutableRefObject<null>;
  dropdownRef: MutableRefObject<null>;
  title: string;
}

export interface notificationChild {
  children: React.ReactNode;
}

export const NotificationContext = createContext({} as notificationContextProps)

const NotificationProvider = ({ children }: notificationChild) => {

  const [isNotify, setIsNotify] = useState(false)

  // This functionality is for click out and also mobile click
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
      setIsNotify(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside); // Add touchstart for mobile devices

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside); // Clean up touchstart event listener
    };
  }, []);


  return (
    <NotificationContext.Provider value={{ isNotify, setIsNotify, buttonRef, dropdownRef }}>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationProvider