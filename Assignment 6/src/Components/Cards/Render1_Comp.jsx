import React from 'react'
import { useState } from 'react'
import { Cards1_Details_Comp } from './Cards1_Details_Comp.jsx'
import { Product1_Comp } from './Product1_Comp'
// import im from '../../../public/images/'
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
        image:'.../../../public/images/pro-hm1-2.jpg',
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
    }
  ]
  
const Render1_Comp = () => {
    const [first1, setfirst1] = useState(null)
    const Go_Back = () =>{
      setfirst1(null);
    }
    const Show_handle1_data = (data)=>{
      setfirst1(data)
    }
  return (
    <div className='md:flex justify-center mx-auto space-x-3'>
          {first1 ? (
  <Cards1_Details_Comp
    Go_Back={Go_Back}
    image={first1.image}
    title={first1.title}
    tag={first1.tag}
    description={first1.description}
    price={first1.price}
  />
) : (
  <div className='w-[80%] lg:grid-cols-4 space-y-5 mx-auto gap-5 grid md:grid-cols-2  sm:grid-cols-2 items-center grid-cols-1'>
    {Products.map((CurrentObj, index) => (
      <Product1_Comp
        key={index}
        Show_handle1_data={Show_handle1_data}
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

export default Render1_Comp;
