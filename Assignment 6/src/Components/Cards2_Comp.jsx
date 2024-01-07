// import Img1 from '../../public/images/pro-hm1-1.jpg'
// import Img2 from '../../public/images/pro-hm1-2.jpg'
// import Img3 from '../../public/images/pro-hm1-3.jpg'
// import Img4 from '../../public/images/pro-hm1-4.jpg'
// import Img5 from '../../public/images/pro-hm1-5.jpg'
// import Img6 from '../../public/images/pro-hm1-6.jpg'
// import Img7 from '../../public/images/pro-hm1-7.jpg'
// import Img8 from '../../public/images/pro-hm1-8.jpg'


const Products = [
    {
        id:9,
        img_url:'../../public/images/pro-hm1-1.jpg',
        tag:"Chair",
        title:"Golden Easy Spot Chair.",
        price:"210.00",
        oldprice:"210.00"
    },
    {
        id:10,
        img_url:'../../public/images/pro-hm1-2.jpg',
        tag:"Chair",
        title:"Golden Easy Spot Chair.",
        price:"210.00",
        oldprice:"210.00"
    },
    {
        id:11,
        img_url:'../../public/images/pro-hm1-3.jpg',
        tag:"Chair",
        title:"Golden Easy Spot Chair.",
        price:"210.00",
        oldprice:"210.00"
    },
    {
        id:12,
        img_url:'../../public/images/pro-hm1-4.jpg',
        tag:"Chair",
        title:"Golden Easy Spot Chair.",
        price:"210.00",
        oldprice:"210.00"
    }
]

import React, { useState } from 'react';

export const Cards2_Comp = () => {
    return (
        Products.map((items)=>{
          return(
              <div className='flex justify-center '>
              <div className='cursor-pointer hover:scale-y-110 rounded-xl' key={items.id} >
                  <img src={items.img_url} alt="" />
                  <div className='flex flex-col'>
                      <h1 className='ms-3'>{items.tag}</h1>
                      <h1 className='ms-3'>{items.title}</h1>
                      <h1 className='ms-3'>${items.price}</h1>
                  </div>
              
              </div>
              </div>
          )
      })
    )
  }