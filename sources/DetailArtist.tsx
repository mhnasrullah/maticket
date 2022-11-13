import React,{useContext, useState} from 'react'
import { Box } from '../components/Box'
import { RecentCard, TimelineCard } from '../components/Card'
import {HeaderInfo} from '../components/Info'
import Logo from '../components/Logo'
import Footer from '../sections/Footer'
import { ArtistJumbo } from '../sections/Jumbotron'
import ListTicketArtist from '../sections/ListTicketArtist'
import Link from 'next/link'
import Nav from '../sections/Nav'
import { context } from '../utils/context'
import { activeSection } from '../utils/enum'
import { getAllEventByArtist } from '../utils/func'

interface BioProps{
  content : string
}

const BioArtist = ({content}:BioProps) => {
  return (
    <div className='py-6 bg-white border-[1px] mt-10 border-[gray] rounded-sm px-4 md:px-8 lg:px-16 '>
      <p>{content}</p>
    </div>
  )
}

export default function ArtistDetail() {

  const {title,banner_image,image,country,website,genre,bio,allEvent,id,instagram,facebook,twitter} = useContext(context);
  const [section,setSection] = useState<activeSection>(activeSection.allTicket);

  return (
    <div className='bg-l-gray'>
      <HeaderInfo>EVERY TICKET HAS BEEN VERIFYED AND REGISTERED ON POLYGON BLOCKCHAIN</HeaderInfo>
      <div className='flex justify-center py-8 bg-white'>
        <Link href={"/"}>
          <Logo/>
        </Link>
      </div>
      <Nav dataEvent={allEvent}/>
      <Box className='mt-10 lg:flex lg:space-x-6 mb-16'>
          <div className='lg:w-3/4'>
            <ArtistJumbo
            sectionChange = {(e)=>setSection(e)}
            data={{
                country : country,
                name : title,
                banner : banner_image,
                image : image,
                verified : true,
                website : website,
                genre : genre,
                instagram : instagram,
                facebook : facebook,
                twitter : twitter
            }}/>


            {section == activeSection.allTicket && (
              <ListTicketArtist/>
            )}
            {section == activeSection.bio && (
              <BioArtist
              content={bio}/>
            )}
          </div>
          <div className='lg:w-1/4 mt-6 lg:mt-0'>
            <RecentCard
            artist={title}
            time='08.00 AM - 10.00 AM'
            />
            <div className="mt-6">
              <TimelineCard
              title='Concerts Schedule'
              data={getAllEventByArtist(allEvent,id)}
              href = "/"/>
            </div>
            <div className="mt-6">
              <TimelineCard
              title='Gigs Schedule'
              data={getAllEventByArtist(allEvent,id)}
              href = "/"/>
            </div>
          </div>
      </Box>
      <Footer/>
    </div>
  )
}
