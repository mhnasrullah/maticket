import React from 'react'
import { HeaderInfo } from '../components/Info'
import Link from 'next/link'
import Logo from '../components/Logo'
import Nav from '../sections/Nav'
import BreadCrumb from '../components/Breadcrumb'
import { Box } from '../components/Box'
import Image from 'next/image'
import BannerTicket from '../sections/BannerTicket'
import InfoTicket from '../sections/InfoTicket'
import TIcketInformation from '../sections/TIcketInformation'
import Text from '../components/Text'
import Button from '../components/Button'
import Swiper, { SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import 'swiper/css';
import 'swiper/css/navigation';
import MoreFromArtist from '../sections/MoreFromArtist'
import { TicketCard } from '../components/Card'
import Footer from '../sections/Footer'

const Related = ['World','Pop']

export default function DetailTicket() {
  return (
    <div>
        <HeaderInfo>EVERY TICKET HAS BEEN VERIFYED AND REGISTERED ON POLYGON BLOCKCHAIN</HeaderInfo>
        <div className='flex justify-center py-8 bg-white'>
            <Link href={"/"}>
              <Logo/>
            </Link>
        </div>
        <Nav/>
        <Box className='mt-16'>
          <BreadCrumb
            list={[
              {
                name : 'All Event',
                href : '/'
              },
              {
                name : 'Ticket',
                href : '/'
              },
              {
                name : 'Justice World Tour'
              }
            ]}
          />
          <div className='md:flex pt-6 md:space-x-8'>
            <div className='md:w-3/5'>
              <BannerTicket/>
              <InfoTicket/>
            </div>
            <div className='md:w-2/5'>
              <TIcketInformation/>
            </div>
          </div>
          <div className='mt-6'>
            <Text
            blackText='Related'
            blueText='Concerts'
            type='primary'
            className='w-fit'
            underline/>
            <div className='mt-6 flex flex-wrap'>
                {Related.map((e,i)=>(
                    <Button className='mr-2 mt-1' style='secondary' type='button' key={i}>{e}</Button>
                ))}
            </div>
          </div>
        </Box>


        <MoreFromArtist/>

      <div className='py-16 bg-l-gray mt-16'>
        <Box>
            <Text
            blackText='Recommended'
            blueText='Concerts'
            type='primary'
            className='w-fit'
            underline/>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-12'>
              {[...Array(4)].map((e,i)=>(
                <TicketCard
                type='like'
                key={i}
                artist={['Juan Marley']}
                href='/ticket/1'
                image='/assets/images/jumbo.jpg'
                name='Jakarta Peace Concert'
                price='10,00'/>
              ))}
            </div>
        </Box>
      </div>
      <Footer/>

    </div>
  )
}
