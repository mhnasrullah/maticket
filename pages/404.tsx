import React, { useEffect, useState } from 'react'
import Logo from '../components/Logo'

export default function Error() {

    const [second,setSecond] = useState(5)

    useEffect(()=>{
        setTimeout(()=>(
            window.location.replace("/")
            ),5000)
        setInterval(()=>(setSecond(second-1)),1000)
    })
  return (
    <div className='w-full h-screen bg-l-gray flex items-center flex-col justify-center'>
        <Logo/>
        <p>Page Not Found (404)</p>
        <p className="text-sm font-medium mt-2 text-gray">Automatic redirect to "/" on {second > 0 ? second : 0}s</p>
    </div>
  )
}
