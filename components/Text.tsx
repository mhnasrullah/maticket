import React from 'react'

interface TextProps {
    type : 'primary',
    blackText : string,
    blueText : string,
    className? : string,
    underline? : boolean,
    center? : boolean
}

export const Text = ({type,blackText,blueText,className,underline,center} : TextProps) => {
    if(type === 'primary'){
        return(
            <h1 className={`text-black font-semibold text-2xl lg:text-3xl ${center ? 'text-center mx-auto' : ' '} ${underline ? 'pb-1 border-b-2 border-b-gray' : ' '} ${className ? className :' '}`}>{blackText} <span className='text-blue'>{blueText}</span></h1>
        )
    }
    return <></>
}

export default Text

