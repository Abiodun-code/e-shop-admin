/* eslint-disable react-refresh/only-export-components */
import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export interface dynamicChild {
  children: ReactNode
}

export interface dynamicContextProps {
  title: string;
}

export const DynamicTitleContext = createContext({} as dynamicContextProps)

const DynamicTitleProvider = ({ children }: dynamicChild) => {

  // This functionality is for the navBar to change title dynamically and also the document title we also change
  const location = useLocation();
  const [title, setTitle] = useState('overview');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const pageTitles = {
      '/overview': 'Overview',
      '/settings': 'Settings',
      '/garage-connect': 'Garage connect admin',
    };

    const newTitle = pageTitles[location.pathname] || 'Overview';

    // Update the navbar title
    setTitle(newTitle);

    // Update the document's top title
  }, [location]);

  return (
    <DynamicTitleContext.Provider value={{ title }}>
      {children}
    </DynamicTitleContext.Provider>
  )
}

export default DynamicTitleProvider