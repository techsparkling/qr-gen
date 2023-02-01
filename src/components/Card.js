import styled from "styled-components";
import { useState } from "react";
import Cover from "./Cover";
import Row from "./Row";
import Url from "./type/Url";
import React from "react";

import Generate from"./type/Email"
import Text from "./type/Text";
import Email from "./type/Email";
import VCard from "./type/Vcard";
export default function Card() {
  const [url, setUrl] = useState(false);
  const [text, setText] = useState(false);
  const [vcard, setVcard] = useState(false);
   const [email, setEmail] = useState(false);
  const [sms, setSms] = useState(false);
  const [resume, setResume] = useState(false);
  const [socials, setSocials] = useState(false);
  const [profile, setProfile] = useState(false);
  const [file, setFile] = useState(false);
  const [wifi, setWifi] = useState(false);
  function type() {
    setUrl(false);
    setText(false);
    setVcard(false);
    setEmail(false);
    setSms(false);
    setResume(false);
    setSocials(false);
    setProfile(false);
    setFile(false);
    setWifi(false);

  }
function Gen(){

if(url){
  return( <Cover value={'url'} />)
  }
  if(text){
    return( <Cover value={'text'} />)
    }
else if(email){
  return( <Cover value={'email'} />)
}
else if(vcard){
  return( <Cover value={'vcard'} />)
}
  else{
    return(<Cover value={true}/>)
  }
}

  function Render(){
    if(url){
      return(<Url></Url>)
    }
    else if(text){
      return(<Text></Text>)
    }
    else if(email){
      return(<Email></Email>)
    }
    else if(vcard){
      return(<VCard></VCard>)
    }

  }
  return (
   
    <Wrapper className="flex flex-wrap md:flex-nowrap h-[auto] md:h-[400px]">
     <Gen></Gen>
      <div className="overflow-auto ">
      <div className="pl-5">
        <div className="text-white text-[20px] font-bold ">
          {" "}
          Select Your Type:
        </div>
        <div className="flex flex-wrap pt-5 gap-5 ">
          <div
            className={url?"px-5 py-2 rounded-full cursor-pointer border-2 border-white bg-white text-black hover:text-black hover:bg-white":"px-5 py-2 rounded-full cursor-pointer  border-2 backdrop-blur-sm bg-transparent border-white filter text-white hover:text-black hover:bg-white"}
            id="url"
            onClick={()=>{type();setUrl(true)}}

          >
            Url
          </div>
          <div
          className={text?"px-5 py-2 rounded-full cursor-pointer border-2 border-white bg-white text-black hover:text-black hover:bg-white":"px-5 py-2 rounded-full cursor-pointer  border-2 backdrop-blur-sm bg-transparent border-white filter text-white hover:text-black hover:bg-white"}
            id="text"
            onClick={()=>{type();setText(true)}}
          >
            Text
          </div>
          <div
          className={vcard?"px-5 py-2 rounded-full cursor-pointer border-2 border-white bg-white text-black hover:text-black hover:bg-white":"px-5 py-2 rounded-full cursor-pointer  border-2 backdrop-blur-sm bg-transparent border-white filter text-white hover:text-black hover:bg-white"}
            id="vcard"
            onClick={()=>{type();setVcard(true)}}
          >
            VCard
          </div>
          <div
          className={email?"px-5 py-2 rounded-full cursor-pointer border-2 border-white bg-white text-black hover:text-black hover:bg-white":"px-5 py-2 rounded-full cursor-pointer  border-2 backdrop-blur-sm bg-transparent border-white filter text-white hover:text-black hover:bg-white"}
            id="email"
            onClick={()=>{type();setEmail(true)}}
          >
            Email
          </div>
          <div
          className={sms?"px-5 py-2 rounded-full cursor-pointer border-2 border-white bg-white text-black hover:text-black hover:bg-white":"px-5 py-2 rounded-full cursor-pointer  border-2 backdrop-blur-sm bg-transparent border-white filter text-white hover:text-black hover:bg-white"}
            id="sms"
            onClick={()=>{type();setSms(true)}}
          >
            SMS
          </div>
          <div
          className={resume?"px-5 py-2 rounded-full cursor-pointer border-2 border-white bg-white text-black hover:text-black hover:bg-white":"px-5 py-2 rounded-full cursor-pointer  border-2 backdrop-blur-sm bg-transparent border-white filter text-white hover:text-black hover:bg-white"}
            id="resume"
            onClick={()=>{type();setResume(true)}}
            >
            Resume
          </div>
          <div
          className={socials?"px-5 py-2 rounded-full cursor-pointer border-2 border-white bg-white text-black hover:text-black hover:bg-white":"px-5 py-2 rounded-full cursor-pointer  border-2 backdrop-blur-sm bg-transparent border-white filter text-white hover:text-black hover:bg-white"}
            id="social"
            onClick={()=>{type();setSocials(true)}}
          >
            Social Media
          </div>
          <div
          className={profile?"px-5 py-2 rounded-full cursor-pointer border-2 border-white bg-white text-black hover:text-black hover:bg-white":"px-5 py-2 rounded-full cursor-pointer  border-2 backdrop-blur-sm bg-transparent border-white filter text-white hover:text-black hover:bg-white"}
            id="profile"
            onClick={()=>{type();setProfile(true)}}
          >
            Advanced Profile Card
          </div>
          <div
          className={file?"px-5 py-2 rounded-full cursor-pointer border-2 border-white bg-white text-black hover:text-black hover:bg-white":"px-5 py-2 rounded-full cursor-pointer  border-2 backdrop-blur-sm bg-transparent border-white filter text-white hover:text-black hover:bg-white"}
            id="file"
            onClick={()=>{type();setFile(true)}}
          >
            File
          </div>
          <div
          className={wifi?"px-5 py-2 rounded-full cursor-pointer border-2 border-white bg-white text-black hover:text-black hover:bg-white":"px-5 py-2 rounded-full cursor-pointer  border-2 backdrop-blur-sm bg-transparent border-white filter text-white hover:text-black hover:bg-white"}
            id="wifi"
            onClick={()=>{type();setWifi(true)}}
          >
            WIFI
          </div>
        </div>
        </div>
        <div className="p-5">
        <div className="border-t-2 mt-5 ">
        
        <Render></Render>
        </div>
      </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;

  gap: 20px;
  max-width: 1000px;
  width: 100%;

  padding: 20px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25),
    inset 0 0 0 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(40px);
  margin: 0 auto;
`;

const RowWrapper = styled.div`
  display: grid;
  width: 100%;
  height: fit-content;
  gap: 8px;
`;
