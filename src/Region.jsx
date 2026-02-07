import Subregion from './Subregion'
import {useState, useEffect} from 'react'

function Region({region="America", url="./data/America.json"}) {
    
    const [filterText, setFilterText] = useState("");
    const [subregions, setSubregions] = useState([]);
    
    useEffect(()=>{
        if (!url) {
            setSubregions([]);
        } else {
            fetch(url)
            .then(response => response.json())
            .then(data => setSubregions(data.subregions))
            .catch(console.error);
        }
    }, [url]);
    
    return(
        <div className="region">
            <h1>Hello, {region}!</h1>
            <p>
                <input 
                    type="text"
                    placeholder="filter..."
                    value={filterText}
                    onChange={(e)=>{
                        setFilterText(e.target.value);
                    }}
                />
            </p>
            {
                subregions.filter((subregion) => 
                    filterText === "" ||
                    subregion.toUpperCase().includes(filterText.toUpperCase())
                ).map((subregion) => (
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
