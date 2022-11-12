import React, { ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
    type : 'button' | 'link',
    style : 'primary' | 'secondary',
    children : ReactNode
    className? : string,
    onClick? : React.MouseEventHandler,
    key? : number,
    classTextColor? : string,
    href? : string
}

const Button : React.FC<ButtonProps> = ({type,style,classTextColor,className,children,href,...props}) => {

    let styled : string = '';

    if(style === 'primary'){
        styled = `py-4 px-10 bg-blue font-medium ${classTextColor ? classTextColor : ' '} rounded-full ${className ? className : ' '}`
    }else if(style === 'secondary'){
        styled = `px-4 py-2 border-2 border-blue text-blue rounded-full text-sm md:text-base ${className ? className : ' '}`
    }


    if(type === 'link'){
        return (
            <Link href={ href ? href : '/' } {...props} className={styled}>{children}</Link>
        )
    }else if (type === 'button'){
        return (
            <button {...props} className={styled}>{children}</button>
        )
    }else{
        return(
            <></>
        )
    }
}

export default Button