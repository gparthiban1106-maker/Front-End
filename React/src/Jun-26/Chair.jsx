import React from "react";

function Chair(){

    const data = {
    color:"Brown",
    backgroundColor:"blue"
  };
    return(
        <div>
            <h1 style={data}>CSS Color Inline</h1>
        </div>
    );
}

export default Chair;