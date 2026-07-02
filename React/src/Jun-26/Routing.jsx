import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chair from "./chair";
import LikeButton from "../Jun-25/LikeButton";

function Routing(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Chair/>}></Route>
                    <Route path="/like" element={<LikeButton/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;