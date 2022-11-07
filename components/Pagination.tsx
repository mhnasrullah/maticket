import Image from 'next/image'
import React, { useState } from 'react'

interface dataProps{
    active : number,
    total : number
}

export default function Pagination({active,total} : dataProps) {

  const[actived,setActived] = useState(active);
  const[show,setShow] = useState(total % 2 == 0 ? active+1 : active+2);

  return (
    <div className='flex space-x-1 flex-wrap gap-1'>

      <button
      onClick={()=>{
        if(actived>1){
          setActived(actived-1)
        }
      }}
      className={`w-8 h-8 ${actived == 1 ? 'bg-l-gray' : 'bg-blue'} flex justify-center items-center rounded-lg`}>
        <div className='relative w-3 h-3'>
          <Image alt='previous' src={"/assets/icons/arrPagination.svg"} fill/>
        </div>
      </button>

      {[...Array(show)].map((e,i)=>{
        return(
          <button
          onClick={()=>{
            setActived(i+1)
          }}
          className={`w-8 h-8 bg-white border-2 rounded-lg ${actived === i+1 ? 'border-blue text-blue' : 'border-gray' } flex justify-center items-center`} key={i}>
            <p className='font-medium'>{i+1}</p>
          </button>
        )
      })}


      

      {show < total-1 && (
        <>
        <button
        onClick={()=>{
          if(show < total-1){
            setShow(show+2)
          }else{
            false
          }
        }}
        className={`w-8 h-8 bg-white border-gray border-2 rounded-lg justify-center items-center ${show > total-3 ? 'hidden' : 'flex'}`} >
            <p className='font-medium'>...</p>
        </button>
        {[total-1,total].map((e,i)=>(
          <button
          onClick={()=>setActived(e)}
          className={`w-8 h-8 bg-white border-2 rounded-lg ${actived === e ? 'border-blue text-blue' : 'border-gray' } flex justify-center items-center`} key={i}>
            <p className='font-medium'>{e}</p>
          </button>
        ))}
        </>
      )
      }

      <button
      onClick={()=>{
        if(actived == show && show<total-1){
          setShow(show+2)
        }
        if(actived<total){
          setActived(actived+1)
        }
      }}
      className={`w-8 h-8 ${actived >= total ? 'bg-l-gray' : 'bg-blue'} flex justify-center items-center rounded-lg rotate-180`}>
        <div className='relative w-3 h-3'>
          <Image alt='previous' src={"/assets/icons/arrPagination.svg"} fill/>
        </div>
      </button>

    </div>
  )
}
