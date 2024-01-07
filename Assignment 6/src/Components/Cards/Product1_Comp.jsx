import React from 'react'

export const Product1_Comp = (props) => {
const Click_Handle1_Show = () =>{
    props.Show_handle1_data(props);
}
    return (
              <div onClick={Click_Handle1_Show} className=''>
              <div className='cursor-pointer hover:scale-y-110 rounded-xl'>
                  <img src={props.image} alt="" />
                  <div className='flex flex-col'>
                      <h1 className='ms-3'>{props.tag}</h1>
                      <h1 className='ms-3'>{props.title}</h1>
                      <h1 className='ms-3'>${props.price}</h1>
                      <h1 className="ms-3 hidden">{props.description}</h1>
                  </div>
              
              </div>
              </div>
          )
  }