
import React from "react";
import Operations from "./Operations/Operations";

export function Generatepc(props){
    console.log(props)
    
    return(
    <div className="hidden md:block mt-20" >

<button className="px-2 py-2 mt-5 text-center bg-white border-2 text-black rounded-full w-full "onClick={()=>{Operations(props); }}>Generate Qr</button>
</div> )
}