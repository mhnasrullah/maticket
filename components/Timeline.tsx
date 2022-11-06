import React from 'react'
import { dataTimeline } from './Card'

export default function Timeline({date,description,title}:dataTimeline) {
  return (
    <div className='flex space-x-3 mb-4'>
        <p className='text-sm text-gray mt-[2px]'>{date}</p>
        <div className='flex flex-col items-center mt-[2px]'>
            <div className="bg-blue min-w-[18px] min-h-[18px] rounded-full"></div>
            <div className="w-[2px] h-full bg-blue mt-2"></div>
        </div>
        <div>
            <h1 className='font-medium text-lg'>{title}</h1>
            <p className='text-sm pb-4'>{description}</p>
        </div>
    </div>
  )
}
