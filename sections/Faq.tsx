import React from 'react'
import { Box } from '../components/Box'
import Image from 'next/image'
import Button from '../components/Button'

export default function Faq() {
  return (
    <div className='mb-16 lg:mb-24'>
      <Box className='flex flex-col md:flex-row md:space-x-6 lg:space-x-16'>
        <div className='w-full h-56 lg:h-[350px] md:h-72 lg:w-2/3 md:w-1/2 relative'>
          <Image src={"/assets/images/jumbo.jpg"} className="object-cover object-center rounded-lg" sizes='100vw' fill alt='faq cover'/>
        </div>
        <div className='mt-6 md:w-1/2 lg:w-1/3 md:flex md:flex-col md:justify-between md:mt-0'>
          <div>
            <h1 className='text-black font-semibold text-2xl lg:text-3xl leading-normal lg:leading-[1.5]'><span className='text-blue'>Dynamic NFT</span> tickets that will turn into NFT photos of your favorite <span className='text-blue'>Band/Artist</span></h1>
            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nobis consequuntur nihil beatae laborum reprehenderit eius et architecto a dolore, expedita similique, suscipit ducimus at</p>
          </div>
          <div className='mt-6 md:mt-0'>
            <Button
            style='secondary'
            type='link'
            >FAQ</Button>
          </div>
        </div>
      </Box>
    </div>
  )
}
