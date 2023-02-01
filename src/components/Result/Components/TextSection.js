import styled from "styled-components";
import React from "react";
export default function TextSection() {
  return (
    <Wrapper>
      {/* <Subtitle>Advanced Qr generator</Subtitle>
      <Title>Make any kind of QR under 5 min</Title>
      <Description>
      We allow you to build qr codes for any kind of task.
      </Description> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  max-width: 380px;
  display: grid;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
  padding: 140px 20px;
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
  margin: 0;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  margin: 0;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0;
`;
