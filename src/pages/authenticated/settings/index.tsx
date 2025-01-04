import React, { useState } from 'react'
import Password from './components/password';

const Settings = () => {

  const [activeTab, setActiveTab] = useState("Password");

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };
  return (
    <div className='container w-full mx-auto xl:max-w-[100%] lg:max-w-[100%]'>
      <div className='flex-row w-full items-center justify-between py-5 px-5 border-b-gray-400 border-b'>
        <h1 className='text-lg font-medium  uppercase font-inter'>Overview</h1>
        <p className='text-base font-league font-normal text-gray-400'>Keep updated on recent activities here</p>
      </div>
      {/* Tabs */}
      <div className="flex border-b pt-5">
        <button
          className={`py-2 px-4 ${activeTab === "Team"
              ? "border-b-2 border-indigo-500 font-inter font-medium"
              : "text-gray-500 font-inter"
            }`}
          onClick={() => handleTabClick("Team")}
        >
          Team
        </button>
        <button
          className={`py-2 px-4 ${activeTab === "Password"
              ? "border-b-2 border-indigo-500 font-inter font-medium"
              : "text-gray-500 font-inter"
            }`}
          onClick={() => handleTabClick("Password")}
        >
          Password
        </button>
      </div>

      {/* Dynamic Content */}
      {activeTab === "Password" && (
        <div className='px-4 pt-5'>
          <Password/>
        </div>
      )}

      {activeTab === "Team" && (
        <div className='flex items-center justify-center'>
          <p className="text-gray-500">Team management functionality here.</p>
        </div>
      )}
    </div>
  )
}

export default Settings