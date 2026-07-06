import React, { useState } from "react";

function Change(){
    const[name,setName]=useState("");

    /*const handleChange=()=>{
        //console.log(event.target.value); 
        setName(event.target.value);
    };*/ //shortform of this ==> onChange={(event)=>setName(event.target.value)}

    return(
        <>
            <h1>Name is : {name}</h1>
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} />
        </>
    );
}

export default Change;