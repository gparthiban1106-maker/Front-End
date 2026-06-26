import React, { Component } from "react";

class ClassOne extends Component{
    constructor(){
        super();
        this.state={city:"Bangalore"}
    }   
    render(){
        console.log(this.props);
        const {name}=this.props
        return(
            <div>
                <h1>My name:{name}</h1>
                <h3>City is {this.state.city}</h3>
            </div>
        )
    }
}

export default ClassOne