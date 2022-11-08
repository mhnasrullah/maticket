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
    </div>
  )
}
