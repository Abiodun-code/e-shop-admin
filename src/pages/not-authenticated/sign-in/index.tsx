/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import gc from "../../../assets/react.svg"
import { CustomButton, CustomInput } from '../../../shared/index'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../services/store/store'
import { signInUser } from '../../../services/store/not-authenticated/sign-in/signInThunk'

const SignIn = () => {

  useEffect(() => {
    document.title = 'Login - E-shop Admin'
  }, [])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const {error, isLoading} = useSelector((state: RootState)=>state.signIn)


  const handleSignIn = ()=>{
    if (!email) {
      alert('Email is required')
    }
    if (!password) {
      alert('Password is required')
    }
    dispatch<any>(signInUser({email:email, password:password}))
  }


  return (
    <div className='h-screen'>
      <Link to={'/'}>
        <img src={gc} className='w-22 p-4' alt="" />
      </Link>
      <div className='flex xl:mx-auto lg:mx-auto md:mx-auto xl:p-10 lg:p-5 md:p-5 p-3 items-center justify-center bg-white h-[90vh] max-w-auto xl:max-w-[35%] lg:max-w-[45%] md:max-w-[70%]'>
        <div className="flex-col xl:justify-start w-full xl:items-start items-center justify-center">
          <div className='space-y-1  mb-10'>
            <h1 className='font-inter font-medium text-2xl text-gray-800'>Login to your account</h1>
            <p className='font-inter font-extralight text-xl text-gray-800'>Welcome back! Please enter your details</p>
          </div>
          <div className='space-y-5 mb-8'>
            <CustomInput placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email} type='email' />
            <CustomInput placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password} type='password' />
            <CustomButton className='bg-white text-blue-400 font-inter font-medium text-md text-right'>Forget password</CustomButton>
          </div>
          <div>
            <CustomButton onClick={handleSignIn}>Login</CustomButton>
          </div>
          <div className='pt-4 text-center'>
            <p className='font-inter font-medium text-gray-800'>Don't have an account? <Link to={'/register'} className='text-blue-500'>Sign up now</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn