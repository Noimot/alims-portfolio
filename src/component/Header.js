import React, {useState} from "react";
import headerIcon from "../assets/images/header-logo.svg";
import moonIcon from "../assets/images/moon-icon.svg";
import sunIcon from "../assets/images/sunlight-icon.svg";
import MobileMenu from "./MobileMenu";

const Header = ({ handleThemeSwitch, theme }) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(state => !state)
  }
  return (
    <div className="w-full font-epilogue shadow-3xl dark:bg-[#181A1B]">
      <header className="w-full h-88 px-12 lg:px-16 2xl:px-135 flex items-center justify-between">
        <div>
          <img src={headerIcon} alt="" />
        </div>
        <div>
          <ul className="hidden md:flex items-center justify-between gap-8 l:gap-88 capitalize dark:text-[#DBD9D5]">
            <li>
              <a href="#about-me">about me</a>{" "}
            </li>
            <li>
              <a href="#portfolio">my portfolio</a>{" "}
            </li>
            <li>
              <a href="https://bit.ly/3AGjRfe" target="_blank">my cv</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-1 md:hidden cursor-pointer" onClick={handleMenu}>
          <span className={`inline-block  bg-[#14142B] border-solid border-2 w-6 border-[#14142B] origin-left ease-in transition-all duration-[2s] ${menu && "rotate-45"}`} />
          <span className={`inline-block  bg-[#14142B] border-solid border-2 w-6 border-[#14142B] origin-left ease-in transition-all duration-[2s] ${menu && "opacity-0"}`} />
          <span className={`inline-block  bg-[#14142B] border-solid border-2 w-6 border-[#14142B] origin-left ease-in transition-all duration-[2s] ${menu && "-rotate-45"}`} />
        </div>
        <div className="hidden md:flex items-center gap-18">
          <span
            className="w-45 h-45 rounded-full border border-solid border-dark-1 dark:border-[#E3E2E0] flex items-center justify-center"
            onClick={handleThemeSwitch}
          >
            <img src={theme === "light" ? moonIcon : sunIcon} alt="" />
          </span>
          <span>
            <button className="rounded-md border border-solid border-orange-1 text-orange-1 px-5 py-1.5 capitalize hover:bg-light-orange transition ease-in-out delay-150 hover:-translate-1">
              <a href="#contact">contact me</a>
            </button>
          </span>
        </div>
      </header>
      {menu && <MobileMenu menu={menu} handleMenu={handleMenu} />}
    </div>
  );
};

export default Header;
