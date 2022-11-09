import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Page = dynamic(() => import('../sources/AllEvent'), {
  suspense: true,
})

export default function Home() {
  return (
    <Suspense fallback={`Loading...`}>
      <Page />
    </Suspense>
  )
}
