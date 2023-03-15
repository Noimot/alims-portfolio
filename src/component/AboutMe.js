import React from "react";
import basketIcon from "../assets/images/basket-logo.svg";
import desgitalIcon from "../assets/images/desgital-logo.svg";
import finosellIcon from "../assets/images/finosell-logo.svg";
import jeetarIcon from "../assets/images/jeetar-logo.svg";
import woozeeIcon from "../assets/images/woozee-logo.svg";
import profile from "../assets/images/profile-pic.svg";

const AboutMe = () => {
  return (
    <div className="w-full bg-light-yellow px-135 dark:bg-[#181A1B]" id="about-me">
      <div className="flex items-center justify-between py-81 border-b border-solid border-light-yellow2 dark:border-[#222324]">
        <div className="flex items-center gap-x-[3px]">
          <span>
            <img src={basketIcon} alt="" />
          </span>
          <p className="font-mont-heavy text-purple-1 text-xl">basket</p>
        </div>
        <div className="flex items-center gap-x-[3px]">
          <span>
            <img src={desgitalIcon} alt="" />
          </span>
          <p className="font-mont-heavy text-dark-3 capitalize text-xl dark:text-[#F8FEFC]">
            desgital
          </p>
        </div>
        <div className="flex items-center gap-x-[3px]">
          <img src={finosellIcon} alt="" />
        </div>
        <div className="flex items-center gap-x-[3px]">
          <span>
            <img src={jeetarIcon} alt="" />
          </span>
          <p className="font-mulish font-semibold text-blue-1 text-2xl">
            jeetar
          </p>
        </div>
        <div className="flex items-center gap-x-[3px]">
          <img src={woozeeIcon} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-between gap-x-88 py-110">
        <aside className="flex-[0.5]">
          <img src={profile} alt="" />
        </aside>
        <aside className="flex-[0.5] flex flex-col gap-y-15">
          <h2 className="uppercase text-orange-1 tracking-[3px] text-base">about me</h2>
          <h3 className="-tracking-[1px] font-extrabold text-52 leading-64 dark:text-[#E3E2E0]">I am a Product Designer</h3>
          <div className="text-brown text-base leading-6 text-opacity-60 flex flex-col gap-y-5 dark:text-[#E3E2E0]">
            <p>
              from Lagos. I enjoy creating meaningful and delightful
              user-centred digital products that balance user needs and meet
              business goals. Currently freelancing.
            </p>

            <p>
              I’ve had the opportunity to solve problems in both startup and
              established enterprise environments on projects related to
              commerce, healthcare, social life, fintech solution, real estate &
              more. I have worked with a host of startups solving complex design
              problems around human needs.
            </p>

            <p>
              With a background in both agriculture and design, I love
              connecting the dots between trading, business goals and user
              satisfaction. In my free time, I enjoy poetry and looking for last
              minute adventures.
            </p>
          </div>
          <div className="flex items-center gap-x-6 pt-15">
            <button type="button" className="inline-block bg-orange-1 text-white font-semibold text-sm leading-4 rounded-md w-154 h-48 hover:bg-orange-3">
              <a href="#">View CV </a>
            </button>
            {/* <button type="button" className="inline-block border border-solid border-orange-1 rounded-md w-138 h-48 text-orange-1 text-base leading-4 font-medium capitalize">
              <a href="#how-i-work">How I Work</a>
            </button> */}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AboutMe;
