import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import {context} from '../utils/context'

const Page = dynamic(() => import('../sources/AllEvent'), {
  suspense: true,
})

interface Props{
  data : any[]
}

export default function Home({data} : Props) {

  return (
    <context.Provider value={data}>
      <Suspense fallback={`Loading...`}>
        <Page />
      </Suspense>
    </context.Provider>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/event-ticket`)
  const data = await res.json()

  return { props: { data } }
}