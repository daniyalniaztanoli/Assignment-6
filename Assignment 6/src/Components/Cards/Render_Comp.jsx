import React from 'react'
import { useState } from 'react'
import { Cards_Details_Comp } from '../Cards_Details_Comp'
import { Product_Comp } from './Product_Comp'
const Products = [
    {
        id:1,
        image:'../../../public/images/pro-hm1-1.jpg',
        tag:"Chair",
        title:"Golden Easy Spot Chair.",
        price:"210.00",
        oldprice:"210.00",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, odio. Excepturi ab non, necessitatibus magni quidem libero suscipit quos iste?"
    },
    {
        id:2,
        image:'../../../public/images/pro-hm1-2.jpg',
        tag:"Chair",
        title:"Golden Easy Spot Chair.",
        price:"210.00",
        oldprice:"210.00",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, odio. Excepturi ab non, necessitatibus magni quidem libero suscipit quos iste?"
    },
    {
        id:3,
        image:'../../../public/images/pro-hm1-3.jpg',
        tag:"Chair",
        title:"Golden Easy Spot Chair.",
        price:"210.00",
        oldprice:"210.00",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, odio. Excepturi ab non, necessitatibus magni quidem libero suscipit quos iste?"
    },
    {
        id:4,
        image:'../../../public/images/pro-hm1-4.jpg',
        tag:"Chair",
        title:"Golden Easy Spot Chair.",
        price:"210.00",
        oldprice:"210.00",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, odio. Excepturi ab non, necessitatibus magni quidem libero suscipit quos iste?"
    },
    {
        id:5,
        image:'../../../public/images/pro-hm1-5.jpg',
        tag:"Chair",
        title:"Golden Easy Spot Chair.",
        price:"210.00",
        oldprice:"210.00",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, odio. Excepturi ab non, necessitatibus magni quidem libero suscipit quos iste?"
    },
    {
        id:6,
        image:'../../../public/images/pro-hm1-6.jpg',
        tag:"Chair",
        title:"Golden Easy Spot Chair.",
        price:"210.00",
        oldprice:"210.00",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, odio. Excepturi ab non, necessitatibus magni quidem libero suscipit quos iste?"
    },
    {
        id:7,
        image:'../../../public/images/pro-hm1-7.jpg',
        tag:"Chair",
        title:"Golden Easy Spot Chair.",
        price:"210.00",
        oldprice:"210.00",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, odio. Excepturi ab non, necessitatibus magni quidem libero suscipit quos iste?"
    },
    {
        id:8,
        image:'../../../public/images/pro-hm1-8.jpg',
        tag:"Chair",
        title:"Golden Easy Spot Chair.",
        price:"210.00",
        oldprice:"210.00",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, odio. Excepturi ab non, necessitatibus magni quidem libero suscipit quos iste?"
    },
  ]
  
const Render_Comp = () => {
    const [first, setfirst] = useState(null)
    const Go_Back = () =>{
      setfirst(null);
    }
    const Show_handle_data = (data)=>{
      setfirst(data)
    }
  return (
    <div className='md:flex justify-center mx-auto space-x-3'>
          {first ? (
  <Cards_Details_Comp
    Go_Back={Go_Back}
    image={first.image}
    title={first.title}
    tag={first.tag}
    description={first.description}
    price={first.price}
  />
) : (
  <div className='w-[80%] lg:grid-cols-4 space-y-5 mx-auto gap-5 grid md:grid-cols-2  sm:grid-cols-2 items-center grid-cols-1'>
    {Products.map((CurrentObj, index) => (
      <Product_Comp
        key={index}
        Show_handle_data={Show_handle_data}
        image={CurrentObj.image}
        title={CurrentObj.title}
        tag={CurrentObj.tag}
        description={CurrentObj.description}
        price={CurrentObj.price}
      />
    ))}
  </div>
)}

    </div>
  )
}

export default Render_Comp
