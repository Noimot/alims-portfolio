import AboutMe from './component/AboutMe';
import HeroPage from './component/Hero';
import Home from './component/Header';
import HowIWork from './component/HowIWork';
import LatestWorks from './component/LatestWorks';
import Map from './component/Contact';
import OtherWorks from './component/OtherWorks';
import Testimonials from './component/Testimonials';
import Footer from './component/Footer';

function App() {
  return (
    <div className="font-epilogue">
      <Home />
      <HeroPage/>
      <AboutMe/>
      <HowIWork />
      <LatestWorks />
      <OtherWorks/>
      <Testimonials />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
