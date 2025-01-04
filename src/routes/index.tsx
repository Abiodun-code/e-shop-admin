import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SideNav from '../pages/sideNav'
import NavBar from '../pages/navBar'
import { GarageConnectAdmin, Home, Settings } from '../pages'

const Authenticated = () => {
  return (
    <div className='xl:flex lg:flex hidden h-auto '>
      <SideNav />
      <div className='ml-64 mx-auto flex-1 overflow-y-auto w-auto h-auto'>
        <NavBar />
        <Routes>
          <Route path='/overview' element={<Home />} />
          <Route path='/garage-connect' element={<GarageConnectAdmin />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default Authenticated