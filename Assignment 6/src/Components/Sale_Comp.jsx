import React from 'react'

export const Sale_Comp = (props) => {
  return (
    <div className='w-[80%] md:w-[40%] mx-auto my-10 space-y-8'>
      <h1 className='text-3xl md:text-4xl font-semibold text-center'>{props.text}</h1>
      <h1 className='text-sm text-center mx-3 md:text-xl text-gray-500'>{props.para}</h1>
    </div>
  )
}
