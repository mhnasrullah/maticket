import dynamic from 'next/dynamic'
import { Suspense, useEffect, useState } from 'react'
import { GetServerSideProps} from 'next'
import { useRouter } from 'next/router'
import { context } from '../../utils/context'
import { getArtistbyId } from '../../utils/func'
import {statusData} from '../../utils/enum'
import Loading from '../../sections/Loading'

const Page = dynamic(() => import('../../sources/DetailArtist'), {
  suspense: true,
})

interface Props{
  data : object[],
  allEvent : object[]
}



export default function Home({data,allEvent}:Props) {

  const {query : {artist},push} = useRouter();
  const [status,setStatus] = useState<statusData>(statusData.load);

  useEffect(()=>{
    if(getArtistbyId(data,Number(artist))){
      setStatus(statusData.found)
    }else{
      setStatus(statusData.notFound)
      push("/404")
    }
  },[]);

  if(status==statusData.found){
    return(
      <context.Provider value={{
        ...getArtistbyId(data,Number(artist)),
        allEvent : allEvent}}>
        <Suspense fallback={<Loading/>}>
          <Page />
        </Suspense>
      </context.Provider>
    )
  }else if(status==statusData.load){
    return(<Loading/>)
  }
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/artist`)
  const data = await res.json()

  const resEvent = await fetch(`${process.env.NEXT_PUBLIC_API}/event-ticket`)
  const dataEvent = await resEvent.json()

  return { props: {
    data : data,
    allEvent : dataEvent
  } }
}