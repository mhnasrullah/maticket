import dynamic from 'next/dynamic'
import { Suspense, useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router';
import { statusData } from '../../utils/enum';
import { context } from '../../utils/context'
import { getArtistbyId } from '../../utils/func';
import Loading from '../../sections/Loading';


const Page = dynamic(() => import('../../sources/DetailTicket'), {
  suspense: true,
})

interface Props{
  data : object[]
}

export default function Home({data}:Props) {

  const {query : {ticket},push} = useRouter();
  const [status,setStatus] = useState<statusData>(statusData.load);
  
  useEffect(()=>{
    if(getArtistbyId(data,Number(ticket))){
      setStatus(statusData.found)
    }else{
      setStatus(statusData.notFound)
      push("/404")
    }
  },[]);

  if(status==statusData.found){
    return(
      <context.Provider value={{
        ...getArtistbyId(data,Number(ticket)),
        AllEvent : data
        }}>
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/event-ticket`)
  const data = await res.json()

  return { props: { data } }
}