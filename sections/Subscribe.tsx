import React from 'react'
import { Box } from '../components/Box'
import Button from '../components/Button'

export default function Subscribe() {
  return (
    <div className='py-8 md:py-12 lg:py-16 bg-blue'>
        <Box className='md:flex md:space-x-4 md:items-end md:justify-between lg:items-center'>
            <div>
                <h1 className='text-3xl font-bold lg:text-5xl leading-normal lg:leading-[1.2] text-white'>SUBSCRIBE MATICKET</h1>
                <p className='text-white lg:text-xl lg:mt-4'>Register email to get the latest info about concerts in the world</p>
            </div>
            <div className='mt-8'>
                <div className='bg-white rounded-full py-2 pl-4 pr-2 flex'>
                    <input type="text" className='outline-none w-full' placeholder='Email...'/>
                    <button className='py-2 px-4 bg-blue font-medium rounded-full text-white'>Subscribe</button>
                </div>
            </div>
        </Box>
    </div>
  )
}
