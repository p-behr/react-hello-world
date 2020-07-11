import React, { useState, useEffect } from 'react';
import State from "./State";

function Region({ region, url }) {

  const [filter, setFilter] = useState("");
  const [showFlags, setShowFlags] = useState(true);
  const [states, setStates] = useState();

  useEffect(() => {
    if (!url) return;
    fetch(url)
      .then(response => response.json())
      .then(data => setStates(data.states))
      .catch(console.error);
  }, [url]);

  if (!states) return null;
  
  return (
    <div>
      <header>
        <h1>Hello, {region}!</h1>
      </header>
      <p>
        <input
          type="text"
          placeholder="filter..."
          value={filter}
          onChange={(e) => { setFilter(e.target.value); }}
        />

        <input
          type="checkbox"
          checked={showFlags}
          onChange={(e) => {
            setShowFlags(e.target.checked);
          }}
        />
        Show flags

      </p>
      {
        states.filter((state) =>
          filter === '' ||
          state.toUpperCase().includes(filter.toUpperCase())
        ).map((state, idx) => {
          return (
            <State
              key={state}
              state={state}
              showFlags={showFlags}
              region={region}
            />

          )
        })
      }

    </div>
  );
}

export default Region;
