import React from "react";
import { preinitModule } from "react-dom";

function ComponentTwo(props) {

    const { employee } = props;
    const { url, model, desc, email, city } = employee;

    return (
        <div>
            <h2>Our Products</h2>
            <h3>Top Picks for you</h3>
            <img className="photo" src={url} alt="img" />
            <h3>{name}</h3>
            <p>{model}</p>
            <p>{desc}</p>
            <button>View Profile</button>
        </div>
    );
}

export default ComponentTwo;