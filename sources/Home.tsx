import React from 'react'
import { Box } from '../components/Box'
import { HeaderInfo } from '../components/Info'
import Logo from '../components/Logo'
import Faq from '../sections/Faq'
import Footer from '../sections/Footer'
import { GenreJumbo } from '../sections/Genre'
import Jumbotron from '../sections/Jumbotron'
import Nav from '../sections/Nav'
import RecentlyConcert from '../sections/RecentlyConcert'
import SponsoredConcert from '../sections/SponsoredConcert'
import Subscribe from '../sections/Subscribe'

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
        <RecentlyConcert/>
        <Faq/>
        <Subscribe/>
        <Footer/>
    </>
  )
}
