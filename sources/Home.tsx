import Link from 'next/link'
import React, { useContext } from 'react'
import { HeaderInfo } from '../components/Info'
import Logo from '../components/Logo'
import Faq from '../sections/Faq'
import Footer from '../sections/Footer'
import { GenreJumbo } from '../sections/Genre'
import Jumbotron from '../sections/Jumbotron'
import Nav from '../sections/Nav'
import RecentlyConcert from '../sections/RecentlyConcert'
import SponsoredConcert from '../sections/SliderContent'
import Subscribe from '../sections/Subscribe'
import {context} from '../utils/context'

export default function Home() {

  const {event} = useContext(context)
  
  return (
    <>
        <HeaderInfo>EVERY TICKET HAS BEEN VERIFYED AND REGISTERED ON POLYGON BLOCKCHAIN</HeaderInfo>
        <div className='flex justify-center py-8'>
            <Link href={"/"}>
              <Logo/>
            </Link>
        </div>
        <Nav dataEvent={event}/>
        <Jumbotron/>
        <GenreJumbo/>
        <SponsoredConcert
        data={event}
        center
        blackText='Sponsored'
        blueText='Concert'/>
        <RecentlyConcert
        data={event}/>
        <Faq/>
        <Subscribe/>
        <Footer/>
    </>
  )
}
