import React from "react";
import { useState } from "react";
import { Generatemobile } from "../Generatemobile";
export default function Text(){
    const [textInput,settextInput]=useState('')
  return(  
  <div>
  <input
    type={"text"}
    placeholder="Enter your Text here"
    value={textInput}
    id="text_input"
    onChange={(event)=>{
        settextInput(event.target.value)
        
    }}
    className="mt-2 w-full h-[100px] rounded-lg bg-transparent  focus:outline-0 text-white pt-0 text-[20px] md:text-[30px] pl-2 md:pl-5"
  ></input>
 <div className="border-t-2 md:border-0">
 <Generatemobile></Generatemobile></div>
  </div>)
}