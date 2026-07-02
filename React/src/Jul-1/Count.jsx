import React, { useState } from "react";

function Count (){
    const[Count,setCount]=useState(0);

    return(
        <div className="main-count">
            <center>
                <h1>Count Value <br/>{Count}</h1>
                <button className="btn-1" onClick={()=>setCount(Count+1)}>In</button>
                <button className="btn-2" onClick={()=>setCount(Count-1)}>Dec</button>
            </center>
        </div>

    )
}

export default Count;