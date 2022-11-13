import React,{useState} from 'react'
import { Box } from '../components/Box'
import { DropdownNav } from '../components/Dropdown'
import Image from 'next/image'
import Input from '../components/Input'
import Link from 'next/link'
import { searchEvent } from '../utils/func'

interface Props {
  dataEvent : any[]
}

export default function Nav({dataEvent} : Props) {

  const [show,setShow] = useState(false);
  const [search,setSearch] = useState('');

  return (
    <Box className='relative bg-white shadow-xl'>
      <div className='pb-6 flex justify-between items-center md:space-x-6'>
        {/* LEFT */}
        <div className='flex items-center space-x-6'>
          <DropdownNav
          active={{
            flag : "/assets/images/flag.png",
            name : "EN"
          }}
          options={[...Array(10)]}/>
          <DropdownNav
          active="MATIC"
          options={[...Array(3)]}/>
        </div>

        {/* SEARCH */}
        <div className='hidden md:block min-w-fit w-1/2 relative'>
          <Input
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          widthStyle='min-w-[400px] w-full'
          type={"text"}
          outline
          placeholder='find events here...'
          buttonType='icons'
          buttonContent='/assets/icons/searchIcons.svg'/>

          {search && (
            <div className='absolute w-full p-5 top-12 bg-white border-2 border-gray rounded-lg flex flex-col space-y-2 z-50'>
              {searchEvent(dataEvent,search).map((e,i)=>(
                <Link href={`/ticket/${e.id}`} key={i}>
                  <div className='flex space-x-2 items-center'>
                    <div className="relative w-10 h-10">
                      <Image src={e.image} alt={e.title} fill className='rounded-full object-cover object-center' sizes='100vw'/>
                    </div>
                    <p>{e.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div>
          <button className='lg:hidden' onClick={()=>setShow(!show)}>
            <div className='realtive w-5'>
              <Image src={'/assets/icons/list.svg'} width={50} height={50} alt={'list'}/>
            </div>
          </button>
          <div className={`flex z-10 lg:flex-row lg:space-x-8 items-center lg:static absolute inset-x-0 flex-col ${show ? 'top-12' : 'hidden lg:flex'} bg-white lg:space-y-0 space-y-6 pb-12 pt-12 lg:pt-0 lg:pb-0`}>
            <Link href={"/allEvent"}>EVENT</Link>
            <Link href={"/allArtist"}>ARTIST</Link>
            <Link href={"/"} className="py-2 px-4 rounded-full border-2 border-blue flex justify-center">
              <div className='relative mr-2'>
                <Image src={"/assets/icons/wallet.svg"} width={22} height={20} alt="wallet"/>
              </div>
              CONNECT WALLET
            </Link>
          </div>
        </div>
      </div>
    </Box>
  )
}
