import styled from "styled-components";
import {BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import Background from "./components/Background";
import Wave from "./components/Wave";
import TextSection from "./components/TextSection";
import Card from "./components/Card";
import { useContext, useState } from "react";
import { Firekey } from "./components/Context";
import Operations from "./components/Operations/Operations";
import React from "react";
import Result from "./components/Result/Result";

export default function App() {


  function Home(){
    return(
      <Wrapper>
      <Background />
      <WaveWrapper>
        <Wave />
      </WaveWrapper>
      <TextSection />
      <CardWrapper>
        <Card />
      </CardWrapper>
    </Wrapper>
    )
  }
  return (
    <BrowserRouter>
 <Routes>
  <Route  path="/" element={<Home />}>
 
    </Route>
    <Route index path="/generated/:qrid" element={<Result />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const WaveWrapper = styled.div`
  position: relative;
  top: 200px;
`;

const CardWrapper = styled.div`
  padding: 0 20px;
`;
