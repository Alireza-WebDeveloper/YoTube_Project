import React from 'react';
import { useState } from 'react';
const ActiveSidebarContext = React.createContext();

const ActiveSideBarStore = (props) => {
  const [activeTab, setActiveTab] = useState('New');
  const updateActiveTab = (name) => {
    setActiveTab(name);
  };
  return (
    <ActiveSidebarContext.Provider value={{ activeTab, updateActiveTab }}>
      {props.children}
    </ActiveSidebarContext.Provider>
  );
};

export { ActiveSidebarContext, ActiveSideBarStore };
