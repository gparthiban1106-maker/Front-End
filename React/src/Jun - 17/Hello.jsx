import React from "react";

function Hello(props) 
{   
    console.log("recieved data",props);
    const {imageUrl}=props;
    
    return(
        <div>
            <h1 className="hello-text">
                Hello React
            </h1>
            <img src={imageUrl} alt="img" />
        </div>
    );    
}

export default Hello;