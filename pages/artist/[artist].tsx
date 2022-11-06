import React from 'react'
import { Box } from '../../components/Box'
import { ArtistJumbo } from '../../sections/Jumbotron'

export default function ArtistDetail() {
  return (
    <div className='bg-[#EFEEEE]'>
        <Box className='mt-10'>
            <ArtistJumbo
            data={{
                name : "Meghan Trainor Official",
                banner : "/assets/images/jumbo.jpg",
                image : "/assets/images/jumbo.jpg",
                verified : true
            }}/>
        </Box>
    </div>
  )
}
