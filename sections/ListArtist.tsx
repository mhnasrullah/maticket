import React,{useContext} from 'react'
import { Box } from '../components/Box'
import { LargeCard } from '../components/Card'
import Pagination from '../components/Pagination'
import { context } from '../utils/context'

interface Props{
  search : string | null
}

export default function ListArtist({search}:Props) {
  const {data} = useContext(context);
  
  return (
    <Box className='py-16'>
        <div className="grid md:grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3">
          {data != null
          && Array.isArray(data)
          && data
          .filter((e)=>{
            if(search){
              return e.title.toLowerCase().match(search.toLowerCase())
            }else{
              return e
            }
          })
          .map((e,i)=>(
                <LargeCard
                textLink='VIEW ARTIST DETAILS'
                key={i}
                image={e.image}
                name={e.title}
                altImage={e.name}
                href={`/artist/${e.id}`}
                desc={e.bio}/>
            ))}
        </div>
        <div className='flex justify-center md:justify-end mt-6 lg:mt-16'>
            <Pagination
            active={1}
            total={10}
            />
        </div>
    </Box>
  )
}
