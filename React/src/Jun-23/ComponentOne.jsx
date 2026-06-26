import React, { Component } from "react";

class ComponentOne extends Component{
    render(){
        const {stud,react}=this.props;
        return(
            <div>
                <h1>Welcome {stud}</h1>
                <h1>Lang {react}</h1>
            </div>
        )
    }
}

export default ComponentOne;