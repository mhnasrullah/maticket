import React, { useState } from 'react'
import Button from '../components/Button'
import Image from 'next/image'
import { infoTicket } from '../utils/enum'

const AboutInfo = () => {
    // GANTI DENGAN CONTEXT
    const verified = true

    return (
        <div className='bg-l-gray px-6 py-8 lg:py-12 lg:px-8 rounded-md'>
            <div className='flex flex-wrap justify-between md:items-center'>
                <div className='flex space-x-4 items-center mb-4 md:mb-0'>
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
                <Button
                className='h-fit'
                type='link'
                style='secondary'>View Event</Button>
            </div>
            <p className='text-gray mt-8 leading-[1.8] text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto non vel iusto? Dolore, dolor nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, possimus.</p>
            <div className="mt-8 text-sm">
                <p className='text-blue'>Genre</p>
                <p className='text-gray'>Pop, RnB</p>
            </div>
        </div>
    )
}


export default function InfoTicket() {

    const [activeSection,setActiveSection] = useState<infoTicket>(infoTicket.about)
    
  return (
    <div className='py-12'>
        <div className='flex text-sm lg:text-base font-medium overflow-x-auto py-2'>
            <button 
            onClick={()=>setActiveSection(infoTicket.about)}
            className={`px-3 py-1 lg:px-5 lg:py-2 border-b-2 whitespace-nowrap ${activeSection == infoTicket.about ? 'border-b-blue text-blue' : 'border-trans'}`}>
                About
            </button>
            <button 
            onClick={()=>setActiveSection(infoTicket.highlight)}
            className={`px-3 py-1 lg:px-5 lg:py-2 border-b-2 whitespace-nowrap ${activeSection == infoTicket.highlight ? 'border-b-blue text-blue' : 'border-trans'}`}>
                Highlight
            </button>
            <button 
            onClick={()=>setActiveSection(infoTicket.line_up)}
            className={`px-3 py-1 lg:px-5 lg:py-2 border-b-2 whitespace-nowrap ${activeSection == infoTicket.line_up ? 'border-b-blue text-blue' : 'border-trans'}`}>
                Line Up
            </button>
            <button 
            onClick={()=>setActiveSection(infoTicket.show_area)}
            className={`px-3 py-1 lg:px-5 lg:py-2 border-b-2 whitespace-nowrap ${activeSection == infoTicket.show_area ? 'border-b-blue text-blue' : 'border-trans'}`}>
                Show Area
            </button>
            <button 
            onClick={()=>setActiveSection(infoTicket.maps)}
            className={`px-3 py-1 lg:px-5 lg:py-2 border-b-2 whitespace-nowrap ${activeSection == infoTicket.maps ? 'border-b-blue text-blue' : 'border-trans'}`}>
                Maps
            </button>
        </div>
        <div className='mt-6'>
            <AboutInfo/>
        </div>
    </div>
  )
}
