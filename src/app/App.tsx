import { useEffect, useState } from 'react';
import BuySections from '../sections/BuySections/BuySections';
import InvestSection from '../sections/InvestSection/InvestSection';
import NewsSection from '../sections/NewsSection/NewsSection';
import RoadmapSection from '../sections/RoadmapSection/RoadmapSection';
import TokenomicsSection from '../sections/TokenomicsSection/TokenomicsSection';
import TopSection from '../sections/TopSection/TopSection';
import './App.scss';

function App() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setTimeout(() => setLoaded(true), 200)
  }, [])
  return (
    <div className="App">
      <TopSection />
      {loaded && 
      <>
        <NewsSection />
        <InvestSection />
        <TokenomicsSection />
        <RoadmapSection />
        <BuySections />
      </>}
      
    </div>
  );
}

export default App;
