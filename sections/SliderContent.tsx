import React, { useState } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Box } from '../components/Box'
import Text from '../components/Text'
import { SponsoredCardConcert } from '../components/Card'
import { Navigation } from 'swiper'
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/navigation';
import {HoverSetSwiper} from '../utils/enum'

interface Props{
    showOnLarge? : number,
    blackText : string,
    blueText : string,
    center? : boolean | undefined
}

export default function SliderContent({showOnLarge = 3,blackText,blueText,center} : Props) {

    const [hover,setHover] = useState<HoverSetSwiper>(HoverSetSwiper.none)

  return (
    <div>
        <Box>
            <Text
            center = {center}
            type='primary'
            className='mb-8 mt-16 lg:mb-12 lg:mt-24 w-fit'
            blackText={blackText}
            blueText={blueText}
            underline/>

            <Swiper
            className='relative'
            modules={[Navigation]}
            breakpoints={{
                0 : {
                    spaceBetween : 10,
                    slidesPerView : 1
                },
                756 : {
                    spaceBetween : 20,
                    slidesPerView : 2
                },
                992 : {
                    spaceBetween : 40,
                    slidesPerView : showOnLarge
                },
                
            }}
            navigation = {{
                nextEl : ".nextEl",
                prevEl : ".prevEl"
            }}
            >
                <SwiperSlide>
                    <SponsoredCardConcert
                    showPerSlideonLarge={showOnLarge}
                    image='/assets/images/jumbo.jpg'
                    altImage='test'
                    desc='Lorem ipsum dolor sit amet consectetur adipisicing.'
                    href='/'
                    name='BTS in Las Vegas'/>
                </SwiperSlide>
                <SwiperSlide>
                    <SponsoredCardConcert
                    showPerSlideonLarge={showOnLarge}
                    image='/assets/images/jumbo.jpg'
                    altImage='test'
                    desc='Lorem ipsum dolor sit amet consectetur adipisicing.'
                    href='/'
                    name='BTS in Las Vegas'/>
                </SwiperSlide>
                <SwiperSlide>
                    <SponsoredCardConcert
                    showPerSlideonLarge={showOnLarge}
                    image='/assets/images/jumbo.jpg'
                    altImage='test'
                    desc='Lorem ipsum dolor sit amet consectetur adipisicing.'
                    href='/'
                    name='BTS in Las Vegas'/>
                </SwiperSlide>
                <SwiperSlide>
                    <SponsoredCardConcert
                    showPerSlideonLarge={showOnLarge}
                    image='/assets/images/jumbo.jpg'
                    altImage='test'
                    desc='Lorem ipsum dolor sit amet consectetur adipisicing.'
                    href='/'
                    name='BTS in Las Vegas'/>
                </SwiperSlide>
                <SwiperSlide>
                    <SponsoredCardConcert
                    showPerSlideonLarge={showOnLarge}
                    image='/assets/images/jumbo.jpg'
                    altImage='test'
                    desc='Lorem ipsum dolor sit amet consectetur adipisicing.'
                    href='/'
                    name='BTS in Las Vegas'/>
                </SwiperSlide>
                <div className='absolute h-full width-10 z-10 flex items-center top-0 left-0 ml-4'>
                    <button
                    className='prevEl'
                    onMouseEnter={
                        ()=>setHover(HoverSetSwiper.left)
                    } onMouseLeave={
                        ()=>setHover(HoverSetSwiper.none)
                    }>
                        {hover === HoverSetSwiper.left ?
                        (
                            <Image src={'/assets/icons/leftActiveArr.svg'} alt="leftArr" width={50} height={50} />
                        ) : (
                            <Image src={'/assets/icons/rightNonActiveArr.svg'} alt="leftArr" width={50} height={50} className="rotate-180"/>
                        )}
                    </button>
                </div>
                <div className='absolute h-full width-10 z-10 flex items-center top-0 right-0 mr-4'>
                    <button
                    onMouseEnter={
                        ()=>setHover(HoverSetSwiper.right)
                    }
                    onMouseLeave={
                        ()=>setHover(HoverSetSwiper.none)
                    }
                    className="nextEl">
                        {hover === HoverSetSwiper.right ? (
                            <Image src={'/assets/icons/leftActiveArr.svg'} alt="leftArr" width={50} height={50} className="rotate-180" />
                        ) : (
                            <Image src={'/assets/icons/rightNonActiveArr.svg'} alt="leftArr" width={50} height={50} />
                        )}
                    </button>
                </div>
            </Swiper>
        </Box>
    </div>
  )
}
