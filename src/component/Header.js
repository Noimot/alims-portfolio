import React from "react";
import headerIcon from "../assets/images/header-logo.svg";
import moonIcon from "../assets/images/moon-icon.svg";

const Header = () => {
  return (
    <div className="w-full font-epilogue shadow-3xl">
      <header className="w-full h-88 px-135 flex items-center justify-between">
        <div>
          <img src={headerIcon} alt="" />
        </div>
        <div>
          <ul className="flex items-center justify-between gap-88 capitalize">
            <li>
              <a href="#about-me">about me</a>{" "}
            </li>
            <li>
              <a href="#portfolio">my portfolio</a>{" "}
            </li>
            <li>my cv</li>
          </ul>
        </div>
        <div className="flex items-center gap-18">
          <span className="w-45 h-45 rounded-full border border-solid border-dark-1 flex items-center justify-center">
            <img src={moonIcon} alt="" />
          </span>
          <span>
            <button className="rounded-md border border-solid border-orange-1 text-orange-1 px-5 py-1.5 capitalize hover:bg-light-orange transition ease-in-out delay-150 hover:-translate-1">
              <a href="#contact">contact me</a>
            </button>
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;
