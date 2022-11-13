import React from 'react'
import {Box} from '../components/Box'
import data from '../data/genre.json'
import Button from '../components/Button'
import Text from '../components/Text'

export const GenreJumbo = () => {
    return (
        <Box className='md:flex md:justify-center'>
            <div className='py-8 md:px-6 md:-mt-16 w-full md:relative md:bg-white md:rounded-xl md:shadow-xl md:flex md:items-end md:space-x-6 lg:items-center'>
                <Text
                className='mb-6 md:mb-0 lg:min-w-fit md:min-w-[20%]'
                blackText='Concerts by'
                blueText='Genre'
                type='primary'/>
                <div className='flex space-x-4 overflow-x-scroll md:h-fit lg:pb-2'>
                    {data.map((e,i)=>(
                        <Button
                        key = {i}
                        type='button'
                        style='secondary'
                        >{e.name}</Button>
                    ))}
                </div>
            </div>
        </Box>
    )
}

export default function Genre() {
  return (
    <div>Genre</div>
  )
}
