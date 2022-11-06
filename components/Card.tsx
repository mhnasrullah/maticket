import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface SponsoredProps{
    image : string,
    altImage : string,
    name : string,
    desc : string,
    href : string
}

export const SponsoredCardConcert = ({image,altImage,name,desc,href} : SponsoredProps) => {
    return (
        <div className='p-2 pb-6 border-gray rounded-lg border-2 text-center'>
            <div className='relative w-full h-96'>
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
    return(
        <Link href={href}>
            <div className='p-2 pb-6 border-gray rounded-lg border-2 shadow-lg'>
                <div className='relative w-full h-48'>
                    <Image src={image} fill alt={altImage} className="object-cover object-center rounded-md"/>
                </div>
                <h1 className='mt-2 font-semibold text-lg whitespace-nowrap overflow-hidden truncate'>{name}</h1>
                <div className='h-16 mt-2 overflow-y-auto w-full mb-2 text-[gray] text-sm'>
                    {singer.map((e)=>(
                        <p key={e}>{e}</p>
                    ))}
                </div>
                <p className="text-blue font-semibold">{price} MATIC</p>
            </div>
        </Link>
    )
}


export default function Card() {
  return (
    <div>Card</div>
  )
}
