import React, { useState } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Box } from '../components/Box'
import Text from '../components/Text'
import { SponsoredCardConcert } from '../components/Card'
import { Navigation } from 'swiper'
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/navigation';

enum HoverSet {
    left,
    right,
    none
}

export default function SponsoredConcert() {

    const [hover,setHover] = useState(HoverSet)

  return (
    <div>
        <Box>
            <Text
            center
            type='primary'
            className='mb-6 mt-12 w-fit'
            blackText='Sponsored'
            blueText='Concert'
            underline/>
            <Swiper
            className='relative'
            modules={[Navigation]}
            navigation = {{
                nextEl : ".nextEl",
                prevEl : ".prevEl"
            }}
            spaceBetween={10}
            slidesPerView={1}
            >
                <SwiperSlide
                className='px-4'>
                    <SponsoredCardConcert
                    image='/assets/images/jumbo.jpg'
                    altImage='test'
                    desc='Lorem ipsum dolor sit amet consectetur adipisicing.'
                    href='/'
                    name='BTS in Las Vegas'/>
                </SwiperSlide>
                <SwiperSlide
                className='px-4'>
                    <SponsoredCardConcert
                    image='/assets/images/jumbo.jpg'
                    altImage='test'
                    desc='Lorem ipsum dolor sit amet consectetur adipisicing.'
                    href='/'
                    name='BTS in Las Vegas'/>
                </SwiperSlide>
                <SwiperSlide>
                    <SponsoredCardConcert
                    image='/assets/images/jumbo.jpg'
                    altImage='test'
                    desc='Lorem ipsum dolor sit amet consectetur adipisicing.'
                    href='/'
                    name='BTS in Las Vegas'/>
                </SwiperSlide>
                <div className='absolute h-full width-10 z-10 flex items-center top-0 left-0'>
                    <button className='prevEl'>
                        
                    </button>
                </div>
                <div className='absolute h-full width-10 z-10 flex items-center top-0 right-0'>
                    <button className="nextEl">
                        <Image src={'/assets/icons/rightNonActiveArr.svg'} alt="leftArr" width={50} height={50} />
                    </button>
                </div>
            </Swiper>
        </Box>
    </div>
  )
}
