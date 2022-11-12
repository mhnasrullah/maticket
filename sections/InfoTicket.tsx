import React, { useContext, useState } from 'react'
import Button from '../components/Button'
import Image from 'next/image'
import { infoTicket } from '../utils/enum'
import { context } from '../utils/context'
import { strToArray } from '../utils/func'

interface ShowAreaProps{
    image : string;
}

const ShowArea = ({image} : ShowAreaProps) => {
    return(
        <div className='bg-l-gray px-6 py-8 lg:py-12 lg:px-8 rounded-md'>
            <div className="relative w-full h-56">
                <Image src={image} alt="area" fill className='object-contain object-center'/>
            </div>
        </div>
    )
}

interface LineUpProps{
    data : any[]
}

const LineUp = ({data} : LineUpProps) =>{
    const verified = true
    return (
        <div className='bg-l-gray px-6 py-8 lg:py-12 lg:px-8 rounded-md flex flex-col'>
            {data.map((e,i)=>(
                <div className='flex space-x-4 items-center mb-4 md:mb-0'>
                        <div className='relative w-10 h-10 lg:w-16 lg:h-16'>
                            <Image src={e.image} alt={e.title} fill className='rounded-full object-cover object-center'/>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-3'>
                                <h1 className='text-blue font-medium text-lg lg:text-2xl'>{e.title}</h1>
                                {verified && (
                                    <div className='w-3 h-3 lg:w-6 lg:h-6 relative'>
                                        <Image src={"/assets/icons/verified.svg"} alt={"verified"} fill/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
            ))}
        </div>
    )
}

interface HighlightProps{
    content :string
}

const Highlight = ({content} : HighlightProps) => {
    return (
        <div className='bg-l-gray px-6 py-8 lg:py-12 lg:px-8 rounded-md'>
            <p className='text-gray leading-[1.8] text-sm'>{content}</p>
        </div>
    )
}


interface AboutProps{
    artist : string,
    image : string,
    highlight : string,
    genre : string[]
}
const AboutInfo = ({artist,highlight,image,genre}:AboutProps) => {
    // GANTI DENGAN CONTEXT
    const verified = true

    return (
        <div className='bg-l-gray px-6 py-8 lg:py-12 lg:px-8 rounded-md'>
            <div className='flex flex-wrap justify-between md:items-center'>
                <div className='flex space-x-4 items-center mb-4 md:mb-0'>
                    <div className='relative w-10 h-10 lg:w-16 lg:h-16'>
                        <Image src={image} alt={artist} fill className='rounded-full object-cover object-center'/>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center space-x-3'>
                            <h1 className='text-blue font-medium text-lg lg:text-2xl'>{artist}</h1>
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
            <p className='text-gray mt-8 leading-[1.8] text-sm'>{highlight}</p>
            <div className="mt-8 text-sm">
                <p className='text-blue'>Genre</p>
                <div className='text-gray flex space-x-2'>
                    {genre.map((e,i)=>{
                        return (
                            <p key={i}>{e.slice(1,-1)}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


export default function InfoTicket() {

    const [activeSection,setActiveSection] = useState<infoTicket>(infoTicket.about)
    const {line_up_artist,highlight,show_areas} = useContext(context)
    
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
            {activeSection == infoTicket.about && (
                <AboutInfo
                genre={strToArray(line_up_artist[0].genre)}
                highlight={line_up_artist[0].bio}
                image={line_up_artist[0].image}
                artist={line_up_artist[0].title}/>
            )}
            {activeSection == infoTicket.highlight && (
                <Highlight
                content={highlight}/>
            )}

            {activeSection == infoTicket.line_up && (
                <LineUp
                data={line_up_artist}/>
            )}

            {activeSection == infoTicket.show_area && (
                <ShowArea
                image={show_areas}/>
            )}
        </div>
    </div>
  )
}
