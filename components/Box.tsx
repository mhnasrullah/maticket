import type { ReactNode } from 'react'

interface BoxProps {
    children : ReactNode,
    className? : string
}

export const Box = ({children,className} : BoxProps) => {
    return (
        <div className={`w-full px-4 md:px-8 lg:px-24 ${className ? className : ' '}`}>{children}</div>
    )
}
