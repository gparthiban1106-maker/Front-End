import React from "react";

function Click(props) {


  return (
    <div>
      <button onClick={props.sayHello}>Click</button>
    </div>
  );
}

export default Click;