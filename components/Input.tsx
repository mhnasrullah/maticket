import Image from 'next/image'
import React, { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'

interface InputProps {
    type? : HTMLInputTypeAttribute
    placeholder : string
    buttonType : 'text' | 'icons'
    buttonContent : string
    outline? : boolean
    widthStyle? : string,
    value : string | number | readonly string[] | undefined,
    onChange : ChangeEventHandler<HTMLInputElement> | undefined
}

export default function Input( {buttonContent,widthStyle,buttonType,outline,...props} : InputProps) {
  return (
    <div className={`bg-white rounded-full py-2 ${widthStyle ? widthStyle : ' '} pl-4 pr-2 flex ${outline ? 'border-2 border-gray' : 'border-0'}`}>
        <input {...props} className='outline-none w-full'/>
        {buttonType == 'text' ? (
            <button className='py-2 px-4 bg-blue font-medium rounded-full text-white'>
                {buttonContent}
            </button>
        ) : (
            <button>
                <div className='relative w-5 mr-2'>
                    <Image src={buttonContent} alt="icons" width={50} height={50}/>
                </div>
            </button>
        )}
    </div>
  )
}
