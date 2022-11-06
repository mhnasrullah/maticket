import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Box } from '../components/Box'
import { RecentlyCardConcert } from '../components/Card'
import Text from '../components/Text'
import data from '../data/recent.json'

const GridLayout = styled.div`
`

export default function RecentlyConcert() {
  return (
    <Box className='py-16 lg:py-24'>
        <div className='flex justify-between items-end mb-8 lg:mb-12'>
            <Text
            className='w-fit'
            blackText='Recently'
            blueText='Concert'
            type='primary'
            underline
            />
            <Link href={"/"} className="text-blue font-semibold text-sm md:text-base">VIEW ALL</Link>
        </div>
        <div className='grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5'>
            {data.map((e,i)=>(
                <div key={e.id} className={`${i === 0 ? "col-start-1 col-end-3 md:col-end-2 w-full" : ' '}`}>
                    <RecentlyCardConcert
                    altImage = {e.name}
                    href = "/"
                    image={e.images}
                    name={e.name}
                    price={e.price}
                    singer = {e.singer}
                    />
                </div>
            ))}

        </div>
    </Box>
  )
}
