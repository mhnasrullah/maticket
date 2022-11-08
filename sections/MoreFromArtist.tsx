import React,{useState} from 'react'
import Text from '../components/Text'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { HoverSetSwiper } from './SponsoredConcert'
import Image from 'next/image'
import { Box } from '../components/Box'
import { TicketCard } from '../components/Card'

export default function MoreFromArtist() {
    const [hover,setHover] = useState<HoverSetSwiper>(HoverSetSwiper.none)
  return (
    <Box>
        <Text
        type='primary'
        className='mb-8 mt-16 lg:mb-12 lg:mt-24 w-fit'
        blackText={'More From'}
        blueText={'Justin Beiber'}
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
                slidesPerView : 4
            },
            
        }}
        navigation = {{
            nextEl : ".nextEl",
            prevEl : ".prevEl"
        }}
        >
            <SwiperSlide>
                <TicketCard
                artist='Justin Beiber'
                href='/ticket/1'
                image='/assets/images/jumbo.jpg'
                name='Justice:Toronto'
                price='10,00'
                />
            </SwiperSlide>
            <SwiperSlide>
                <TicketCard
                artist='Justin Beiber'
                href='/ticket/1'
                image='/assets/images/jumbo.jpg'
                name='Justice:Toronto'
                price='10,00'
                />
            </SwiperSlide>
            <SwiperSlide>
                <TicketCard
                artist='Justin Beiber'
                href='/ticket/1'
                image='/assets/images/jumbo.jpg'
                name='Justice:Toronto'
                price='10,00'
                />
            </SwiperSlide>
            <SwiperSlide>
                <TicketCard
                artist='Justin Beiber'
                href='/ticket/1'
                image='/assets/images/jumbo.jpg'
                name='Justice:Toronto'
                price='10,00'
                />
            </SwiperSlide>
            <SwiperSlide>
                <TicketCard
                artist='Justin Beiber'
                href='/ticket/1'
                image='/assets/images/jumbo.jpg'
                name='Justice:Toronto'
                price='10,00'
                />
            </SwiperSlide>
            <SwiperSlide>
                <TicketCard
                artist='Justin Beiber'
                href='/ticket/1'
                image='/assets/images/jumbo.jpg'
                name='Justice:Toronto'
                price='10,00'
                />
            </SwiperSlide>
            <SwiperSlide>
                <TicketCard
                artist='Justin Beiber'
                href='/ticket/1'
                image='/assets/images/jumbo.jpg'
                name='Justice:Toronto'
                price='10,00'
                />
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
  )
}
