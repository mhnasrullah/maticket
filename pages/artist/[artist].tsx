import dynamic from 'next/dynamic'
import { Suspense, useEffect, useState } from 'react'
import { GetServerSideProps} from 'next'
import { useRouter } from 'next/router'
import { context } from '../../utils/context'
import { getArtistbyId } from '../../utils/func'
import {statusData} from '../../utils/enum'

const Page = dynamic(() => import('../../sources/DetailArtist'), {
  suspense: true,
})

interface Props{
  data : object[]
}



export default function Home({data}:Props) {

  const {query : {artist},push} = useRouter();
  const [status,setStatus] = useState<statusData>(statusData.load);
  console.log(data)

  useEffect(()=>{
    if(getArtistbyId(data,Number(artist))){
      setStatus(statusData.found)
    }else{
      setStatus(statusData.notFound)
      push("/")
    }
  },[]);

  if(status==statusData.found){
    return(
      <context.Provider value={getArtistbyId(data,Number(artist))}>
        <Suspense fallback={`Loading...`}>
          <Page />
        </Suspense>
      </context.Provider>
    )
  }else{
    return(
      <>
      `loading`
      </>
    )
  }
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/artist`)
  const data = await res.json()

  return { props: { data } }
}