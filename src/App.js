import AboutMe from './component/AboutMe';
import HeroPage from './component/Hero';
import Home from './component/Home';
import HowIWork from './component/HowIWork';
import LatestWorks from './component/LatestWorks';
import OtherWorks from './component/OtherWorks';

function App() {
  return (
    <div className="font-epilogue">
      <Home />
      <HeroPage/>
      <AboutMe/>
      <HowIWork />
      <LatestWorks />
      <OtherWorks/>
    </div>
  );
}

export default App;
