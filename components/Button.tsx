import React, { ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
    type : 'button' | 'link',
    style : 'primary' | 'secondary',
    children : ReactNode
    className? : string,
    onClick? : React.MouseEventHandler,
    key? : number
}

const Button : React.FC<ButtonProps> = ({type,style,className,children,...props}) => {

    let styled : string = '';

    if(style === 'primary'){
        styled = `py-4 px-10 bg-blue font-medium rounded-full ${className ? className : ' '}`
    }else if(style === 'secondary'){
        styled = `px-4 py-2 border-2 border-blue text-blue rounded-full ${className ? className : ' '}`
    }


    if(type === 'button'){
        return (
            <Link href={'/'} {...props} className={styled}>{children}</Link>
        )
    }else if (type === 'link'){
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