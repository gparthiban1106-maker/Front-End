    import React from "react";
    import videoBg from "../assets/video.mp4";
    function App1() {
    return (
        <div className="hero">
            <video autoPlay muted loop className="background-video">
                <source src={videoBg} type="video/mp4" />
            </video>       
            <div className="content">
                <h1>Hi, I'm Parthiban</h1>
                <p>Frontend Developer | React Developer</p>
                <button className="btn">View Page</button>
            </div>
        </div>
    );
    }

    export default App1;