import React from 'react'

export default function background() {
  return (
    <>
    <div className='flex flex-col items-center'>
    <div className='bg-(--gray) absolute top-0 left-0 w-screen h-200 -z-2'></div>
    <div className='bg-(--darkgray) w-screen h-280 -z-2 absolute top-280 left-0'></div>
    
    </div>
    </>
    )
}
