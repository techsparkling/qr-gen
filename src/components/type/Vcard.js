import React from "react";
import { useState } from "react";
import Operations from "../Operations/Operations";
import LanguageIcon from '@mui/icons-material/Language';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import { Generatemobile } from "../Generatemobile";
import CallIcon from '@mui/icons-material/Call';
import { Avatar, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { withStyles } from "@mui/styles";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import FiberPinIcon from '@mui/icons-material/FiberPin';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PlaceIcon from '@mui/icons-material/Place';
import BusinessIcon from '@mui/icons-material/Business';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import MapIcon from '@mui/icons-material/Map';
import AddIcon from '@mui/icons-material/Add';
import  Work  from "@mui/icons-material/Work";
import IconButton from '@mui/material/IconButton';
import { setGlobalState,useGlobalState } from "../../snap";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { display } from "@mui/system";
export default function VCard() {
  const handleChange=(res)=>{
    setGlobalState("profileUrl",res)
}
  const profile=useGlobalState("profileUrl")
  const [previewPic,setPreviewPic]=useState()
  const [profilePic,setProfilePic]=useState()
  const [firstnameInput, setFirstnameInput] = useState("");
  const [lastnameInput, setLastnameInput] = useState("");
  const [mobileInput, setMobileInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [companyInput, setCompanyInput] = useState("");
  const [jobInput, setJobInput] = useState("");
  const [streetInput, setStreetInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [zipInput, setZipInput] = useState("");
  const [stateInput, setStateInput] = useState("");
  const [countryInput, setCountryInput] = useState("");
  const [websiteInput, setWebsiteInput] = useState("");
  return (
    <ThemeProvider theme={darkTheme}>
      <div className=" pl-0 ">
<div className="border-b-[0.5px] pb-5">
      <div className="flex justify-center gap-10 pt-5   pb-2">
           <div className="border-2 p-2 rounded-full ">
           <IconButton color="primary"  sx={{
              postion:'absolute'
            }} aria-label="upload picture" component="label">
  <input hidden accept="image/*" type="file" onChange={(event)=>{
              let url=URL.createObjectURL(event.target.files[0])
              setPreviewPic(url)
              setProfilePic(event.target.files[0])
          handleChange(event.target.files[0])
              console.log(event.target.files)
              console.log(previewPic)
            }} />

  <Avatar
            src={previewPic}
            sx={{ width: 76, height: 76 ,bgcolor:'white'}}
            >
           
   
            </Avatar>
</IconButton>

            
     
          
           
            </div>
       
          </div>
             
         <h1 className="text-gray-400 text-center">{(!profilePic)?"Add profilePic by clicking on the above profile icon":"You change the chosen profile pic by clicking on the pic"}  </h1>
         </div>
        <div className="md:flex gap-3">
       
          <Input
            type={"text"}
            id="firstname_input"
            size="medium"
            placeholder={"Enter Your First Name*"}
            value={firstnameInput}
            variant="standard"
            label="First Name*"
            className="ml-5 w-full "
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  className="mt-5"
                  sx={{ color: "white" }}
                >
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            onChange={(event) => {
              setFirstnameInput(event.target.value);
            }}
          ></Input>

          <Input
            type={"text"}
            id="lastname_input"
            size="medium"
            placeholder={"Enter Your Last Name*"}
            value={lastnameInput}
            variant="standard"
            label="Last Name*"
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  className="mt-5"
                  sx={{ color: "white" }}
                >
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            onChange={(event) => {
              setLastnameInput(event.target.value);
            }}
            className="ml-5 w-full "
          ></Input>
        </div>

        <Input
          size="medium"
          type={"text"}
          variant="standard"
          placeholder="Enter Your Mobile Number"
          id="mobile_input"
          value={mobileInput}
          label="Phone No"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                className="mt-5"
                sx={{ color: "white" }}
              >
             <PhoneIphoneIcon></PhoneIphoneIcon>
              </InputAdornment>
            ),
          }}
          onChange={(event) => {
            setMobileInput(event.target.value);
          }}
          className="w-full mt-5"
        ></Input>
        <Input
          type={"text"}
          placeholder="Enter Your TelPhone "
          id="phone_input"
          variant="standard"
          size="medium"
          label="Tel Phone"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                className="mt-5"
                sx={{ color: "white" }}
              >
                <CallIcon></CallIcon>
              </InputAdornment>
            ),
          }}
          value={phoneInput}
          onChange={(event) => {
            setPhoneInput(event.target.value);
          }}
          className="w-full "
        ></Input>
        <Input
        variant="standard"
        label="Email"
          type={"text"}
          placeholder="Enter Your Email "
          id="email_input"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                className="mt-5"
                sx={{ color: "white" }}
              >
                <EmailIcon></EmailIcon>
              </InputAdornment>
            ),
          }}
          value={emailInput}
          onChange={(event) => {
            setEmailInput(event.target.value);
          }}
         className="w-full"

        ></Input> 
        <div className="flex gap-3">
          <Input
            type={"text"}
            variant="standard"
            label="Company"
            placeholder="Enter Your Company "
            id="company_input"
            InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    className="mt-5"
                    sx={{ color: "white" }}
                  >
                <BusinessIcon></BusinessIcon>
                  </InputAdornment>
                ),
              }}
            value={companyInput}
            onChange={(event) => {
              setCompanyInput(event.target.value);
            }}
            className=" w-full "
          ></Input>
          <Input
            type={"text"}
            placeholder="Enter Your Job "
            id="job_input"
            label="Job"
            variant="standard"
            value={jobInput}
            InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    className="mt-5"
                    sx={{ color: "white" }}
                  >
                <Work></Work>
                  </InputAdornment>
                ),
              }}
            onChange={(event) => {
              setJobInput(event.target.value);
            }}
            className="w-full"
          ></Input>
        </div>
        <Input
        variant="standard"
        label="street"
        InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                className="mt-5"
                sx={{ color: "white" }}
              >
           <GpsFixedIcon></GpsFixedIcon>
              </InputAdornment>
            ),
          }}
          type={"text"}
          placeholder="Enter Your Street "
          id="street_input"
          value={streetInput}
          onChange={(event) => {
            setStreetInput(event.target.value);
          }}
          className="w-full"
        ></Input>
        <div className="flex gap-3">
          <Input
          variant="standard"
          label="City"
            type={"text"}
            InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    className="mt-5"
                    sx={{ color: "white" }}
                  >
               <LocationCityIcon></LocationCityIcon>
                  </InputAdornment>
                ),
              }}
            placeholder="Enter Your City "
            id="city_input"
            value={cityInput}
            onChange={(event) => {
              setCityInput(event.target.value);
            }}
            className="w-full"
          ></Input>
          <Input
          variant="standard"
          label="Zip"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                className="mt-5"
                sx={{ color: "white" }}
              >
                <FiberPinIcon />
              </InputAdornment>
            ),
          }}
            type={"text"}
            placeholder="Enter Your Zip "
            id="zip_input"
            value={zipInput}
            onChange={(event) => {
              setZipInput(event.target.value);
            }}
            className="w-full"
          ></Input>
        </div>

        <Input
          type={"text"}
          placeholder="Enter Your State "
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                className="mt-5"
                sx={{ color: "white" }}
              >
               <PlaceIcon></PlaceIcon>
              </InputAdornment>
            ),
          }}
          label="State"
          id="state_input"
          value={stateInput}
          onChange={(event) => {
            setStateInput(event.target.value);
          }}
          className="w-full "
        ></Input>
        <Input
          type={"text"}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                className="mt-5"
                sx={{ color: "white" }}
              >
               <MapIcon></MapIcon>
              </InputAdornment>
            ),
          }}
          label="Country"
          placeholder="Enter Your Country "
          id="country_input"
          value={countryInput}
          onChange={(event) => {
            setCountryInput(event.target.value);
          }}
         className="w-full"
        ></Input>
        <Input
          type={"text"}
          variant="standard"
          placeholder="Enter Your Website "
          id="website_input"
          label="Website"
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                className="mt-5"
                sx={{ color: "white" }}
              >
             <LanguageIcon></LanguageIcon>
              </InputAdornment>
            ),
          }}
          value={websiteInput}
          onChange={(event) => {
            setWebsiteInput(event.target.value);
          }}
         className="w-full"
        ></Input>
        <Generatemobile value="vcard" profilePic={profilePic}></Generatemobile>
      </div>
    </ThemeProvider>
  );
}
const Input = withStyles({
  root: {
    "& .MuiInputBase-input": {
      marginTop: "25px",
      padding: "12px ",
    },

    "& label": {
      marginTop: "20px",
      color: "#cccccccc",
      fontSize: "20px",
      borderBottomColor: "white",
    },

    "& .MuiInputadorment": {
      color: "pink",
    },

    "& .MuiInput-underline": {
      color: "white",
      borderBottomColor: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },

      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
