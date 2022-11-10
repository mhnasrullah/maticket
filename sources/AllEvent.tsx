import React from 'react'
import { HeaderInfo } from '../components/Info'
import Link from 'next/link'
import Logo from '../components/Logo'
import Nav from '../sections/Nav'
import {  SponsoredCardConcert, TicketCard } from '../components/Card'
import SponsoredConcert from '../sections/SliderContent'
import RecentlyConcert from '../sections/RecentlyConcert'
import { Box } from '../components/Box'
import Text from '../components/Text'
import Pagination from '../components/Pagination'
import Footer from '../sections/Footer'

export default function AllEvent() {
  return (
    <div className='bg-l-gray'>
        <HeaderInfo>EVERY TICKET HAS BEEN VERIFYED AND REGISTERED ON POLYGON BLOCKCHAIN</HeaderInfo>
        <div className='flex justify-center py-8 bg-white'>
            <Link href={"/"}>
              <Logo/>
            </Link>
        </div>
        <Nav/>
        <SponsoredConcert
        blackText='Sponsored'
        blueText='Concert'
        center
        />
        <SponsoredConcert
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
                {[...Array(10)].map((e,i)=>(
                    <TicketCard
                    type='like'
                    key={i}
                    href='/ticket/1'
                    image='/assets/images/jumbo.jpg'
                    name='Jakarta Peace Conncert'
                    price='10,00'
                    artist={['Juan Marley']}/>
                ))}
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
