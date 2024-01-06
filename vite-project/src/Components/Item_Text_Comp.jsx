import React from 'react'
import { Button_Comp } from './Button_Comp'

export const Item_Text_Comp = () => {
  return (
    <div className='lg:w-[65%] md:w-full space-y-5'>
    <h1 className='text-red-600 text-3xl md:text-5xl italic font-serif'>30% Off</h1>
    <h1 className='lg:text-6xl text-4xl font-bold'>Comfort Chair</h1>
    <h1 className='md:text-2xl text-xl'>Collect From Daxone & get 30% Discount.</h1>
    <Button_Comp/>
    </div>
  )
}

