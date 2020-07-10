import React from "react";

const imgStyle = {
    width: '75px', borderStyle: 'solid', borderWidth: '1px'
}

const StateFlag = ({ state, showFlag = true }) => {
    if (!showFlag) return null;
    return (
        <img style={imgStyle}
            src={`/images/America/${state.replace(/\s/g, '_')}.png`}
            alt={`State flag of ${state}`}
        />
    )
}

export default StateFlag;
