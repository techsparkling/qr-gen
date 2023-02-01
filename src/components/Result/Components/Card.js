import styled from "styled-components";

import Cover from "./Cover";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";

import { City, Company, Country, Email, Firstname, Job, Lastname, Mobile, Street, Telephone, Website, Zip } from "./Fields";
export default function Card(props) {
  const style = {
    width: "100%",

    bgcolor: "background.dark",
  };

  return (
    <Wrapper className="flex flex-wrap md:flex-nowrap h-[auto] md:h-[400px]">
      <Cover value={props.value} />

      <div className="w-[100%] md:w-[90%] overflow-auto">
        <div className="w-[100%]">
          <ThemeProvider theme={darkTheme}>
            <List>
              {/* Div to make First Name and Last Name flex in MD */}
              <div className="md:flex">
                {/* First Name Field */}
                <Firstname value={props.value.firstname}></Firstname>
                {/* Divider/Line */}
                <Divider variant="middle" component="li" />
                {/* Last Name Field */}
                <Lastname value={props.value.lastname}></Lastname>
                {/* Divider/Line */}
                <Divider variant="middle" component="li" />
              </div>
              {/* Divider/Line */}
              <Divider variant="middle" component="li" />
              {/* Mobile No Field */}
              <Mobile value={props.value.mobile}></Mobile>

              <Divider variant="middle" component="li" />
              {/* Telephone Field */}
              <Telephone value={props.value.phone}></Telephone>
              <Divider variant="middle" component="li" />
<Email value={props.value.email}></Email>
              <Divider variant="middle" component="li" />
              <Company value={props.value.company}></Company>
              <Divider variant="middle" component="li" />
              <Job value={props.value.job}></Job>
              <Divider variant="middle" component="li" />
              <Street value={props.value.street}></Street>
              <Divider variant="middle" component="li" />
            <City value={props.value.city}></City>
            <Divider variant="middle" component="li" />
            <Zip value={props.value.zip}></Zip>
            <Divider variant="middle" component="li" />
            <Country value={props.value.country}></Country>
            <Divider variant="middle" component="li" />
            <Website value={props.value.website}></Website>
            </List>
          </ThemeProvider>
        </div>
      </div>
    </Wrapper>
  );
}
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
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
