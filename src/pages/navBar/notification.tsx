import React from 'react'

interface Props{
  dropdownRef: React.MutableRefObject<null>
}
const Notification = ({dropdownRef}:Props) => {
  return (
    <div className='rounded-lg shadow-sm absolute bg-white w-[40vh] h-[50vh] z-10 border  border-gray-400 right-0 top-8 ' ref={dropdownRef}>
      <div className='p-4'>
        <h1 className='text-sm font-medium  uppercase font-inter'>Notifications</h1>
      </div>
    </div>
  )
}

export default Notification