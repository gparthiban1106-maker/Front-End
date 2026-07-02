import { Component } from "react";

class LikeButton extends Component{

    constructor(){
        super();
        this.state={likes:0,};
    }

    increaseLike=()=>{
        this.setState({likes:this.state.likes+1,});
    };

    decreaseLike=()=>{
        this.setState({likes:this.state.likes-1,});
    };

    render(){
        return(
            <div className="card">
                <h3 style={{color:"red",backgroundColor:"yellow",borderRadius:"10px"}}>👍Like Counter</h3>
                <h1>{this.state.likes}</h1>
                <button onClick={this.increaseLike}>Like👍</button>
                <button onClick={this.decreaseLike}>UnLike👎</button>

            </div>
        );
    }
}

export default LikeButton;