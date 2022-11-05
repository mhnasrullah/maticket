import React from 'react'
import { Box } from '../components/Box'
import { HeaderInfo } from '../components/Info'
import Logo from '../components/Logo'
import { GenreJumbo } from '../sections/Genre'
import Jumbotron from '../sections/Jumbotron'
import Nav from '../sections/Nav'
import SponsoredConcert from '../sections/SponsoredConcert'

export default function Home() {
  return (
    <>
        <HeaderInfo>EVERY TICKET HAS BEEN VERIFYED AND REGISTERED ON POLYGON BLOCKCHAIN</HeaderInfo>
        <div className='flex justify-center py-8'>
            <Logo/>
        </div>
        {/* <Nav /> */}
        <Jumbotron/>
        <GenreJumbo/>
        <SponsoredConcert/>
    </>
  )
}
