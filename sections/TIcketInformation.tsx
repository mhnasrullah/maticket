import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { sliceString } from '../utils/func'
import OrderTicketInfo from '../components/OrderTicketInfo'
import { context } from '../utils/context'

export default function TIcketInformation() {
    const verified = true
    const [shortDesc,setDesc] = useState(false)

    const {title,line_up_artist,short_description,date,time,location} = useContext(context)
  return (
    <div>
        <h1 className='text-3xl mb-4 font-semibold'>{title}</h1>
        <div className='flex space-x-4 items-center mb-6 md:mb-0'>
            <div className='relative w-10 h-10 lg:w-16 lg:h-16'>
                <Image sizes='100vw' src={line_up_artist[0].image} alt={line_up_artist[0].title} fill className='rounded-full object-cover object-center'/>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center space-x-3'>
                    <h1 className='text-blue font-medium text-lg lg:text-2xl'>{line_up_artist[0].title}</h1>
                    {verified && (
                        <div className='w-3 h-3 lg:w-6 lg:h-6 relative'>
                            <Image src={"/assets/icons/verified.svg"} alt={"verified"} fill sizes='100vw'/>
                        </div>
                    )}
                </div>
            </div>
        </div>

        <div className='mt-2'>
            <h1 className='text-lg font-medium'>Description</h1>
            <p className='text-gray leading-[1.8] mt-2 text-sm md:text-base'>{shortDesc ? short_description : sliceString(short_description)}
            <button
            onClick={()=>setDesc(true)}
            className={`text-blue ${shortDesc ? 'hidden' : ' '}`}>Read more</button>
            </p>
        </div>

        <div className='flex flex-wrap mt-6 text-sm md:text-base'>
            <div className='w-1/2'>
                <p className="text-semibold text-gray">Date</p>
                <p>{date}</p>
            </div>
            <div className='w-1/2'>
                <p className="text-semibold text-gray">Time</p>
                <p>{time}</p>
            </div>
            <div className='w-1/2 mt-4'>
                <p className="text-semibold text-gray">Location</p>
                <p>{location}</p>
            </div>
        </div>

        <hr className='my-6 h-[1px] border-t-gray'/>

        <OrderTicketInfo/>

        <hr className='my-6 h-[1px] border-t-gray hidden md:block'/>
    </div>
  )
}
