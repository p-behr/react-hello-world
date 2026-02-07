const divStyle = {display: "inline-block", margin: "5px", textAlign: "center"}
const imgStyle = {width: "75px", borderStyle: "solid", borderWidth: "1px"}

const Subregion = ({region_name, subregion_name}) => {
    if (typeof(subregion_name) !== "string") return null;
    
    const imgFolder = `/images/${region_name.replace(/\s/g, '_')}/`;
    const imgName = `${subregion_name.replace(/\s/g, '_')}.png`;
    const imgUrl = imgFolder + imgName; 
    
    return (
        <div className="subregion" style={divStyle}>
            <p>{subregion_name}</p>
            <img
                style={imgStyle}
                src={imgUrl}
                alt={`Flag of ${subregion_name}`}
            />
        </div>
    )
}
export default Subregion;
