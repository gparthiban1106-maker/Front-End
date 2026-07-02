//HOOKS
//useState syntax
/*
const[name,setCity]
const[city,setCity]
*/
import React, { useState } from "react"

function Wall(){
    const[name,setName]=useState("Parthiban");    
    return(
        <div>
            <h1>Name {name}</h1>
            <button onClick={()=>setName("Bharathi")}>Click</button>
        </div>
    );
}
export default Wall;