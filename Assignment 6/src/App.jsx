import "./App.css"
import { BrowserRouter as Router, Route, BrowserRouter, Link } from "react-router-dom";
import { Navbar_Comp } from "./Components/Navbar_Comp";
import { Item_Img_Comp } from "./Components/Item_Img_Comp";
import { Item_Text_Comp } from "./Components/Item_Text_Comp";
import { Banner_Comp } from "./Components/Banner_Comp";
import { Sale_Comp } from "./Components/Sale_Comp";
import { Cards_Comp } from "./Components/Cards_Comp";
import { Sale_Two_Comp } from "./Components/Sale_Two_Comp";
import { Sale_Img_Comp } from "./Components/Sale_Img_Comp";
import { Footer_Comp } from "./Components/Footer_Comp";
import {Sub_Footer_Comp} from "./Components/Sub_Footer_Comp";
import { useState } from "react";
import React from "react";
import { Cards2_Comp } from "./Components/Cards2_Comp";
import Show_Cards_Comp from "./Components/Show_Cards_Comp";
import { Cards_Details_Comp } from "./Components/Cards_Details_Comp";
import { Product_Comp } from "./Components/Cards/Product_Comp";
import image from '../public/images/pro-hm1-1.jpg'
import { data } from "autoprefixer";
import Render_Comp from "./Components/Cards/Render_Comp";
import Render1_Comp from "./Components/Cards/Render1_Comp";


const App = () => {
  
  return (
    <div>
        <div className="bg_img">
  <div className="mx-2">
  <Navbar_Comp/>
  </div>

  <div id="hero" className="lg:w-full lg:mx-auto md:flex md:flex-row flex flex-col md:justify-center pb-10">
    <div className="md:w-1/2 mx-auto">
  <Item_Img_Comp width='600'/>
    </div>
    <div className="md:w-1/2 my-auto mx-auto text-center">
  <Item_Text_Comp/>
    </div>
</div>
</div>

<div className="w-[80%] mx-auto my-5 md:h-48">
  <Banner_Comp/>
</div>

<div className="">
<Sale_Comp text='Hot Sell' para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text'"/>
</div>

<div className="my-10">
    
    <Render1_Comp/>
</div>

<div className="md:w-[80%] mx-auto flex md:flex-row flex-col ">
<div className="md:w-1/2 lg:w-1/2 md:mx-0 mx-10">
<Sale_Img_Comp/>
</div>
<div className="md:w-1/2 mx-10 lg:w-1/2 text-center md:my-0 lg:m-0 ">
<Sale_Two_Comp/>
</div>
</div>

<div>
<Sale_Comp text='All Products' para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
</div>

<div className="my-10">
    <Render_Comp/>
</div>

<div className="footer pt-10 pb-10 md:p-10 bg-[#F8F8F8]">
<div className="w-[80%] mx-auto">
<Footer_Comp/>
</div>
</div>

<div className="">
  <Sub_Footer_Comp/>
</div>
      </div>
  )
}

export default App;


