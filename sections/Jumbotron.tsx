import React,{useState} from 'react'
import { Box } from '../components/Box'
import Button from '../components/Button'
import styled from 'styled-components'
import Image from 'next/image'
import {activeSection} from '../utils/enum'
import { strToArray } from '../utils/func'

interface ArtistProps{
    data : {
        banner : string | undefined,
        name : string,
        image : string,
        verified : boolean,
        country : string,
        website : string,
        genre : string,
        instagram : string,
        twitter : string,
        facebook : string
    },
    sectionChange : (e : activeSection)=>void
}

export const ArtistJumbo = (
    {
        data :{banner,name,image,verified,country,website,genre,instagram,twitter,facebook},
        sectionChange
    } : ArtistProps) => {


    const [activedSection,setActived] = useState<activeSection>(activeSection.allTicket);

    return (
        <div className='bg-white'>
            <div className='relative w-full h-56 md:h-64'>
                {banner && (
                    <Image src={banner} alt={name} fill sizes='100vw' className='object-cover object-center'/>
                )}
            </div>
            <div className='-mt-12 md:-mt-16 lg:-mt-24 px-4 md:px-8 lg:px-16 border-[1px] border-t-0 border-[gray] rounded-sm'>
                <div className='relative w-24 md:w-32 md:h-32 lg:w-48 lg:h-48 h-24 rounded-full border-4 lg:border-8 border-white'>
                    <Image src={image} fill sizes='100vw' alt={name} className="object-cover object-center rounded-full"/>
                </div>
                <div>
                    <div className='flex justify-between items-center mt-2 lg:mt-4'>
                        <div className='flex items-center space-x-3'>
                            <h1 className='text-blue font-medium text-lg lg:text-2xl'>{name}</h1>
                            {verified && (
                                <div className='w-3 h-3 lg:w-6 lg:h-6 relative'>
                                    <Image src={"/assets/icons/verified.svg"} alt={"verified"} fill sizes='100vw'/>
                                </div>
                            )}
                        </div>
                        <button className='relative w-6 h-6  hidden lg:block'>
                            <Image src={"/assets/icons/share.svg"} fill sizes='100vw' alt='share'/>
                        </button>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:items-center lg:mt-4 lg:space-x-16'>
                        <div className='flex space-x-2 mt-1 items-center'>
                            <p className='text-sm md:text-base'>{country}</p>
                        </div>
                        <div className='mt-4 lg:mt-0 flex space-x-3 lg:space-x-6 items-center'>
                            <a href={instagram} target={'_blank'} rel={"noopener noreferrer"}>
                                <div className='relative w-8'>
                                    <Image src={"/assets/icons/instagramout.svg"} width={50} height={50} alt="instagram"/>
                                </div>
                            </a>
                            <a href={facebook} target={'_blank'} rel={"noopener noreferrer"}>
                                <div className='relative w-8'>
                                    <Image src={"/assets/icons/facebookout.svg"} width={50} height={50} alt="facebook"/>
                                </div>
                            </a>
                            <a href={twitter} target={'_blank'} rel={"noopener noreferrer"}>
                                <div className='relative w-8'>
                                    <Image src={"/assets/icons/twitterout.svg"} width={50} height={50} alt="twitter"/>
                                </div>
                            </a>
                            <button className='relative w-5 h-5 lg:hidden'>
                                <Image src={"/assets/icons/share.svg"} fill alt='share' sizes='100vw'/>
                            </button>
                        </div>
                    </div>
                    <div className='flex space-x-2 mt-4 lg:mt-6 lg:space-x-16'>
                        <p className='text-xs lg:text-base'>Joined : 01-01-2022</p>
                        <a href={website} target={'_blank'} rel={"noopener noreferrer"} className='text-xs lg:text-base'>{website}</a>
                    </div>
                </div>
                <div className='mt-6 lg:mt-12'>
                    <h1 className='text-blue font-medium text-lg lg:text-xl'>All Concerts :</h1>
                    <div className='space-y-2 mt-2 lg:mt-4 md:flex md:space-y-0 md:space-x-8'>
                        <div className='flex items-center space-x-2'>
                            <div className='relative w-9'>
                                <Image src={'/assets/icons/bigConcert.svg'} width={40} height={40} alt="Big Concerts"/>
                            </div>
                            <p className='text-sm md:text-base'>15 Big Concerts</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <div className='relative w-9'>
                                <Image src={'/assets/icons/localConcert.svg'} width={40} height={40} alt="Local Concerts"/>
                            </div>
                            <p className='text-sm md:text-base'>121 Local Concerts</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <div className='relative w-9'>
                                <Image src={'/assets/icons/worldConcert.svg'} width={40} height={40} alt="World Concerts"/>
                            </div>
                            <p className='text-sm md:text-base'>10 World Tour Concerts</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 mt-2 lg:mt-4">
                        {strToArray(genre).map((e,i)=>(
                            <Button
                            key={i}
                            style='secondary'
                            type='button'
                            >{e.slice(1,-1)}</Button>
                        ))}
                    </div>
                </div>
                <div className='mt-6 lg:mt-10'>
                    <button
                    onClick={()=>{
                        sectionChange(activeSection.bio)
                        setActived(activeSection.bio)
                    }}
                    className={`py-2 px-4 border-b-2 ${activedSection === activeSection.bio ? "border-b-blue text-blue" : "border-b-trans"}`}>Bio</button>
                    <button
                    onClick={()=>{
                        sectionChange(activeSection.allTicket)
                        setActived(activeSection.allTicket)
                    }}
                    className={`py-2 px-4 border-b-2 ${activedSection === activeSection.allTicket ? "border-b-blue text-blue" : "border-b-trans"}`}>All Tickets</button>
                    <button
                    onClick={()=>{
                        sectionChange(activeSection.post)
                        setActived(activeSection.post)
                    }}
                    className={`py-2 px-4 border-b-2 ${activedSection === activeSection.post ? "border-b-blue text-blue" : "border-b-trans"}`}>Posts</button>
                </div>
            </div>
        </div>
    )
}



const JumboBox = styled.div`
    background-image : url('/assets/images/jumbo.jpg');
`

export default function Jumbotron() {
  return (
    <JumboBox className={`h-[600px] text-white bg-cover bg-center`}>
        <Box className='flex items-end h-full md:items-center pb-16 md:pb-0'>
            <div className='md:w-2/3 lg:w-1/2'>
                <h1 className='text-3xl font-bold lg:text-5xl leading-normal lg:leading-[1.2]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad facilis dolorum</h1>
                <p className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, eum! Excepturi, numquam vero! Iste optio ab in officia modi qui sit obcaecati.</p>
                <div className="mt-8">
                    <Button
                    style='primary'
                    type='link'
                    href='/allEvent'
                    >Explore All Concerts</Button>
                </div>
            </div>
        </Box>
    </JumboBox>
  )
}
