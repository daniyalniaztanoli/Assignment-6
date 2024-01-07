// import Img1 from '../../public/images/pro-hm1-1.jpg'
// import Img2 from '../../public/images/pro-hm1-2.jpg'
// import Img3 from '../../public/images/pro-hm1-3.jpg'
// import Img4 from '../../public/images/pro-hm1-4.jpg'
// import Img5 from '../../public/images/pro-hm1-5.jpg'
// import Img6 from '../../public/images/pro-hm1-6.jpg'
// import Img7 from '../../public/images/pro-hm1-7.jpg'
// import Img8 from '../../public/images/pro-hm1-8.jpg'



import React from 'react'

export const Cards_Comp = (props) => {
const Click_Handle_Show = () =>{
    props.Click_Handle(props);
}
    return (
              <div onClick={Click_Handle_Show} className='flex justify-center '>
              <div className='cursor-pointer hover:scale-y-110 rounded-xl'>
                  <img src={items.image} alt="" />
                  <div className='flex flex-col'>
                      <h1 className='ms-3'>{items.tag}</h1>
                      <h1 className='ms-3'>{items.title}</h1>
                      <h1 className='ms-3'>${items.price}</h1>
                  </div>
              
              </div>
              </div>
          )
  }
  
  



