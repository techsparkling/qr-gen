import { getDownloadURL } from "firebase/storage";
import React from "react";

import VCard from "vcard-creator";
import { saveAs } from "file-saver";
let myVCard = new VCard();
export default function Download(props) {
  myVCard.addName(props.lastname, props.firstname);
  myVCard.addPhoneNumber(props.mobile, "PREF;Mobile");
  myVCard.addPhoneNumber(props.phone, "TELEPHONE");
  myVCard.addEmail(props.email);
  myVCard.addCompany(props.company);
  myVCard.addJobtitle(props.job);
  myVCard.addAddress(
    props.street,
    props.city,
    props.state,
    props.zip,
    props.country
  );
  myVCard.addURL(props.website);
  console.log(myVCard.toString());
  var blob = new Blob([myVCard], { type: "text/plain;charset=utf-8" });
  saveAs(blob, `${props.firstname} ${props.lastname}.vcf`);
}
