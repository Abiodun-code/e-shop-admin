import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gc from "../../../assets/react.svg"
import { CustomButton, CustomInput } from '../../../shared/index'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../services/store/store'
import { toast } from 'react-toastify'
import { signUpUser } from '../../../services/store/not-authenticated/sign-up/SignUpThunk'
import { signInUser } from '../../../services/store/not-authenticated/sign-in/signInThunk'

const SignUp = () => {
  useEffect(() => {
    document.title = 'Register - E-shop Admin'
  }, [])

  const [ownerName, setOwnerName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [companyEmail, setCompanyEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const { error, isLoading, success } = useSelector<RootState>((state) => state.signUp)

  const handleSignUp = () => {
    if (!companyEmail) {
      toast.error('Email is required');
      return;
    }

    if (!password) {
      toast.error('Password is required');
      return;
    }

    if (!ownerName) {
      toast.error('Owner name is required');
      return;
    }

    if (!companyName) {
      toast.error('Company name is required');
      return;
    }

    dispatch<any>(signUpUser({ firstName: ownerName, lastName: companyName, email: companyEmail, password }));
  };

  useEffect(() => {
    if (error) {
      toast.error(error); // Display backend error message
    }
    if (success) {
      toast.success('Move to the next step 👋');
    }
  }, [error, success]);
  
  return (
    <div className='h-screen'>
      <Link to={'/register'}>
        <img src={gc} className='w-22 p-4' alt="" />
      </Link>
      <div className='flex xl:mx-auto lg:mx-auto md:mx-auto xl:p-10 lg:p-5 md:p-5 p-3 items-center justify-center bg-white h-[90vh] max-w-auto xl:max-w-[35%] lg:max-w-[45%] md:max-w-[70%]'>
        <div className="flex-col xl:justify-start w-full xl:items-start items-center justify-center">
          <div className='space-y-1  mb-10'>
            <h1 className='font-inter font-medium text-2xl text-gray-800'>Create an account</h1>
            <p className='font-inter font-extralight text-xl text-gray-800'>Welcome! to Eshop</p>
          </div>
          <div className='space-y-5 mb-8'>
            <CustomInput className='' placeholder='Owner Name' value={ownerName} onChange={(e)=>setOwnerName(e.target.value)} />
            <CustomInput className='' placeholder='Company Name' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            <CustomInput className='' placeholder='Company Email' value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} />
            <CustomInput placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <CustomButton onClick={handleSignUp} to={"/verify-otp"} state={{companyEmail,  password}}>Sign Up</CustomButton>
          <div className='pt-4 text-center'>
            <p className='font-inter font-medium text-gray-800'>Already have an account? <Link to={'/'} className='text-blue-500'>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp