import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Timeline from './Timeline'

export type dataTimeline = {
    date : string,
    title : string,
    description : string
}

interface TimelineProps{
    title : string,
    data : dataTimeline[],
    href : string
}

const dataTime = [1,2,3,4,5,6,7,8,9];

export const TimelineCard = ({
    title,
    data,
    href
} : TimelineProps) => {
    return (
        <div className='bg-white rounded-sm border-[gray] border-[1px] py-6 px-4'>
            <h1 className='mb-4 font-medium'>{title}</h1>
            <div className='mb-6'>
                {data.map((e,i)=>(
                    <Timeline
                    key={i}
                    title={e.title}
                    description={e.description}
                    date={e.date}
                    />
                ))}
            </div>
            <Link href={href} className="text-blue font-semibold" >View More
                <div className='relative w-3 h-3 inline-block ml-3'>
                    <Image src={"/assets/icons/more.svg"} alt="more" fill/>
                </div>
            </Link>
        </div>
    )
}

interface RecentProps{
    time : string,
    artist : string
}

const BoxRecent = styled.div`
    background-image : url("/assets/images/bgRecent.jpg")
`

export const RecentCard = ({time,artist} : RecentProps) => {
    return (
        <BoxRecent className='w-full h-72 flex flex-col justify-between'>
            <div className='bg-[#ffffff55] w-full py-4 px-8 text-white'>
                <p>{artist} live</p>
            </div>
            <div className='px-8 pb-8'>
                <div className='bg-[#ffffff55] flex items-center space-x-2 w-full py-2 px-4 text-white'>
                    <div className='relative w-8'>
                        <Image src={'/assets/icons/time.svg'} width={50} height={50} alt="time"/>
                    </div>
                    <div>
                        <p className='text-sm'>Fri - Sun</p>
                        <p className='font-medium'>{time}</p>
                    </div>
                </div>
            </div>
        </BoxRecent>
    )
}

interface TicketCardProps{
    image : string,
    name : string,
    artist : string,
    price : string,
    href : string,
    sold? : number
}

export const TicketCard = ({artist,image,name,price,sold,href} : TicketCardProps) => {
    return (
        <Link href={href}>
            <div className="relative">
                <div className="absolute bg-white px-2 py-1 rounded-full text-sm text-blue top-4 right-4 z-20">{sold} SOLD</div>
                <div className='p-2 pb-6 border-gray rounded-lg border-2'>
                    <div className='relative w-full h-64 lg:h-72'>
                        <Image src={image} fill className="object-cover object-center rounded-md" alt={name}/>
                    </div>
                    <h1 className='mt-4 font-semibold text-lg lg:text-xl'>{name}</h1>
                    <p className='text-[gray] h-10 mb-4 overflow-hidden text-sm md:text-base'>{artist}</p>
                    <p className="text-blue font-semibold">{price} MATIC</p>
                </div>
            </div>
        </Link>
    )
}

interface SponsoredProps{
    image : string,
    altImage : string,
    name : string,
    desc : string,
    href : string,
    showPerSlideonLarge : number
}

export const SponsoredCardConcert = ({image,altImage,name,desc,href,showPerSlideonLarge} : SponsoredProps) => {

    let heightImage : string | undefined;

    if(showPerSlideonLarge == 3){
        heightImage = 'h-96'
    }else if(showPerSlideonLarge == 4){
        heightImage = 'h-80'
    }

    return (
        <div className='p-2 pb-6 border-gray rounded-lg border-2 text-center'>
            <div className={`relative w-full ${heightImage}`}>
                <Image src={image} fill alt={altImage} className="object-cover object-center rounded-md"/>
            </div>
            <h1 className='mt-6 font-semibold text-3xl'>{name}</h1>
            <p className='text-[gray] mt-3 h-16 mb-4 overflow-hidden lg:px-6 text-sm md:text-base'>{desc}</p>
            <Link href={href} className="text-blue font-semibold">SEE TICKET</Link>
        </div>
    )
}

interface RecentlyProps{
    image : string,
    altImage : string,
    name : string,
    singer : string[],
    href : string,
    price : string
}

export const RecentlyCardConcert = ({altImage,href,image,name,price,singer} : RecentlyProps) => {
    
    const [liked,setLiked] = useState<boolean>(false);

    return(
        <div className='relative'>
            <button className="absolute p-1 rounded-full top-4 right-4 z-20 bg-white" onClick={()=>console.log("clicked",name)}>
                <Image src={'/assets/icons/Heart.svg'} width={20} height={20} alt="like"/>
            </button>
            <Link href={href}>
                <div className='p-2 pb-6 border-gray rounded-lg border-2 shadow-lg relative'>
                    <div className='relative w-full h-48'>
                        <Image src={image} fill alt={altImage} className="object-cover object-center rounded-md"/>
                    </div>
                    <h1 className='mt-2 font-semibold md:text-lg whitespace-nowrap overflow-hidden truncate'>{name}</h1>
                    <div className='h-10 lg:text-sm lg:h-16 mt-2 overflow-y-auto w-full mb-2 text-[gray] text-xs'>
                        {singer.map((e)=>(
                            <p key={e}>{e}</p>
                        ))}
                    </div>
                    <p className="text-blue font-semibold">{price} MATIC</p>
                </div>
            </Link>
        </div>
    )
}


export default function Card() {
  return (
    <div>Card</div>
  )
}
