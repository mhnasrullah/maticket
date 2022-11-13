import React, { useState } from 'react'
import { Box } from '../components/Box'
import Input from '../components/Input'

export default function Subscribe() {
  const [value,setValue] = useState<string>("")
  return (
    <div className='py-8 md:py-12 lg:py-16 bg-blue'>
        <Box className='md:flex md:space-x-4 md:items-end md:justify-between lg:items-center'>
            <div>
                <h1 className='text-3xl font-bold lg:text-5xl leading-normal lg:leading-[1.2] text-white'>SUBSCRIBE MATICKET</h1>
                <p className='text-white lg:text-xl lg:mt-4'>Register email to get the latest info about concerts in the world</p>
            </div>
            <div className='mt-8'>
                <Input
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                type={'text'}
                buttonType = 'text'
                buttonContent='Subscribe'
                placeholder='Email...'/>
            </div>
        </Box>
    </div>
  )
}
