import React from 'react'
import type {ReactNode} from 'react'
import { Box } from './Box'

interface HeaderInfoProps{
    children : ReactNode,
    className? : string
}

export const HeaderInfo = ({children,className} : HeaderInfoProps) => {
    return (
        <div className={`py-6 bg-blue text-white font-medium text-center ${className ? className : ' '}`}>
            <Box>
                {children}
            </Box>
        </div>
    )
}

export default function Info() {
  return (
    <div>Info</div>
  )
}
