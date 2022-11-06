import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Box } from '../components/Box'
import Logo from '../components/Logo'

export default function Footer() {
  return (
    <>
    <footer className='py-16 lg:py-24'>
        <Box className='space-y-12 md:flex md:space-y-0 md:justify-between'>
            <div className='space-y-4'>
                <div className='w-fit'>
                    <Logo/>
                </div>
                <a href="/" className='flex items-center'>
                    <div className='w-8 h-8 relative mr-2'>
                        <Image src={'/assets/icons/whatsapp.svg'} alt="whatsapp-icons" fill/>
                    </div>
                    +1 888 888 123
                </a>
                <a href="/" className='flex items-center'>
                    <div className='w-8 h-8 relative mr-2'>
                        <Image src={'/assets/icons/email.svg'} alt="whatsapp-icons" fill/>
                    </div>
                    +1 888 888 123
                </a>
                <a href="/" className='flex items-center'>
                    <div className='w-8 h-8 relative mr-2'>
                        <Image src={'/assets/icons/map.svg'} alt="whatsapp-icons" fill/>
                    </div>
                    +1 888 888 123
                </a>
            </div>
            <div className="space-y-2 md:space-y-4 flex flex-col">
                <h2 className='font-semibold'>Company</h2>
                <Link href="/">Event</Link>
                <Link href="/">Band/Artist</Link>
            </div>
            <div className="space-y-2 md:space-y-4 flex flex-col">
                <h2 className='font-semibold'>Help</h2>
                <Link href="/">Team</Link>
                <Link href="/">FAQ</Link>
                <Link href="/">Privacy Policy</Link>
                <Link href="/">ToS</Link>
            </div>
            <div className="space-y-2 md:space-y-4">
                <h2 className='font-semibold'>Social Media</h2>
                <div className="mt-1 flex space-x-4">
                    <a href="/">
                        <div className='relative w-10 h-10'>
                            <Image src="/assets/icons/instagram.png" fill alt='instagram'/>
                        </div>
                    </a>
                    <a href="/">
                        <div className='relative w-10 h-10'>
                            <Image src="/assets/icons/youtube.png" fill alt='youtube'/>
                        </div>
                    </a>
                    <a href="/">
                        <div className='relative w-10 h-10'>
                            <Image src="/assets/icons/tiktok.png" fill alt='tiktok'/>
                        </div>
                    </a>
                </div>
            </div>
        </Box>
    </footer>
    <div className="py-8 bg-blue">
        <p className="text-white text-center">Hak Cipta 2022 © MATICKET</p>
    </div>
    </>
  )
}
