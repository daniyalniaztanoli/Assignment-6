import React, { useState } from 'react'
import { Brand_Comp } from './Brand_Comp'
import '../App.css'

export const Navbar_Comp = () => {
    const[menuopen,setMenuopen] = useState(false)
  return (
      // Desktop Version
      <>
      <div className='bg_img hidden md:block'>
        <nav className='md:flex lg:flex container hidden justify-evenly p-4'>
            <div className='md:text-xl lg:text-2xl'>
            <Brand_Comp width='180'/>
            </div>
            <div>
                <ul className=' flex text-2xl md:text-lg lg:text-2xl md:space-x-4 md:p-2'>
                    <li className='hover:text-red-500 duration-150'><a href="#">Home</a></li>
                    <li className='hover:text-red-500 duration-150'><a href="#">Shop</a></li>
                    <li className='hover:text-red-500 duration-150'><a href="#">Mens</a></li>
                    <li className='hover:text-red-500 duration-150'><a href="#">Pages</a></li>
                    <li className='hover:text-red-500 duration-150'><a href="#">Blog</a></li>
                    <li className='hover:text-red-500 duration-150'><a href="#">Contact</a></li>
                </ul>
            </div>
            <div>
                <ul className='flex md:space-x-2 md:text-lg lg:text-2xl text-2xl md:p-2'>
                    <li className='hover:text-red-500 duration-150'><a href=""><i class="fa-solid fa-cart-shopping"></i> 2 items</a></li>
                    <li className='hover:text-red-500 duration-150'><a href=""><i class="fa-solid fa-magnifying-glass fa-rotate-90"></i></a></li>
                </ul>
            </div>
        </nav>
      
    </div>
    {/* Mobile version */}
    <div className='bg_img'>
        <nav className='flex justify-between md:hidden'>
            <div className='m-3'>
                <Brand_Comp width='120'/>
            </div>
            <div className=''>
                <ul className='flex flex-row'>
                    <li className='text-xl my-3'><a href="#"><i class="fa-solid fa-cart-shopping"></i> 2 items</a></li>
                    {   !menuopen ?
                        <li onClick={()=> setMenuopen(true)} className='text-xl m-3'><a href="#"><i class="fa-solid fa-bars"></i></a></li> :
                        <li onClick={()=> setMenuopen(false)} className='text-xl m-3'><a href="#"><i class="fa-solid fa-x"></i></a></li>
                        }
                </ul>
            </div>
            <ul className='flex flex-col text-center gap-4 shadow-xl p-6 absolute top-14 left-0 right-0 font-[500] bg-white translate-y-[-150%] transition-all duration-700 z-20 ' style={{transform: menuopen && "translatey(0%)"}}>
                <li className=' hover:scale-105 transition-all hover:font-bold w-1/4 rounded mx-auto'><a href="#">Home</a></li>
                <li className=' hover:scale-105 transition-all hover:font-bold w-1/4 rounded mx-auto'><a href="#">Shop</a></li>
                <li className=' hover:scale-105 transition-all hover:font-bold w-1/4 rounded mx-auto'><a href="#">Mens</a></li>
                <li className=' hover:scale-105 transition-all hover:font-bold w-1/4 rounded mx-auto'><a href="#">Pages</a></li>
                <li className=' hover:scale-105 transition-all hover:font-bold w-1/4 rounded mx-auto'><a href="#">Blog</a></li>
                <li className=' hover:scale-105 transition-all hover:font-bold w-1/4 rounded mx-auto'><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
    </>
    
  )
}

