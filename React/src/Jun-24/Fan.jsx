import React, { Component } from "react";

class Fan extends Component{
    constructor(){
        super();
        this.state={name:"David"};
    }
    handleClick=()=>{
        this.setState({name:"Johnson"})
    }
    render(){
        return(
            <div>
                <h1>Hello:{this.state.name}</h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

export default Fan;