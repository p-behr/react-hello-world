import Region from "./Region";
import {Router, Link} from "@reach/router";
import './App.css';

const Home = () => (
  <div>
    <h1>Hello, World!</h1>
  </div>
)

function App() {
  const origin = "https://powerup2021.s3.us-west-2.amazonaws.com"
  return (
    <>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="America"> America </Link>
        <Link to="Canada"> Canada </Link>
        <Link to="Australia"> Australia </Link>
        <Link to="Europe"> Europe </Link>
        <Link to="South-America"> South America </Link>
      </nav>

      <Router>
        <Home path="/" />
        <Region path="America"  region="America" url={`${origin}/America.json`} />
        <Region path="Canada"   region="Canada"  url={`${origin}/Canada.json`}  />
        <Region path="Australia"  region="Australia" url={`${origin}/Australia.json`} />
        <Region path="Europe"  region="Europe"  url={`${origin}/Europe.json`} />
        <Region path="South-America"  region="South America" url={`${origin}/South_America.json`} />
      </Router>
    </>
  );
}

export default App;
