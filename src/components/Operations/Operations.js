import React from "react";
import { initializeApp } from "firebase/app";

import firebaseConfig from "../firebase/firebase";
import { getDatabase, push, ref, set } from "firebase/database";
import { getStorage, ref as ref_storage, uploadBytes,getDownloadURL  } from "firebase/storage";
import { useState } from "react";
import { setGlobalState } from "../../snap";
import {v4} from"uuid"
const app = initializeApp(firebaseConfig);
const storage = getStorage();
export default function Operations(props){
   
 console.log(props.profilePic)
    const handleChange=(res)=>{
        setGlobalState("key",res.key)
    }

   
    if(props.value=='email'){
    
  
        let email_input=document.getElementById('email_input').value
        let name_input=document.getElementById('name_input').value
        let message_input=document.getElementById('message_input').value
        const db = getDatabase(app);
        push(ref(db, 'generated/' ), {
        type:'email',
        email_input,
        name_input,
        message_input,
        }).then((res)=>{
        handleChange(res)

        });
    

}
else if(props.value=='url'){
    let url_input=document.getElementById('url_input').value
    const db = getDatabase(app);
    push(ref(db, 'generated/' ), {
    type:'url',
    url_input,
  
    }).then((res)=>{
    handleChange(res)

    });

}
else if(props.value=='vcard'){
   
    if(props.profilePic){
        let path =`images/${props.profilePic.name+v4()}`
        const storageRef = ref_storage(storage,   path );
        uploadBytes(storageRef,props.profilePic).then(()=>{
            
            getDownloadURL(ref_storage(storage,path)).then((url)=>{
              
            

               let firstname_input=document.getElementById('firstname_input').value
               let lastname_input=document.getElementById('lastname_input').value
               let mobile_input=document.getElementById('mobile_input').value
               let phone_input=document.getElementById('phone_input').value
               let email_input=document.getElementById('email_input').value
               let company_input=document.getElementById('company_input').value
               let job_input=document.getElementById('job_input').value
               let street_input=document.getElementById('street_input').value
               let city_input=document.getElementById('city_input').value
               let zip_input=document.getElementById('zip_input').value
               let state_input=document.getElementById('state_input').value
               let country_input=document.getElementById('country_input').value
               let website_input=document.getElementById('website_input').value
               const db = getDatabase(app);
               push(ref(db, 'generated/' ), {
               type:'vcard',
               firstname:firstname_input,
               lastname:lastname_input,
               mobile:mobile_input,
               phone:phone_input,
               email:email_input,
               company:company_input,
               job:job_input,
               street:street_input,
               city:city_input,
               zip:zip_input,
               state:state_input,
               country:country_input,
               website:website_input,
               profileUrl:url
             
               }).then((res)=>{
               handleChange(res)
           
               });
            })
           
        })
    }
    else{
        let firstname_input=document.getElementById('firstname_input').value
               let lastname_input=document.getElementById('lastname_input').value
               let mobile_input=document.getElementById('mobile_input').value
               let phone_input=document.getElementById('phone_input').value
               let email_input=document.getElementById('email_input').value
               let company_input=document.getElementById('company_input').value
               let job_input=document.getElementById('job_input').value
               let street_input=document.getElementById('street_input').value
               let city_input=document.getElementById('city_input').value
               let zip_input=document.getElementById('zip_input').value
               let state_input=document.getElementById('state_input').value
               let country_input=document.getElementById('country_input').value
               let website_input=document.getElementById('website_input').value
               const db = getDatabase(app);
               push(ref(db, 'generated/' ), {
               type:'vcard',
               firstname:firstname_input,
               lastname:lastname_input,
               mobile:mobile_input,
               phone:phone_input,
               email:email_input,
               company:company_input,
               job:job_input,
               street:street_input,
               city:city_input,
               zip:zip_input,
               state:state_input,
               country:country_input,
               website:website_input,
               profileUrl:''
             
               }).then((res)=>{
               handleChange(res)
           
               });
            
    }
 

}
else if(props.value=='text'){
    let text_input=document.getElementById('text_input').value
    const db = getDatabase(app);
    push(ref(db, 'generated/' ), {
    type:'text',
    text_input,
  
    }).then((res)=>{
    handleChange(res)

    });

}
}
  


