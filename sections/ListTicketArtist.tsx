import React from 'react'
import Image from 'next/image'
import Dropdown from '../components/Dropdown'
import { TicketCard } from '../components/Card'
import Pagination from '../components/Pagination'

const data = [1,2,3,4,5,6,7,8,9]

export default function ListTicketArtist() {
  return (
    <div className='py-6 bg-white border-[1px] mt-10 border-[gray] rounded-sm px-4 md:px-8 lg:px-16 '>
        <div className='flex gap-4 flex-wrap'>
            <Dropdown
            name='Type'
            options={["option1","option2","option3"]}/>
            <Dropdown
            name='Price'
            options={["option1","option2","option3"]}/>
            <Dropdown
            name='Country'
            options={["option1","option2","option3"]}/>
        </div>
        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-x-6 lg:gap-y-4'>
            {data.map((e,i)=>(
                <TicketCard
                key={i}
                href={"/"}
                artist='Meghan Trainor'
                image='/assets/images/jumbo.jpg'
                price='320,00'
                name='That Bass Tour'
                sold={200}
                />
            ))}
        </div>
        {/* Pagination */}
        <div className='flex justify-end mt-6'>
          <Pagination
          active={1}
          total={4}/>
        </div>
    </div>
  )
}
