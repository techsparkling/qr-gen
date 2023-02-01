import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState,useGlobalState}=createGlobalState({
    key:'',
    profileUrl:''
})

export{useGlobalState,setGlobalState};