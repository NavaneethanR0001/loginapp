import React, { useEffect, useState } from "react";
import {RiMenu3Line} from "react-icons/ri";
import './Home.css';
import {MdOutlineMenuOpen} from "react-icons/md";
import { motion } from "framer-motion";

import EmptyCart from "./rajinilogoo.png";
import CounterPart from "./CounterPart";


  const localEmail=localStorage.getItem("professsion")
  const localname=localStorage.getItem("name")

function Home() {

    const[state,setState] =useState([]);
    const[filterstate,setfilterstate] =useState([]);
    const [button,setButton]=useState(false);
    const [company,setcompany]=useState(false);

  const  onclickbutton =()=>{
    setButton(!button);


  }

  const  onclickcompany =()=>{
    setcompany(!company);


  }
useEffect(()=>{



    const searchMovies = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const dataa = await response.json();
   // console.log(dataa);
    setState(dataa);
    setfilterstate(state.filter((id)=>id.userId==1));
  // console.log(filterstate);
      };
   searchMovies();
}

,[]);
    

     //setfilterstate(state[0].filter((id)=> id.userID =="1"));
  return (
    <>
    <div className="parent">
        <div className="parent1">
      <h1 className="h1text">Login Successfully</h1>
<div className="namecon">
      <h2 className="name">{localname}  </h2>
<img className="img" src={EmptyCart} alt="rajini"></img>
      </div>
      <h3 className="namee">{localEmail}</h3>
          
<div>{filterstate.map((id)=>(
<div key={id.id} className="ttile" >{id.title}</div>

))}
</div>
</div>
<div className="menu">

    <motion.div className="button" onClick={onclickbutton}> <MdOutlineMenuOpen className="menubar"/></motion.div>
    {button && <div className="company">
          <h2 onClick={onclickcompany}>Company Info</h2>

    </div> }

    {company &&<motion.div initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }} className="cdetails">
        <h4> Company: M8 IT Solutions Pvt Ltd</h4>
        <h3>   Address: 3rd Floor, Vue Grande, 339, Chinnaswamy Road, Siddhapudur, Balasundaram Layout, B.K.R Nagar, Coimbatore, Tamil Nadu 641044</h3>
        <p>Phone: 1231231233

Email: abc@gmail.com
</p>
       
        </motion.div>}
</div>
  </div>

  <CounterPart/>
</>
);
}


export default Home