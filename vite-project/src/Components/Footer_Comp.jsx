import React from 'react'
import { Brand_Comp } from './Brand_Comp'

export const Footer_Comp = () => {
  return (
    <div className='grid md:grid-cols-4 gap-5 w-full'>
    <div className='flex flex-col justify-center mx-auto md:mx-0 space-y-4 md:w-full text-center md:text-start'>
      <Brand_Comp  width='150'/>
        <h1 className='text-black font-semibold text-center md:text-start'>Follow us:</h1>
      <ul className='flex space-x-3 text-xl justify-center md:justify-start md:text-start'>
        <li className='text-gray-500 hover:text-red-500 duration-150 '><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
        <li className='text-gray-500 hover:text-red-500 duration-150 '><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
        <li className='text-gray-500 hover:text-red-500 duration-150 '><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
        <li className='text-gray-500 hover:text-red-500 duration-150 '><a href="#"><i class="fa-brands fa-vimeo-v"></i></a></li>
      </ul>
    </div>
    <div className='md:w-full my-2 border-t md:border-none text-center md:text-start'>
        <h1 className='text-black font-semibold mb-3'>USEFUL LINK</h1>
        <ul className='space-y-3'>
            <li className='hover:text-red-500 duration-150'><a href="#">Shopping Cart</a></li>
            <li className='hover:text-red-500 duration-150'><a href="#">Wishlist</a></li>
            <li className='hover:text-red-500 duration-150'><a href="#">Check Out</a></li>
            <li className='hover:text-red-500 duration-150'><a href="#">Support</a></li>
        </ul>
    </div>
    <div className='md:w-full my-2 border-t md:border-none text-center md:text-start'>
        <h1 className='text-black font-semibold mb-3'>ABOUT US</h1>
        <ul className='space-y-3 flex flex-col'>
            <li className='hover:text-red-500 duration-150'><a href="#">About</a></li>
            <li className='hover:text-red-500 duration-150'><a href="#">Products</a></li>
            <li className='hover:text-red-500 duration-150'><a href="#">Terms And conditions</a></li>
            <li className='hover:text-red-500 duration-150'><a href="#">Help Center</a></li>
        </ul>
    </div>
    <div className='md:w-full my-2 border-t md:border-none text-center mb-4 md:text-start'>
        <h1 className='text-black font-semibold mb-3'>NEWSLETTER</h1>
        <ul className=' flex flex-col md:space-y-8'>
            <li className='md:mt-8 my-3 '>Subscribe to get all new updates</li>
            <li><input placeholder='Enter Your email' className='border-b outline-none bg-transparent' type="text" /><i class='fa-solid fa-search'></i></li>
        </ul>
    </div>
    </div>
  )
}
