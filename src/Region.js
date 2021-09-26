import {useState, useEffect} from "react";
import Subregion from "./Subregion";

function Region({region="America", url="./data/America.json"}) {

    const [filterText, setFilterText] = useState("");
    const [subregions, setSubregions] = useState([]);

    useEffect(() => {
        if (!url) return;
        fetch(url)
         .then(response => response.json())
         .then(data => setSubregions(data.subregions))
         .catch(console.error);
    }, [url]);
    if (subregions.length === 0) return null;

    return (
        <div>
            <header><h1>Hello, {region}!</h1></header>
            <p> 
                <input 
                    type="text"
                    placeholder="filter..."
                    value={filterText}
                    onChange={(e)=>{setFilterText(e.target.value);}}
                />
            </p>
            {
                subregions.filter((subregion) =>
                    filterText === '' ||
                    subregion.toUpperCase().includes(filterText.toUpperCase())
                ).map((subregion, idx) => (
                    <Subregion 
                        region_name={region}
                        subregion_name={subregion} 
                        key={subregion}
                    />
                ))
            }
        </div>
    )
}

export default Region;
