import React from 'react'
import { Box } from '../components/Box'
import { SponsoredCardConcert } from '../components/Card'
import Pagination from '../components/Pagination'


export default function ListArtist() {
  return (
    <Box className='py-16'>
        <div className="grid md:grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3">
            {[...Array(9)].map((e,i)=>(
                <SponsoredCardConcert
                image='/assets/images/jumbo.jpg'
                name='BTS'
                altImage='card'
                href='/artist'
                desc='Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.'/>
            ))}
        </div>
        <div className='flex justify-center md:justify-end mt-6 lg:mt-16'>
            <Pagination
            active={1}
            total={10}
            />
        </div>
    </Box>
  )
}
