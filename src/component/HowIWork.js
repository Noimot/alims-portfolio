import React from "react";
import AnimationEffect from "./AnimationEffect";

const HowIWork = () => {
  return (
    <div className="w-full bg-grey-1 px-12 lg:px-16 2xl:px-135 pt-120 pb-94 dark:bg-[#202122]" id="how-i-work">
      <div className="w-full h-auto border border-solid border-light-yellow2 rounded-md grid l:grid-cols-3 divide-y l:divide-x divide-solid divide-light-yellow2">
        <div className="hover:bg-light-yellow2 pt-45 pb-38 pl-12 flex flex-col gap-y-13 dark:hover:bg-[#352E2E]">
          <h1 className="text-brown font-extrabold text-4xl dark:text-[#EF6D58] dark:hover:text-[#ffffff]">4+</h1>
          <p className="text-brown text-opacity-80 text-sm font-normal dark:text-[#DBD9D5] dark:hover:text-[#E3E2E0]">
            Years of experience
          </p>
        </div>
        <div className="hover:bg-light-yellow2 pt-45 pb-38 pl-12 flex flex-col gap-y-13 dark:hover:bg-[#352E2E]">
          <h1 className="text-brown font-extrabold text-4xl dark:text-[#EF6D58] dark:hover:text-[#ffffff]">99+%</h1>
          <p className="text-brown text-opacity-80 text-sm font-normal dark:text-[#DBD9D5] dark:hover:text-[#E3E2E0]">
            Efficiency
          </p>
        </div>
        <div className="hover:bg-light-yellow2 pt-45 pb-38 pl-12 flex flex-col gap-y-13 dark:hover:bg-[#352E2E]">
          <h1 className="text-brown font-extrabold text-4xl dark:text-[#EF6D58] dark:hover:text-[#ffffff]">30+</h1>
          <p className="text-brown text-opacity-80 text-sm font-normal dark:text-[#DBD9D5] dark:hover:text-[#E3E2E0]">
            Full Service Projects Done
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowIWork;
