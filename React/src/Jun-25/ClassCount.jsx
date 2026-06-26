import React, { Component } from "react";

class ClassCount extends Component {
  constructor() {
    super();
    this.state = {count: 0};
    //this.handleClick=this.handleClick.bind(this);
  }

  handleClick=() => {
    console.log("this value",this);
    
    this.setState({count: this.state.count + 1,});
  };

  render() {
    return (
      <div>
        <h1>Hello: {this.state.count}</h1>
        <button className="Button" onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default ClassCount;




/*
how to handle this keyword in class component?

There are Three Way.
One:-
    <button className="Button" onClick={this.handleClick.bind(this)}>Click</button>
Two:-
    constructor() {
        this.handleClick=this.handleClick.bind(this);
  }
Three:-
    Using arrow function
    handleClick=() => {
    console.log("this value",this);
    this.setState({count: this.state.count + 1,});
  };

  Arrow function handle this keywords.
*/