import React, { useLayoutEffect, useState } from "react";
import './Box.css'

function Box({id, height, width, backgroundColor, deleteBox}) {
    const myStyle = {
        height: height + "px",
        width: width + "px",
        backgroundColor: backgroundColor,
    }

    //FIXME: can this function just exist here? 
    // function deleteBox() {

    // }

    return (
        <div id={id}>
            <div style={myStyle} className="Box"></div>
            <button onClick={() => deleteBox(id)}>X</button>
        </div>
    )
}

export default Box
