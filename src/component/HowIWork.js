import React from "react";
import AnimationEffect from "./AnimationEffect";

const HowIWork = () => {
  return (
    <div className="w-full bg-grey-1 px-135 pt-120 pb-94" id="how-i-work">
      <div className="w-full h-auto border border-solid border-light-yellow2 rounded-md grid grid-cols-3 divide-x divide-solid divide-light-yellow2">
        <div className="hover:bg-light-yellow2 pt-45 pb-38 pl-12 flex flex-col gap-y-13">
          <h1 className="text-brown font-extrabold text-4xl">4+</h1>
          <p className="text-brown text-opacity-80 text-sm font-normal">
            Years of experience
          </p>
        </div>
        <div className="hover:bg-light-yellow2 pt-45 pb-38 pl-12 flex flex-col gap-y-13">
          <h1 className="text-brown font-extrabold text-4xl">99+%</h1>
          <p className="text-brown text-opacity-80 text-sm font-normal">
            Efficiency
          </p>
        </div>
        <div className="hover:bg-light-yellow2 pt-45 pb-38 pl-12 flex flex-col gap-y-13">
          <h1 className="text-brown font-extrabold text-4xl">30+</h1>
          <p className="text-brown text-opacity-80 text-sm font-normal">
            Full Service Projects Done
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowIWork;
