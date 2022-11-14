import React, { useContext, useEffect, useState } from 'react'
import Dropdown from '../components/Dropdown'
import { TicketCard } from '../components/Card'
import Pagination from '../components/Pagination'
import { context } from '../utils/context'
import { getAllEventByArtist, strToArray } from '../utils/func'


export default function ListTicketArtist() {
  
  const {allEvent,id} = useContext(context);
  const [types,setTypes] = useState<string[]>([]);
  const [activeType,setActiveType] = useState<string| null>(null)
  
  const getAllCategories = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API}/category`)
    let res = await data.json()
  
    let type : string[]= [];

    if(res){
      res.map((e:any)=>{
        type = [
          ...type,
          e.name
        ]
      })
    }
    setTypes(type);
  }

  useEffect(()=>{
    getAllCategories()
  },[])
  
  return (
    <div className='py-6 bg-white border-[1px] mt-10 border-[gray] rounded-sm px-4 md:px-8 lg:px-16 '>
        <div className='flex gap-4 flex-wrap'>
            <Dropdown
            onChange = {(e)=>setActiveType(e)}
            name='Type'
            options={types}/>
            <Dropdown
            name='Price'
            options={["option1","option2","option3"]}/>
            <Dropdown
            name='Country'
            options={["option1","option2","option3"]}/>
        </div>
        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-x-6 lg:gap-y-4'>
            {getAllEventByArtist(allEvent,id).filter((e)=>{
              if(activeType != null){
                return e.category.toLowerCase() == activeType.toLowerCase()
              }else{
                return e
              }
            }
              
            ).map((e,i)=>{
              let artist : string[] = [];

              e.line_up_artist.map((ei : any)=>(
                  artist = [
                      ...artist,
                      ei.title
                  ]
              ))
              return (
                <TicketCard
                type='sold'
                key={i}
                href={`/ticket/${e.id}`}
                artist={artist}
                image={e.image}
                price={`${strToArray(e.price)[0].slice(1,-1)},00`}
                name={e.title}
                sold={200}
                />
            )})}
        </div>
        <div className='flex justify-end mt-6'>
          <Pagination
          active={1}
          total={8}/>
        </div>
    </div>
  )
}
