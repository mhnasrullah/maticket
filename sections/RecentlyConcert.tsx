import Link from 'next/link'
import React from 'react'
import { Box } from '../components/Box'
import { TicketCard } from '../components/Card'
import Text from '../components/Text'
import { strToArray } from '../utils/func'

interface Props{
    data:any[]
}

export default function RecentlyConcert({data} : Props) {

  return (
    <Box className='py-16 lg:py-24'>
        <div>
            
        </div>
        <div className='flex justify-between items-end mb-8 lg:mb-12'>
            <Text
            className='w-fit'
            blackText='Recently'
            blueText='Concert'
            type='primary'
            underline
            />
            <Link href={"/allEvent"} className="text-blue font-semibold text-sm md:text-base">VIEW ALL</Link>
        </div>
        <div className='grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-5'>
            {data.map((e,i)=>{
                let artist : string[] = [];

                e.line_up_artist.map((ei : any)=>(
                    artist = [
                        ...artist,
                        ei.title
                    ]
                ))
                return (
                    <div key={i}>
                        <TicketCard
                        type='like'
                        artist={artist}
                        href={`/ticket/${e.id}`}
                        image={e.image}
                        name={e.title}
                        price={`${strToArray(e.price)[0].slice(1,-1)},00`}
                        />
                    </div>
                )
            }
            )}

        </div>
    </Box>
  )
}
