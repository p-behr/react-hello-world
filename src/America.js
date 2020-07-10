import React, { useState } from 'react';
import State from "./State";

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
  "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah",
  "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
]

function America() {

  const [filter, setFilter] = useState("");

  return (
    <div>
      <p>
        <input
          type="text"
          placeholder="filter..."
          value={filter}
          onChange={(e) => { setFilter(e.target.value); }}
        />
      </p>
      {
        states.filter((state) =>
          filter === '' ||
          state.toUpperCase().includes(filter.toUpperCase())
        ).map((state, idx) => {
          return (
            <State state={state} key={state} />
          )
        })
      }

    </div>
  );
}

export default America;
