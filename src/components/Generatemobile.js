import React from "react"

import Operations from "./Operations/Operations"

export function Generatemobile(props){
    console.log(props.value)
    console.log(props.profilePic)
    return(
    <div className="md:hidden" >

<button className="px-2 py-2 mt-5 text-center bg-white border-2 text-black rounded-full w-full md:w-[150px]" onClick={()=>{Operations(props); }}>Generate Qr</button>
</div> )
}