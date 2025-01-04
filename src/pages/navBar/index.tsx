import React, { useContext } from 'react'
import { MdNotifications } from 'react-icons/md'
import { NotificationContext } from '../../contexts/notificationContext'
import { DynamicTitleContext } from '../../contexts/dynamicTitle'
import Notification from './notification'

const NavBar = () => {

  const { isNotify, setIsNotify, buttonRef, dropdownRef } = useContext(NotificationContext)

  const { title } = useContext(DynamicTitleContext)

  return (
    <div className='container xl:max-w-[100%] lg:max-w-[100%] border-b  border-b-gray-400'>
      <div className='flex w-full items-center justify-between py-2 px-5 '>
        <div className='flex items-center xl:space-x-0 lg:space-x-0 space-x-2'>
          <h1 className='text-xs font-medium  uppercase font-inter'>{title}</h1>
        </div>
        <div className=' p-1 bg-gray-200 relative rounded-full text-xl' ref={buttonRef}>
          <MdNotifications onClick={() => setIsNotify(!isNotify)} className='cursor-pointer text-gray-900' />
          {isNotify && <Notification dropdownRef={dropdownRef} />}
        </div>
      </div>
    </div>
  )
}

export default NavBar