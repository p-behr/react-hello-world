import React from "react";
const divStyle = {display: "inline-block", margin: "5px", textAlign: "center"}
const State = ( {state} ) => {
    if (typeof(state) !== "string") return null;
    return (
        <div style={divStyle}>
            <p>{state}</p>
            <img style={{width:'75px', borderStyle:'solid', borderWidth:'1px' }}
                 src={`/images/America/${state.replace(/\s/g, '_')}.png`} 
                 alt={`State flag of ${state}`} 
            />
        </div>
    )
}
export default State;
