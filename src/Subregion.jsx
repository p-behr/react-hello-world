const divStyle = {display: "inline-block", margin: "5px", textAlign: "center"}
const imgStyle = {width: "75px", borderStyle: "solid", borderWidth: "1px"}

const Subregion = ({subregion_name}) => {
    if (typeof(subregion_name) !== "string") return null;
    return (
        <div className="subregion" style={divStyle}>
            <p>{subregion_name}</p>
            <img
                style={imgStyle}
                src={`/images/America/${subregion_name.replace(/\s/g, '_')}.png`}
                alt={`Flag of ${subregion_name}`}
            />
        </div>
    )
}
export default Subregion;
