import React from 'react'
import { HeaderInfo } from '../components/Info'
import Link from 'next/link'
import Nav from '../sections/Nav'
import Logo from '../components/Logo'
import { Box } from '../components/Box'
import Text from '../components/Text'
import Input from '../components/Input'
import ListArtist from '../sections/ListArtist'
import Footer from '../sections/Footer'

export default function AllArtist() {
  return (
    <div className='bg-l-gray'>
        <HeaderInfo>EVERY TICKET HAS BEEN VERIFYED AND REGISTERED ON POLYGON BLOCKCHAIN</HeaderInfo>
        <div className='flex justify-center py-8 bg-white'>
            <Link href={"/"}>
              <Logo/>
            </Link>
        </div>
        <Nav/>

        <Box className='pt-16'>
            <div className="flex flex-col md:flex-row md:items-center">
                <div className='w-full md:w-1/2'>
                    <Text
                    blackText='Find Your'
                    blueText='Favorite Band/Artist'
                    type='primary'
                    underline
                    className='w-fit'/>
                </div>

                <Input
                widthStyle='mt-4 md:mt-0 md:w-1/2 w-full h-fit'
                type={"text"}
                outline
                placeholder='find events here...'
                buttonType='icons'
                buttonContent='/assets/icons/searchIcons.svg'/>
            </div>
        </Box>

        <ListArtist/>
        <Footer/>
    </div>
  )
}
