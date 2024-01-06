import { Cards2_Comp } from "../Components/Cards2_Comp"
import { Footer_Comp } from "../Components/Footer_Comp"
import { Navbar_Comp } from "../Components/Navbar_Comp"
import { Sale_Comp } from "../Components/Sale_Comp"
import { Sub_Footer_Comp } from "../Components/Sub_Footer_Comp"
import { BrowserRouter as Router } from "react-router-dom"


export const Details_Comp = () => {
  return (
    <div className="">
    <div className="bg_img1">
    <Navbar_Comp/>
      <div className="text-center">
    <h1 className="text-4xl font-bold my-20">Products Details Page</h1>
      </div>
      </div>
      <div>
      <Sale_Comp text='All Products' para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
      </div>
      <div className="my-10 w-[80%] lg:grid-cols-4 space-y-5 mx-auto gap-5 grid md:grid-cols-2  sm:grid-cols-2 items-center grid-cols-1 justify-center">
      <Cards2_Comp/>
      </div>
      <div className="footer pt-10 pb-10 md:p-10 bg-[#F8F8F8]">
 <div className="w-[80%] mx-auto">
 <Footer_Comp/>
 </div>
 </div>
 sub Footer
 <div className="">
   <Sub_Footer_Comp/>
    </div>
      </div>
     
  )
}

