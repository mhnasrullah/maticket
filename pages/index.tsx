import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { GetServerSideProps } from 'next'
import {context} from '../utils/context'
import Loading from '../sections/Loading'

const Page = dynamic(() => import('../sources/Home'), {
  suspense: true,
})

interface Props{
  event : any[]
}

export default function Home(props : Props) {
  return (
    <context.Provider value={{...props}}>
      <Suspense fallback={<Loading/>}>
        <Page />
      </Suspense>
    </context.Provider>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/event-ticket`)
  const dataEvent = await res.json()

  return { props: { 
    event : dataEvent
   } }
}