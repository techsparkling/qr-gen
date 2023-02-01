import React from "react";
import { useState } from "react";
import Operations from "../Operations/Operations";
import { Generatemobile } from "../Generatemobile";

export default function Email(){
    const [emailInput,setEmailInput]=useState('')
    const [nameInput,setNameInput]=useState('')
    const [messageInput,setMessageInput]=useState('')

  return( 
    <div className=" pl-0 ">
    
    <input
    type={"text"}
    id="name_input"
    placeholder="Enter your Name here"
    value={nameInput}
    onChange={(event)=>{
        setNameInput(event.target.value)
        
    }}
    className="mt-10 w-full h-[50px] pb-7  bg-transparent  border-b-2 focus:outline-0 text-white pt-0 text-[20px] md:text-[30px] pl-2 "
  ></input>
    
    
    
    <input
    type={"text"}
    id="email_input"
    placeholder="Enter your Email here"
    value={emailInput}
    onChange={(event)=>{
        setEmailInput(event.target.value)
        
    }}
    className="mt-10 w-full h-[50px]  pb-7 bg-transparent   border-b-2 focus:outline-0 text-white pt-0 text-[20px] md:text-[30px] pl-2 "
  ></input>
  <input
  type={"text"}
  placeholder="Enter your Message  here"
  id="message_input"
  value={messageInput}
  onChange={(event)=>{
      setMessageInput(event.target.value)
      
  }}
  className="mt-10 w-full h-[50px] pb-7  bg-transparent md:mb-5  border-b-2 focus:outline-0 text-white pt-0 text-[20px] md:text-[30px] pl-2 "
></input>
<Generatemobile value="email"></Generatemobile>
 </div>
  )
}

