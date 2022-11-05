import Link from 'next/link'
import React from 'react'
import { Box } from '../components/Box'
import Button from '../components/Button'
import styled from 'styled-components'

const JumboBox = styled.div`
    background-image : url('/assets/images/jumbo.jpg');
`

export default function Jumbotron() {
  return (
    <JumboBox className={`h-[600px] text-white bg-cover bg-center`}>
        <Box className='flex items-end h-full md:items-center pb-16 md:pb-0'>
            <div className='md:w-2/3 lg:w-1/2'>
                <h1 className='text-3xl font-bold lg:text-5xl leading-normal lg:leading-[1.2]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad facilis dolorum</h1>
                <p className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, eum! Excepturi, numquam vero! Iste optio ab in officia modi qui sit obcaecati.</p>
                <div className="mt-8">
                    <Button
                    style='primary'
                    type='link'
                    >Explore All Concerts</Button>
                </div>
            </div>
        </Box>
    </JumboBox>
  )
}
