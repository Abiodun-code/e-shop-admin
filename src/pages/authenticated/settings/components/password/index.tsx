import React from 'react'
import { CustomButton, CustomInput } from '../../../../../shared'

const Password = () => {
  return (
    <div>
      <div>
        <div className='pb-7'>
          <h1 className='font-inter font-normal text-base pb-2'>Current Password</h1>
          <CustomInput placeholder='*******' />
        </div>
        <div>
          <h1 className='font-inter font-normal text-base pb-2'>Confirm Password</h1>
          <CustomInput placeholder='*******' />
        </div>
      </div>
      <div className='flex justify-end pt-20'>
        <CustomButton className='w-[20%]'>
          Update Password
        </CustomButton>
      </div>
    </div>
  )
}

export default Password