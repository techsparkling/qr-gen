import styled from "styled-components";

import StarsBackground from "./Images/stars.svg";
import React from "react";
export default function Background() {
  return (
    <div>
      <Wrapper />
      <Stars />
    </div>
  );
}

const Wrapper = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 1200px;
  background: linear-gradient(180deg, #000 50%, #351494 100%);
`;

const Stars = styled.div`
  position: absolute;
  width: 100%;
  background-position: top center;
  background-repeat: repeat;
  background-image: url(${StarsBackground});
  height: 224px;
  top: 10px;
`;
