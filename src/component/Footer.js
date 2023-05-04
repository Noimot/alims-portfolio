import React from "react";
import headerIcon from "../assets/images/header-logo.svg";
import linkeninIcon from "../assets/images/linkenin-icon.svg";
import dribbleIcon from "../assets/images/dribbble-icon.svg";
import twitterIcon from "../assets/images/twitter-icon.svg";
import instagramIcon from "../assets/images/instagram-icon.svg";

const Footer = () => {
  return (
    <div className="w-full px-12 lg:px-16 2xl:px-135 pt-132 dark:bg-[#000000]">
      <div className="w-full flex  items-center flex-col justify-center text-center gap-y-[58px] l:justify-between l:items-start l:flex-row">
        <div className="hidden l:block">
          <img src={headerIcon} alt="" />
        </div>
        <div className="l:hidden">
          <p className="text-brown font-bold text-2xl leading-8 capitalize text-center">agent</p>
        </div>
        <div>
          <ul>
            <span className="text-brown tracking-3 uppercase text-base font-normal leading-8 dark:text-[#E3E2E0]">
              menu
            </span>
            <li className="pt-4 text-brown tracking-3 capitalize text-base font-normal leading-8 dark:text-[#E3E2E0]">
              <a href="#about-me">about me</a>
            </li>
            <li className="text-brown tracking-3 capitalize text-base font-normal leading-8 dark:text-[#E3E2E0]">
              <a href="#portfolio">portfolio</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <span className="text-brown tracking-3 uppercase text-base font-normal leading-8 dark:text-[#E3E2E0]">
              services
            </span>
            <li className="pt-4 text-brown tracking-3 capitalize text-base font-normal leading-8 dark:text-[#E3E2E0]">
              <a href="#testimonials">testimonials</a>
            </li>
            <li className="text-brown tracking-3 capitalize text-base font-normal leading-8 dark:text-[#E3E2E0]">
             <a href="#contact">contact</a> 
            </li>
          </ul>
        </div>
        <div className="flex gap-x-2">
          <div className="w-12 h-12 bg-orange-1 rounded-full flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/abdulalim-ajenifuja-8652a8179/"
              target="_blank"
            >
              <img src={linkeninIcon} alt="" />
            </a>
          </div>
          <div className="w-12 h-12 bg-orange-1 rounded-full flex items-center justify-center">
            <img src={dribbleIcon} alt="" />
          </div>
          <div className="w-12 h-12 bg-orange-1 rounded-full flex items-center justify-center">
            <img src={twitterIcon} alt="" />
          </div>
          <div className="w-12 h-12 bg-orange-1 rounded-full flex items-center justify-center">
            <img src={instagramIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="pt-[50px]">
        <div className="w-full border-b border-solid border-light-yellow2" />
      </div>
      <p className="pt-[17px] pb-[14px] dark:text-[#DBD9D5] text-center">
        Copyright © 2022 Abdulalim. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
