import styled from "styled-components";
import React, { useContext } from "react";
import { Avatar, TextField } from "@mui/material";
import Download from "./Download";
export default function Cover(props) {
console.log(props)
  return (
    <Wrapper className="w-[100%] md:w-[40%] h-[300px] md:h-[100%]">
   <div className=" grid justify-center ">
    <div className="border-2  rounded-full h-auto">

  <Avatar src={props.value.profileUrl} sx={{width:150,height:150}}></Avatar>

  </div>
  </div> 
  <h1 className="text-white text-[30px] text-center">{props.value.firstname} {props.value.lastname}</h1>
 
<button className="bg-white text-black text-center px-2 py-3  border-2 border-gray-500 rounded-full w-full md:mt-[50px]"onClick={()=>{
  Download(props.value)
}}>Download Vcard</button>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  position: relative;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  border-radius: 10px;
  padding: 20px;
  padding-top:15px;

  .logo {
    top: 20px;
    right: 20px;
  }

  .avatar {
    top: 62px;
    right: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  color: #ffffff;
`;

const Subtitle = styled.p`
  font-size: 15px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
`;

const Circle = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
