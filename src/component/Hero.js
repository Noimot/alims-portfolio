import React from "react";
import stringIcon from "../assets/images/string-icon.svg";
import combinedStrings from "../assets/images/combined-strings-icon.svg";
import starIcon from "../assets/images/star-icon.svg";
import loaderIcon from "../assets/images/loader-icon.svg";
import pencilIcon from "../assets/images/pencil.svg";
import toolsIcon from "../assets/images/tools-pic.svg";
import designingTool from "../assets/images/designing-tools.gif";
import { Loader } from "../assets/icon/Loader";

const HeroPage = ({theme}) => {
  return (
    <div className="w-full px-135 flex justify-between items-center h-auto py-110 gap-x-5 dark:bg-[#181A1B]">
      <div className="flex-[0.5]">
        <div className="flex flex-col gap-y-3">
          <h1 className="capitalize font-extrabold text-56 leading-8">
            <span className={`${theme === "light" ? "text-dark-2" : "text-[#E3E2E0]"} -tracking-2`}>hi!</span>{" "}
            <span className="text-orange-1">i'm abdulalim,</span>
          </h1>
          <p className={`${theme === "light" ? "text-dark-2" : "text-[#E3E2E0]"} -tracking-1.6 leading-68 text-6xl font-extrabold pt-3`}>
            I’m Here to Help You Build Your Dream Product
          </p>
          <p className={`${theme === "light" ? "text-brown" : "text-[#DBD9D5]"} leading-8 text-base`}>
            With conceptual directions, flexibility and understanding of basic
            need and design steps, I create outstanding solutions.
          </p>
        </div>
        <div className="pt-12">
          <button
            type="button"
            className="bg-orange-1 text-white uppercase font-bold text-sm rounded-md w-154 h-12 hover:bg-orange-3"
          >
            <a href="#contact">contact me</a>
          </button>
        </div>
      </div>
      <div className="flex-[0.5] flex items-center justify-center">
        <div className="w-[450px] h-[450px] 3xl:w-568 3xl:h-572 rounded-full bg-light-yellow3 relative dark:bg-[#585A60]">
          <span className="absolute right-36 top-12 3xl:top-20">
            <img src={starIcon} alt="" />
          </span>
          <span className="absolute left-28 3xl:left-32 top-20 3xl:top-48">
            <img src={stringIcon} alt="" />
          </span>
          <span className="absolute right-12 top-52">
            <img src={combinedStrings} alt="" />
          </span>
          <span className="absolute right-16 3xl:right-36 bottom-5 3xl:bottom-8 inline-block w-[307px] h-[308px]">
            <img src={designingTool} alt="" className="-rotate-90" />
          </span>
          <span className="absolute -left-16 bottom-2 -z-10">
            {/* <img src={loaderIcon} alt="" /> */}
            <Loader theme={theme}/>
          </span>
          <span className="absolute -left-9 -bottom-5">
            {/* <img src={loaderIcon} alt="" /> */}
            <Loader theme={theme}/>
          </span>
        </div>
        {/* <img src={toolsIcon} alt="" /> */}
      </div>
    </div>
  );
};

export default HeroPage;
