import React, { useState } from 'react'
import Image from 'next/image'
import { sliceString } from '../utils/func'
import OrderTicketInfo from '../components/OrderTicketInfo'
import Text from '../components/Text'
import Button from '../components/Button'

const descDummy = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum magnam dolore quia, consequatur officiis rerum doloribus, eum veniam totam provident ea eaque reiciendis sint assumenda mollitia laudantium, aut dignissimos maxime tempora! Eaque, officia? Magnam, architecto! Impedit, aperiam. Voluptates hic neque mollitia, non voluptas ut architecto dicta nisi libero nobis!'



export default function TIcketInformation() {
    const verified = true

    const [shortDesc,setDesc] = useState(false)
  return (
    <div>
        <h1 className='text-3xl mb-4 font-semibold'>Justice World Tour</h1>
        <div className='flex space-x-4 items-center mb-6 md:mb-0'>
            <div className='relative w-10 h-10 lg:w-16 lg:h-16'>
                <Image src={'/assets/images/jumbo.jpg'} alt="justin beiber" fill className='rounded-full object-cover object-center'/>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center space-x-3'>
                    <h1 className='text-blue font-medium text-lg lg:text-2xl'>Justin Beiber Official</h1>
                    {verified && (
                        <div className='w-3 h-3 lg:w-6 lg:h-6 relative'>
                            <Image src={"/assets/icons/verified.svg"} alt={"verified"} fill/>
                        </div>
                    )}
                </div>
            </div>
        </div>

        <div className='mt-2'>
            <h1 className='text-lg font-medium'>Description</h1>
            <p className='text-gray leading-[1.8] mt-2 text-sm md:text-base'>{shortDesc ? descDummy : sliceString(descDummy)}
            <button
            onClick={()=>setDesc(true)}
            className={`text-blue ${shortDesc ? 'hidden' : ' '}`}>Read more</button>
            </p>
        </div>

        <div className='flex flex-wrap mt-6 text-sm md:text-base'>
            <div className='w-1/2'>
                <p className="text-semibold text-gray">Date</p>
                <p>Lorem, ipsum.</p>
            </div>
            <div className='w-1/2'>
                <p className="text-semibold text-gray">Time</p>
                <p>Lorem, ipsum.</p>
            </div>
            <div className='w-1/2 mt-4'>
                <p className="text-semibold text-gray">Location</p>
                <p>Lorem, ipsum.</p>
            </div>
        </div>

        <hr className='my-6 h-[1px] border-t-gray'/>

        <OrderTicketInfo/>

        <hr className='my-6 h-[1px] border-t-gray hidden md:block'/>
    </div>
  )
}
