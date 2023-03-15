import { useState, useEffect } from "react";
import AboutMe from "./component/AboutMe";
import HeroPage from "./component/Hero";
import Header from "./component/Header";
import HowIWork from "./component/HowIWork";
import LatestWorks from "./component/LatestWorks";
import Map from "./component/Contact";
import OtherWorks from "./component/OtherWorks";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";

function App() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="font-epilogue">
      <Header handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <HeroPage theme={theme}/>
      <AboutMe />
      <HowIWork />
      <LatestWorks />
      <OtherWorks />
      <Testimonials />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
