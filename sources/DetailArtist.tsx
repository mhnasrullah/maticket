import React from 'react'
import { Box } from '../components/Box'
import { RecentCard, TimelineCard, dataTimeline } from '../components/Card'
import {HeaderInfo} from '../components/Info'
import Logo from '../components/Logo'
import Footer from '../sections/Footer'
import { ArtistJumbo } from '../sections/Jumbotron'
import ListTicketArtist from '../sections/ListTicketArtist'
import Link from 'next/link'
import Nav from '../sections/Nav'

const data : dataTimeline[] = [
  {
    date : "05/10",
    description : "lorem ipsum dolor amet hsuhi sahdiauh",
    title : "That Bass Tour"
  },
  {
    date : "05/10",
    description : "lorem ipsum dolor amet",
    title : "That Bass Tour"
  },
  {
    date : "05/10",
    description : "lorem ipsum dolor amet",
    title : "That Bass Tour"
  },
  {
    date : "05/10",
    description : "lorem ipsum dolor amet",
    title : "That Bass Tour"
  },
  {
    date : "05/10",
    description : "lorem ipsum dolor amet",
    title : "That Bass Tour"
  },
  {
    date : "05/10",
    description : "lorem ipsum dolor amet",
    title : "That Bass Tour"
  },
  {
    date : "05/10",
    description : "lorem ipsum dolor amet",
    title : "That Bass Tour"
  },
  {
    date : "05/10",
    description : "lorem ipsum dolor amet",
    title : "That Bass Tour"
  },
  {
    date : "05/10",
    description : "lorem ipsum dolor amet",
    title : "That Bass Tour"
  }
];

export default function ArtistDetail() {
  return (
    <div className='bg-l-gray'>
      <HeaderInfo>EVERY TICKET HAS BEEN VERIFYED AND REGISTERED ON POLYGON BLOCKCHAIN</HeaderInfo>
      <div className='flex justify-center py-8 bg-white'>
        <Link href={"/"}>
          <Logo/>
        </Link>
      </div>
      <Nav/>
      <Box className='mt-10 lg:flex lg:space-x-6 mb-16'>
          <div className='lg:w-3/4'>
            <ArtistJumbo
            data={{
                name : "Meghan Trainor Official",
                banner : "/assets/images/jumbo.jpg",
                image : "/assets/images/jumbo.jpg",
                verified : true
            }}/>

            <ListTicketArtist/>
          </div>
          <div className='lg:w-1/4 mt-6 lg:mt-0'>
            <RecentCard
            artist='morghan'
            time='08.00 AM - 10.00 AM'
            />
            <div className="mt-6">
              <TimelineCard
              title='Concerts Schedule'
              data={data}
              href = "/"/>
            </div>
            <div className="mt-6">
              <TimelineCard
              title='Gigs Schedule'
              data={data}
              href = "/"/>
            </div>
          </div>
      </Box>
      <Footer/>
    </div>
  )
}
