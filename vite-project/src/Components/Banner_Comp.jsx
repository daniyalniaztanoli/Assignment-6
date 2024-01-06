import React from 'react'

const Banner_Comp = () => {
  return (
    <div className=' banner'>
  <div className='text-center md:text-right md:me-52 p-10 text-white flex flex-col'>
    <h1 className='md:text-3xl text-lg text-amber-700 font-bold'>Premium Home</h1>
    <h1 className='md:text-3xl  text-amber-700 font-bold'>Decorator</h1>
    <a className='uppercase text-lg mt-4 inline-block px-4 py-2 text-amber-700 underline' href="#">Learn more</a>
  </div>
</div>

  )
}
export {Banner_Comp};