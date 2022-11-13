import React, { useContext} from 'react'
import Image from 'next/image'
import { context } from '../utils/context'

export default function BannerTicket() {

    const {image} = useContext(context)
  return (
    <div>
        <div className="flex flex-col md:flex-row-reverse">
            <div className="relative w-full h-72 md:h-[500px]">
                <Image src={image} className="object-cover object-center" fill  sizes={'100vw'} alt="img"/>
            </div>
            {/* <div className="flex w-full md:w-fit md:flex-col md:space-x-0 md:py-0 md:space-y-2 md:mr-2 overflow-x-auto md:overflow-x-hidden md:overflow-y-auto md:h-[500px] space-x-2 py-2">
            {[...Array(8)].map((e,i)=>(
                <button key={i} onClick={()=>setShow('/assets/images/jumbo.jpg')}>
                    <div className="relative min-w-[40px] md:min-w-[80px] md:min-h-[80px] min-h-[40px]">
                        <Image src={'/assets/images/jumbo.jpg'} className="object-cover object-center" fill sizes={'100vw'} alt="img"/>
                    </div>
                </button>
            ))}
            </div> */}
        </div>
        <div className='flex justify-center space-x-6 mt-4 lg:mt-8'>
            <button className='flex items-center text-sm md:text-base'>
            <div className="p-2 bg-l-gray rounded-full mr-2">
                <div className='relative w-3 md:w-4'>
                    <Image src={'/assets/icons/share.svg'} alt="share" width={100} height={100}/>
                </div>
            </div>
            share
            </button>
            <button className='flex items-center text-sm md:text-base'>
            <div className="p-2 bg-l-gray rounded-full mr-2">
                <div className='relative w-3 md:w-4'>
                    <Image src={'/assets/icons/Heart.svg'} alt="like" width={100} height={100}/>
                </div>
            </div>
            Favorit
            </button>
        </div>
    </div>
  )
}
