import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import PersonIcon from "@mui/icons-material/Person";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import EmailIcon from "@mui/icons-material/Email";
import FiberPinIcon from "@mui/icons-material/FiberPin";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import PlaceIcon from "@mui/icons-material/Place";
import BusinessIcon from "@mui/icons-material/Business";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import MapIcon from "@mui/icons-material/Map";
import AddIcon from "@mui/icons-material/Add";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import Work from "@mui/icons-material/Work";
import LocationCity from "@mui/icons-material/LocationCity";
import FiberPin from "@mui/icons-material/FiberPin";
import Language from "@mui/icons-material/Language";

export function Firstname(props) {
  console.log(props);
  if (props.value !== "") {
    return (
      <ListItem sx={{ width: 1 }} className="">
        <ListItemAvatar>
          <PersonIcon sx={{ height: 40, width: 40 }} />
        </ListItemAvatar>
        <ListItemText
          primary={props.value}
          primaryTypographyProps={{ fontSize: "18px" }}
          secondaryTypographyProps={{ fontSize: "16px" }}
          secondary="First Name"
        />
      </ListItem>
    );
  }
}
export function Lastname(props) {
  console.log(props);
  if (props.value !== "") {
    return (
      <ListItem sx={{ width: 1 }} className="flex ">
        <ListItemAvatar>
          <PersonIcon sx={{ height: 40, width: 40 }} />
        </ListItemAvatar>
        <ListItemText
          primary={props.value}
          primaryTypographyProps={{ fontSize: "18px" }}
          secondaryTypographyProps={{ fontSize: "16px" }}
          secondary="Last Name"
        />
      </ListItem>
    );
  }
}
export function Mobile(props) {
  if (props.value !== "") {
    return (
      <ListItem sx={{ width: 1 }} className="">
        <ListItemAvatar>
          <PhoneAndroidOutlinedIcon sx={{ height: 40, width: 40 }} />
        </ListItemAvatar>
        <ListItemText
          primary={props.value}
          primaryTypographyProps={{ fontSize: "18px" }}
          secondaryTypographyProps={{ fontSize: "16px" }}
          secondary="Mobile No"
        />
      </ListItem>
    );
  }
}
export function Telephone(props) {
  if (props.value !== "") {
    return (
      <ListItem sx={{ width: 1 }} className="">
        <ListItemAvatar>
          <PhoneOutlinedIcon sx={{ height: 40, width: 40 }} />
        </ListItemAvatar>
        <ListItemText
          primary={props.value}
          primaryTypographyProps={{ fontSize: "18px" }}
          secondaryTypographyProps={{ fontSize: "16px" }}
          secondary="Telephone No"
        />
      </ListItem>
    );
  }
}

export function Email(props) {
  if (props.value !== "") {
    return (
      <ListItem sx={{ width: 1 }} className="">
        <ListItemAvatar>
          <EmailIcon sx={{ height: 40, width: 40 }} />
        </ListItemAvatar>
        <ListItemText
          primary={props.value}
          primaryTypographyProps={{ fontSize: "18px" }}
          secondaryTypographyProps={{ fontSize: "16px" }}
          secondary="Email Id"
        />
      </ListItem>
    );
  }
}
export function Company(props) {
  if (props.value !== "") {
    return (
      <ListItem sx={{ width: 1 }} className="">
        <ListItemAvatar>
          <BusinessIcon sx={{ height: 40, width: 40 }} />
        </ListItemAvatar>
        <ListItemText
          primary={props.value}
          primaryTypographyProps={{ fontSize: "18px" }}
          secondaryTypographyProps={{ fontSize: "16px" }}
          secondary="Company"
        />
      </ListItem>
    );
  }
}
export function Job(props) {
  if (props.value !== "") {
    return (
      <ListItem sx={{ width: 1 }} className="">
        <ListItemAvatar>
          <WorkIcon sx={{ height: 40, width: 40 }} />
        </ListItemAvatar>
        <ListItemText
          primary={props.value}
          primaryTypographyProps={{ fontSize: "18px" }}
          secondaryTypographyProps={{ fontSize: "16px" }}
          secondary="Job"
        />
      </ListItem>
    );
  }
}
export function Street(props) {
    if (props.value !== "") {
      return (
        <ListItem sx={{ width: 1 }} className="">
          <ListItemAvatar>
            <GpsFixedIcon sx={{ height: 40, width: 40 }} />
          </ListItemAvatar>
          <ListItemText
            primary={props.value}
            primaryTypographyProps={{ fontSize: "18px" }}
            secondaryTypographyProps={{ fontSize: "16px" }}
            secondary="Street"
          />
        </ListItem>
      );
    }
  }
  export function City(props) {
    if (props.value !== "") {
      return (
        <ListItem sx={{ width: 1 }} className="">
          <ListItemAvatar>
            <LocationCity sx={{ height: 40, width: 40 }} />
          </ListItemAvatar>
          <ListItemText
            primary={props.value}
            primaryTypographyProps={{ fontSize: "18px" }}
            secondaryTypographyProps={{ fontSize: "16px" }}
            secondary="City"
          />
        </ListItem>
      );
    }
  }
  export function Zip(props) {
    if (props.value !== "") {
      return (
        <ListItem sx={{ width: 1 }} className="">
          <ListItemAvatar>
            <FiberPin sx={{ height: 40, width: 40 }} />
          </ListItemAvatar>
          <ListItemText
            primary={props.value}
            primaryTypographyProps={{ fontSize: "18px" }}
            secondaryTypographyProps={{ fontSize: "16px" }}
            secondary="Zip Code"
          />
        </ListItem>
      );
    }
  }
  export function State(props) {
    if (props.value !== "") {
      return (
        <ListItem sx={{ width: 1 }} className="">
          <ListItemAvatar>
            <PlaceIcon sx={{ height: 40, width: 40 }} />
          </ListItemAvatar>
          <ListItemText
            primary={props.value}
            primaryTypographyProps={{ fontSize: "18px" }}
            secondaryTypographyProps={{ fontSize: "16px" }}
            secondary="State"
          />
        </ListItem>
      );
    }
  }
  export function Country(props) {
    if (props.value !== "") {
      return (
        <ListItem sx={{ width: 1 }} className="">
          <ListItemAvatar>
            <MapIcon sx={{ height: 40, width: 40 }} />
          </ListItemAvatar>
          <ListItemText
            primary={props.value}
            primaryTypographyProps={{ fontSize: "18px" }}
            secondaryTypographyProps={{ fontSize: "16px" }}
            secondary="Country"
          />
        </ListItem>
      );
    }
  }
  export function Website(props) {
    if (props.value !== "") {
      return (
        <ListItem sx={{ width: 1 }} className="">
          <ListItemAvatar>
            <Language sx={{ height: 40, width: 40 }} />
          </ListItemAvatar>
          <ListItemText
            primary={props.value}
            primaryTypographyProps={{ fontSize: "18px" }}
            secondaryTypographyProps={{ fontSize: "16px" }}
            secondary="Website"
          />
        </ListItem>
      );
    }
  }