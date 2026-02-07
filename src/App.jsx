import { BrowserRouter, Routes, Route } from "react-router";
import Region from './Region.jsx'
import './app.css';

function App({origin="./data"}) {
  return (
    
    <div className="app">
        
        <nav>
            <a href='/'>America</a>
            <a href='/canada'>Canada</a>
            <a href='/australia'>Australia</a>
            <a href='/europe'>Europe</a>
            <a href='/south_america'>S. America</a>
        </nav>
        
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Region region="America" url={`${origin}/America.json`} />}
                />
                <Route
                    path="/canada"
                    element={<Region region="Canada" url={`${origin}/Canada.json`} />}
                />
                <Route
                    path="/australia"
                      element={<Region region="Australia" url={`${origin}/Australia.json`} />}
                />
                <Route
                    path="/europe"
                    element={<Region region="Europe" url={`${origin}/Europe.json`} />}
                />
                <Route
                    path="/south_america"
                    element={<Region region="South America" url={`${origin}/South_America.json`} />}
                />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App
