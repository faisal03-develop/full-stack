import React from 'react'

export default function background() {
  return (
    <>
    <div className='bg-(--gray) absolute top-0 left-0 w-380 h-200 -z-2'></div>
    <div className='bg-(--darkgray) w-380 h-280 -z-2 absolute top-280 left-0'></div>
    </>
    )
}
