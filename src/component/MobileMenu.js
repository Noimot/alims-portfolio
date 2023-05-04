import React from "react";
import headerIcon from "../assets/images/header-logo.svg";

const MobileMenu = ({ menu, handleMenu }) => {
  return (
    <div className="bg-[#ffffff] fixed top-0 w-full pt-[27px] px-12 lg:px-16 2xl:px-135 h-[547px] md:hidden transition-all ease-out duration-[3s]">
      <div className="flex items-center justify-between">
        <div>
          <img src={headerIcon} alt="" />
        </div>
        <div
          className="flex flex-col gap-y-1 md:hidden cursor-pointer"
          onClick={handleMenu}
        >
          <span
            className={`inline-block  bg-[#14142B] border-solid border-2 w-6 border-[#14142B] origin-left ease-in transition-all duration-[2s] ${
              menu && "rotate-45"
            }`}
          />
          <span
            className={`inline-block  bg-[#14142B] border-solid border-2 w-6 border-[#14142B] origin-left ease-in transition-all duration-[2s] ${
              menu && "opacity-0"
            }`}
          />
          <span
            className={`inline-block  bg-[#14142B] border-solid border-2 w-6 border-[#14142B] origin-left ease-in transition-all duration-[2s] ${
              menu && "-rotate-45"
            }`}
          />
        </div>
      </div>
      <ul className="flex flex-col gap-y-[58px] pt-[37px]" onClick={handleMenu}>
        <li className="capitalize text-[#391400] text-base leading-4 ">
          <a href="#about-me">about me</a>
        </li>
        <li className="capitalize text-[#391400] text-base leading-4">
          <a href="#portfolio">my portfolio</a>
        </li>
        <li className="capitalize text-[#391400] text-base leading-4">
          <a href="https://bit.ly/3AGjRfe" target="_blank">
            my CV
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
