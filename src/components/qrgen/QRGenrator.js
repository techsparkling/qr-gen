import React, { useState } from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

export default function QRGenerator(props){

    console.log(props.value)
    return(
        <div>
            
    <div style={{ margin: "0 auto", width: "100%" }}
    className="max-w-[214px] max-h-[414px] md:max-w-[364px]  "
    >

    <QRCode
    size={256}
    className="rounded-md "
    bgColor="none"
    fgColor="white"
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={'https://qr-gen-beta.vercel.app/'+props.value}
    viewBox={`0 0 256 256`}
    />
</div>
</div>)
}
