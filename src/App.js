import React from 'react';
import Region from "./Region";
import { Router, Link } from "@reach/router";
import './App.css';

const Home = () => (
  <div>
    <h1>Hello World!</h1>
  </div>
);
function App() {
  return (
    <>
    <nav>
      <Link to="Home"> Home </Link> 
      <Link to="America"> America </Link> 
      <Link to="Canada"> Canada </Link>
      <Link to="Australia"> Australia </Link>
      <Link to="Europe"> Europe </Link>
      <Link to="South-America"> South America </Link>
    </nav>
    <Router>
      <Home 
        path="Home" 
      />
      <Region  
        path="America" 
        region="America" 
        url="https://techcon20.s3-us-west-2.amazonaws.com/America.json"
      />
      <Region  
        path="Canada" 
        region="Canada"
        url="https://techcon20.s3-us-west-2.amazonaws.com/Canada.json"
      />
      <Region  
        path="Australia" 
        region="Australia"
        url="https://techcon20.s3-us-west-2.amazonaws.com/Australia.json"
      />    
      <Region  
        path="Europe" 
        region="Europe"
        url="https://techcon20.s3-us-west-2.amazonaws.com/Europe.json"
      />    
      <Region  
        path="South-America" 
        region="South America"
        url="https://techcon20.s3-us-west-2.amazonaws.com/South_America.json"
      />    

    </Router>
       
    </>
  );
}

export default App;
