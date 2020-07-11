import React from "react";

const imgStyle = {
    width: '75px', 
    borderStyle: 'solid', 
    borderWidth: '1px'
}

const StateFlag = ({ state, showFlag = true , region }) => {

    if (!showFlag) return null;
    
    const folder = `/images/${region.replace(/\s/g, '_')}/`;
    const imageName = `${state.replace(/\s/g, '_')}.png`;
    const imageUrl = folder + imageName;
    
    return (
        <img style={imgStyle}
            src={imageUrl}
            alt={`Flag of ${state}`}
        />
    )
}

export default StateFlag;
