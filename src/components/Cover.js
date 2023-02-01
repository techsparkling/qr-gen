import styled from "styled-components";

import { Generatepc } from "./GeneratePc";
import QRGenerator from "./qrgen/QRGenrator";
import React, { useContext } from "react";

import { Firekey } from "./Context";
import Operations from "./Operations/Operations";


import { setGlobalState,useGlobalState } from "../snap";
export default function Cover(props) {
  const key=useGlobalState("key")
const profileUrl=useGlobalState('profileUrl')
  const Generate=()=>{

   

    return(<Generatepc value={props.value} profilePic={profileUrl[0]}></Generatepc>)
   
  }
  return (
    <Wrapper className="w-[100%] md:w-[40%] h-[250px] md:h-[100%]">
   <div className="h-1/2">
  <QRGenerator value={key[0]}></QRGenerator>
   </div> 
  <Generate ></Generate>
  
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
