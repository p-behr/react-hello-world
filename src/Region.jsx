import Subregion from './Subregion'
import {useState} from 'react'

const subregions = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
    "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
    "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah",
    "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
]

function Region() {
    
    const [filterText, setFilterText] = useState("");
    
    return(
        <div className="region">
            <h1>Region</h1>
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
                        subregion_name={subregion} 
                        key={subregion}
                    />
                ))
            }
        </div>
    )    
}
export default Region;
