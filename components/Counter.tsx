import React, { useState } from 'react'

interface Props {
    className? :string
}
export default function Counter({className} : Props) {

    const [value,setValue] = useState(1)
  return (
    <div className={`flex space-x-3 ${className ? className : ' '}`}>
        <button
        onClick={()=>{
            if(value>1){
                setValue(value-1)
            }}}
        className='border-gray border-2 w-8 h-8 text-gray rounded-lg text-sm'>-</button>
        <div className='flex items-center justify-center border-gray border-2 w-8 h-8 text-gray rounded-lg text-sm'>{value}</div>
        <button
        onClick={()=>{
            setValue(value+1)}}
        className='border-gray border-2 w-8 h-8 text-gray rounded-lg text-sm'>+</button>
    </div>
  )
}
