import React from 'react'
import { Button_Comp } from './Button_Comp'

export const Sale_Two_Comp = () => {
  return (
    <div className='w-full items-center flex flex-col justify-center lg:my-20 space-y-6 mt-6 md:ms-10 lg:space-y-5 md:space-y-2'>
        <h1 className='text-base text-gray-500 md:text-sm'>Lorem Ipsum is simply dummy text of the
printing and typesetting industry.</h1>
        <h1 className='text-5xl font-semibold lg:text-6xl md:text-3xl'>Winter Discount Up to 30%</h1>
        <h1 className='text-base md:mb-3 text-gray-500 md:text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h1>
      <Button_Comp />
    </div>
  )
}
