import React from 'react'
import gc from '../../assets/react.svg'
import { Link, NavLink } from 'react-router-dom'
import git from "../../assets/git.jpg"
import { LuLogOut } from 'react-icons/lu'
import { SideList } from './sideList'
import { truncateText } from '../../utils/TruncateText'

const SideNav = () => {
  return (
    <div className='bg-white fixed w-64 hidden xl:flex lg:flex h-screen border-r-gray-400 border-r'>
      <div className='w-full px-3 pt-5'>
      <NavLink to={'/overview'} className=''>
        <img src={gc} className='w-22 hover:rounded-md bg-center object-center' alt="" />
      </NavLink>
      <div className='flex-row pt-5 items-center space-y-2'>
        {SideList.map((item, index) => (
          <NavLink to={item.path} className={({ isActive }) =>
              `flex p-2 text-black hover:border border-gray-400 hover:rounded-xl tracking-normal items-center space-x-2  ${isActive ? 'border border-gray-400 rounded-xl text-gray-600' : ''
              }`} key={index}>
            <item.icon />
            <p className='text-base font-league font-light'>{item.name}</p>
          </NavLink>
        ))}
      </div>
      <div className=' absolute bottom-5 w-full flex justify-between items-center'>
        <div className='flex items-center space-x-2'>
          <img src={git} className='rounded-full w-7 h-7 bg-center object-center' alt="" />
          <div className='flex-row items-center'>
            <h1 className='font-inter text-xs font-semibold'>User name</h1>
            <p className='font-league font-light text-sm'>{truncateText('eshopAdmin@gmail.com', 15)}</p>
          </div>
        </div>
        <Link to={'/'} className='xl:text-lg lg:text-sm cursor-pointer pr-7 lg:pr-5'>
          <LuLogOut />
        </Link>
      </div>
    </div>
    </div>
    
  )
}

export default SideNav
