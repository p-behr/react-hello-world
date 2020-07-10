import React, { useState, useEffect } from 'react';
import State from "./State";

function America({ url = "./data/America.json" }) {

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
            />

          )
        })
      }

    </div>
  );
}

export default America;
