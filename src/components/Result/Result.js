import React, { useEffect } from "react";
import {BrowserRouter, Routes, Route, useParams, json } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase/firebase";
import { getDatabase, push, ref, set,get,child } from "firebase/database";
import { useState } from "react";
import VCard_result from "./Vcard";

export default function Result(){
  let { qrid } = useParams();
  const app = initializeApp(firebaseConfig);
  const dbRef = ref(getDatabase(app));
  const [snap,setSnap]=useState([])
  useEffect(()=>{

    get(child(dbRef, `generated/${qrid}`)).then((snapshot) => {
      let result= JSON.stringify(snapshot.val())
      console.log(JSON.parse(result))
       setSnap(JSON.parse(result))
     
        
         
     
          
          if(snap.type=='vcard'){
      
          }
     
        }
      ).catch((error) => {
        console.error(error);
      });
  },[])
   

  
    return(<div className="text-white">{qrid}
   
    <VCard_result value={snap}/>
         </div>)


}