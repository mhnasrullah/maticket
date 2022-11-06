import React, { useState } from 'react'
import Image from 'next/image'

interface Props{
    options : string[],
    name : string
}

export default function Dropdown({options,name} : Props) {

    const [value,setValue] = useState<string | null>(null);
    const [show,setShow] = useState<boolean>(false)
  return (
    <div className='relative w-fit'>
        <button
        onClick={()=>setShow(!show)}
        className='py-2 rounded-full px-4 flex items-center bg-l-gray border-[1px] border-[gray] text-start text-sm lg:text-base'>
            {value ? value : name}
            <div className='relative w-3 h-3 ml-4'>
                <Image src={'/assets/icons/arrdown.svg'} fill alt='arrow'/>
            </div>
        </button>
        <div className={`absolute top-12 py-3 bg-l-gray flex-col space-y-2 rounded-sm w-full border-[1px] border-[gray] z-40 ${show ? 'flex' : 'hidden'}`}>
            {options.map((e,i) => (
                <button
                className='text-sm lg:text-base'
                onClick={()=>setValue(e)}
                >{e}</button>
            ))}
        </div>
    </div>
  )
}
