import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gc from "../../../../assets/react.svg"
import { CustomButton, CustomInput } from '../../../../shared/index'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import OtpInput from 'react-otp-input';
import { RootState } from '../../../../services/store/store'
import { verifyOtp } from '../../../../services/store/not-authenticated/sign-up/SignUpThunk'
import { signInUser } from '../../../../services/store/not-authenticated/sign-in/signInThunk'

const VerifyOtp = () => {

  const location = useLocation();
  const { companyEmail, password } = location.state || {}; // Get email from state

  const { error, isLoading, success } = useSelector<RootState>((state) => state.signUp)

  const [otp, setOtp] = useState('');

  const dispatch = useDispatch()

  const handleVerifyOtp = async () => {
    if (!otp) {
      toast.error('OTP is required');
      return;
    }

    try {
      // Verify otp
      const verified = await dispatch<any>(verifyOtp({ email: companyEmail, otp: Number(otp) }));

      // If otp is verified, log the user in
      if (verified.meta.requestStatus === 'fulfilled') {
        await dispatch<any>(signInUser({ email: companyEmail, password }));
        toast.success('Successfully logged in 🎉');
      }
    } catch (err) {
      console.error('Error during otp verification:', err);
    }
  }

  useEffect(() => {
      if (error) {
        toast.error(error); // Display backend error message
      }
      if (success) {
        toast.success('Sign up successful 👋');
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
            <h1 className='font-inter font-medium text-2xl text-gray-800'>Verify your otp </h1>
            <p className='font-inter font-extralight text-xl text-gray-800'>Welcome! to Eshop</p>
          </div>
          <div className='space-y-5 mb-8'>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              containerStyle={{gap: '1rem', justifyContent: 'center'}}
              inputStyle={{ width: '3rem', height: '3rem', fontSize: '2rem',  borderRadius: '5px', border: '1px solid #ccc' }}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <CustomButton onClick={handleVerifyOtp}>Verify otp</CustomButton>
        </div>
      </div>
    </div>
  )
}

export default VerifyOtp