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
                key={i}
                className='text-sm lg:text-base'
                onClick={()=>setValue(e)}
                >{e}</button>
            ))}
        </div>
    </div>
  )
}

export type DropLangType = {
    name : string,
    flag : string
}

interface NavDropdown{
    active : string | DropLangType,
    options : string[] | DropLangType[]
}

export const DropdownNav = ({active,options} : NavDropdown) => {

    const [show,setShow] = useState(false);
    const [value,setValue] = useState<typeof active>(active);

    return (
        <div className='relative px-2'>
            <button onClick={()=>setShow(!show)} className='flex items-center'>
                {typeof value == 'object' ? (
                    <div className='md:flex md:items-center space-x-2'>
                        <p className='hidden md:block'>{value.name}</p>
                        <div className='relative w-10'>
                            <Image alt={value.name} src={value.flag} width={31.28} height={23.46}/>
                        </div>
                    </div>
                ) : (
                    <p>{value}</p>
                )}
                <div className='relative w-3 h-3 ml-2'>
                    <Image src={'/assets/icons/arrdown.svg'} fill alt='arrow'/>
                </div>
            </button>
            <div className={show ? 'w-full bg-white absolute top-16 left-0 max-h-52 overflow-y-auto' : 'hidden'}>
                {options.map((e,i)=>(
                    <button key={i} className='flex items-center w-full hover:bg-l-gray py-2 justify-center'
                    onClick={()=>{
                        setShow(false)
                        setValue(
                        // INI PERLU DIGANTI dengan e
                        active)
                        }}>
                        {typeof active == 'object' ? (
                            <div className='md:flex md:items-center space-x-2'>
                                <p className='hidden md:block'>{active.name}</p>
                                <div className='relative w-10'>
                                    <Image alt={active.name} src={active.flag} width={31.28} height={23.46}/>
                                </div>
                            </div>
                        ) : (
                            <div className='flex w-full justify-center'>
                                <p>{active}</p>
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}