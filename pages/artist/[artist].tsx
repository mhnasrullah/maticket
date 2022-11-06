import React from 'react'
import { Box } from '../../components/Box'
import { RecentCard } from '../../components/Card'
import { ArtistJumbo } from '../../sections/Jumbotron'
import ListTicketArtist from '../../sections/ListTicketArtist'

export default function ArtistDetail() {
  return (
    <div className='bg-l-gray'>
        <Box className='mt-10 lg:flex lg:space-x-6'>
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
            <div className='lg:w-1/4'>
              <RecentCard
              artist='morghan'
              time='08.00 AM - 10.00 AM'
              />
            </div>
        </Box>
    </div>
  )
}
