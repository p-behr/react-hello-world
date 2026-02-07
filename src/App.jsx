import Region from './Region.jsx'

function App({origin="./data"}) {
  return (
    <div className="app">
        <Region region="America"        url={`${origin}/America.json`} />
        <Region region="Canada"         url={`${origin}/Canada.json`} />
        <Region region="Australia"      url={`${origin}/Australia.json`} />
        <Region region="Europe"         url={`${origin}/Europe.json`} />
        <Region region="South America"  url={`${origin}/South_America.json`} />
    </div>
  )
}
export default App
