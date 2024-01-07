
import { Sale_Comp } from "../Components/Sale_Comp"

export const Cards_Details_Comp = (props) => {
  return (
    <div className="text-center">
          <Sale_Comp text='Products Details'/>
           <button onClick={props.Go_Back} className="flex md:justify-start justify-center mx-auto px-6 my-5 py-2 outline outline-1 text-red-500 hover:bg-red-500 hover:text-white"> Return </button>  
      <div className="md:w-[80%] md:flex mx-auto bg-gray-300 py-5 rounded-xl">
        
        <div className="md:w-1/2 mx-3 ">
                  <img src={props.image} className="p-2 rounded-md md:my-auto md:h-full md:rounded-none" alt="" />
        </div>
                  <div className='md:w-1/2 items-center md:mt-8 space-y-3 md:space-y-10 h-full m-4 md:ms-7 my-auto text-start '>
                      <h1 className='text-center  text-xl md:text-3xl border'>Product : {props.tag}</h1>
                      <h1 className=' text-2xl text-center md:text-5xl'>{props.title}</h1>
                      <h1 className='ms-3'>Price : ${props.price}</h1>
                      <h1 className="text-bold">{props.description}</h1>
                      <button className="flex md:justify-start mx-auto px-6 my-5 rounded-full py-2 outline outline-1 text-red-500 hover:bg-red-500 hover:text-white"> Add to Cart </button>  
                  </div>

                  </div>
                    <div>

                    </div>
                  </div>
  )
}

