import React, { useEffect } from 'react'
import Overview from './components/overview'
import Metrics from './components/Metrics'

const Home = () => {

  useEffect(() => {
    document.title = 'Overview - Garage Connect'
  }, [])
  
  return (
    <div className='container w-full mx-auto xl:max-w-[100%] lg:max-w-[100%]'>
      <div className='flex-row w-full items-center justify-between py-5 px-5 border-b-gray-400 border-b'>
        <h1 className='text-lg font-medium  uppercase font-inter'>Overview</h1>
        <p className='text-base font-league font-normal text-gray-400'>Keep updated on recent activities here</p>
      </div>
      <div className='px-4 pt-5'>
        <Overview />
      </div>
      <Metrics />
    </div>
  )
}

export default Home