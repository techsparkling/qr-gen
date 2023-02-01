import React from "react";
import Background from "./Components/Background";
import Wave from "./Components/Wave";
import styled from "styled-components";
import TextSection from "./Components/TextSection";
import Card from "./Components/Card";
export default function VCard_result(props){

console.log(props)
    return(
        <Wrapper>
        <Background />
        <WaveWrapper>
          <Wave />
        </WaveWrapper>
        <TextSection />
        <CardWrapper >
          <Card value={props.value}/>
        </CardWrapper>
      </Wrapper>
    )
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