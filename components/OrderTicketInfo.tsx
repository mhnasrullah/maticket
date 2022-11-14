import React, { useContext, useEffect, useState } from 'react'
import Button from './Button'
import Counter from './Counter'
import { DropdownOutline } from './Dropdown'
import Image from 'next/image'
import { context } from '../utils/context'
import { strToArray } from '../utils/func'

export default function OrderTicketInfo() {

    const {price,packages} = useContext(context);
    const [pack,setPack] = useState<string[] | null>(null);
    const [packSelect,setPackSelect] = useState(0);

    const mappingPack = () => {
        let dataPack : string[] = [];
        strToArray(packages).map((e)=>{
            dataPack = [
                ...dataPack,
                e.slice(1,-1)
            ]
        })

        setPack(dataPack)
    }

    useEffect(()=>{
        mappingPack()
    },[])

  return (
    <div className='py-6 lg:flex lg:space-x-16'>
        <div className='flex flex-col items-center lg:items-start md:h-full lg:space-y-7'>
            <DropdownOutline
            onChange = {(e)=>setPackSelect(e)}
            options={pack == null ? [] : pack}/>
            <Counter
            className='mt-2 md:mt-4'/>
        </div>
        <div className='flex flex-col items-center mt-4 lg:mt-0 lg:space-y-6'>
            <h1 className='text-xl font-semibold text-blue lg:text-2xl'>{strToArray(price)[packSelect].slice(1,-1)},00 MATIC</h1>
            <Button
            className='flex w-fit mt-4'
            classTextColor='text-white'
            style='primary'
            type='button'>
                <div className='relative w-5 mr-2'>
                    <Image alt="shop" src="/assets/icons/cart.svg" width={50} height={50}/>
                </div>
                Buy Now
            </Button>
        </div>
    </div>
  )
}
