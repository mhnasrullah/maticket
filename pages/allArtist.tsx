import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Loading from '../sections/Loading'
import { context } from '../utils/context'

const Page = dynamic(() => import('../sources/AllArtist'), {
  suspense: true,
})

interface Props{
  data : object[],
  event : object[]
}

export default function Home({data,event}:Props) {
  return (
    <context.Provider value={{
      data,
      event
      }}>
      <Suspense fallback={<Loading/>}>
        <Page />
      </Suspense>
    </context.Provider>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/artist`)
  const data = await res.json()

  const resEvent = await fetch(`${process.env.NEXT_PUBLIC_API}/event-ticket`)
  const event = await resEvent.json()

  return { props: {
    data,
    event
  } }
}