import React, { useContext } from 'react'
import { HeaderInfo } from '../components/Info'
import Link from 'next/link'
import Logo from '../components/Logo'
import Nav from '../sections/Nav'
import {TicketCard } from '../components/Card'
import SliderConcert from '../sections/SliderContent'
import { Box } from '../components/Box'
import Text from '../components/Text'
import Pagination from '../components/Pagination'
import Footer from '../sections/Footer'
import {context} from '../utils/context'
import { strToArray } from '../utils/func'

export default function AllEvent() {

  const dataEvent = useContext(context)

  return (
    <div className='bg-l-gray'>
        <HeaderInfo>EVERY TICKET HAS BEEN VERIFYED AND REGISTERED ON POLYGON BLOCKCHAIN</HeaderInfo>
        <div className='flex justify-center py-8 bg-white'>
            <Link href={"/"}>
              <Logo/>
            </Link>
        </div>
        <Nav dataEvent={dataEvent}/>
        <SliderConcert
        data={dataEvent}
        blackText='Sponsored'
        blueText='Concert'
        center
        />
        <SliderConcert
        data={dataEvent}
        blackText='Recently'
        blueText='Concert'
        center/>

        <Box className='my-16'>
            <Text
            blackText='All'
            blueText='Concert'
            type='primary'
            className='w-fit'
            center
            underline
            />
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5 mt-12">
                {dataEvent.map((e : any,i:number)=>{

                  let artist:string[] = [];

                  e.line_up_artist.map((ei : any)=>{
                    artist = [
                      ...artist,
                      ei.title
                    ]
                  })

                  return (
                    <TicketCard
                    type='like'
                    key={i}
                    href='/ticket/1'
                    image={e.image}
                    name={e.title}
                    price={(strToArray(e.price)[0]).slice(1,-1)}
                    artist={artist}/>
                  )
                })
                }
            </div>
            <div className='flex justify-center md:justify-end mt-6 lg:mt-12'>
                <Pagination
                active={1}
                total={10}
                />
            </div>
        </Box>
        <Footer/>
    </div>
  )
}
