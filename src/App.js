import React from 'react';
import Region from "./Region";

function App() {
  return (
    <>
    
      <Region 
        region="America" 
        url="https://techcon20.s3-us-west-2.amazonaws.com/America.json"
      />
      <Region 
        region="Canada" 
        url="https://techcon20.s3-us-west-2.amazonaws.com/Canada.json"
      />
      <Region 
        region="Australia" 
        url="https://techcon20.s3-us-west-2.amazonaws.com/Australia.json"
      />    
      <Region 
        region="Europe" 
        url="https://techcon20.s3-us-west-2.amazonaws.com/Europe.json"
      />    
      <Region 
        region="South America" 
        url="https://techcon20.s3-us-west-2.amazonaws.com/South_America.json"
      />    
      
    </>
  );
}

export default App;
