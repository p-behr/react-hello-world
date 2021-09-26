import {useState, useEffect} from "react";
import Subregion from "./Subregion";

function Region({region="America", url="./data/America.json"}) {

    const [filter, setFilter] = useState("");
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
                    value={filter}
                    onChange={(e)=>{setFilter(e.target.value);}}
                />
            </p>
            {
                subregions.filter((subregion) =>
                    filter === '' ||
                    subregion.toUpperCase().includes(filter.toUpperCase())
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
