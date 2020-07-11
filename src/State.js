import React from "react";
import StateFlag from "./StateFlag";

const divStyle = { display: "inline-block", margin: "5px", textAlign: "center" }

const State = ({ state, showFlags = true, region }) => {
    if (typeof (state) !== "string") return null;
    return (
        <div style={divStyle}>
            <p>{state}</p>
            <StateFlag 
                state={state} 
                showFlag={showFlags}
                region={region}
            />
        </div>
    )
}
export default State;
