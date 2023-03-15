import React, { useRef, useState, useEffect } from "react";
import starImage from "../assets/images/star.svg";
import blockImage from "../assets/images/block-image.svg";
import path from "../assets/images/path.svg";
import blurryImage from "../assets/images/blurry-image.svg";
import quotesImage from "../assets/images/quotes-image.svg";

const OtherWorks = () => {
  const intrepidRef = useRef();
  const sebigiftRef = useRef();
  const odiopayRef = useRef();
  const secureshopRef = useRef();
  const smsporteRef = useRef();
  const handleMouseHover = (ref) => {
    ref.current.style.zIndex = 999;
  };
  const handleMouseLeave = (ref) => {
    ref.current.style.zIndex = -1;
  };

  useEffect(() => {
    intrepidRef.current.style.zIndex = -1;
    sebigiftRef.current.style.zIndex = -1;
    odiopayRef.current.style.zIndex = -1;
    secureshopRef.current.style.zIndex = -1;
    smsporteRef.current.style.zIndex = -1;
  });
  return (
    <section className="w-full px-135 pt-120 dark:bg-[#1A1D1A]">
      <div className="text-center">
        <h1 className="tracking-3 uppercase text-orange-1 text-base leading-8 font-normal">
          portfolio
        </h1>
        <h2 className="capitalize text-brown -tracking-1 text-56 font-extrabold leading-64 pt-5 dark:text-[#DBD9D5]">
          other works
        </h2>
      </div>
      <div className="pt-16 bg-white flex flex-col gap-y-8 dark:bg-[#1A1D1A]">
        <div className="w-full flex items-center gap-x-7">
          <div
            className="bg-intrepid-image flex-[0.4] h-416 relative bg-center bg-no-repeat bg-cover rounded-md"
            onMouseEnter={() => handleMouseHover(intrepidRef)}
            onMouseLeave={() => handleMouseLeave(intrepidRef)}
          >
            <div className="absolute hover:bg-pink-1 w-full h-416 hover:bg-opacity-[0.32] flex flex-col justify-end rounded-md">
              <div
                className="pl-46 pb-42 flex flex-col gap-y-[14px]"
                ref={intrepidRef}
              >
                <p className="text-white text-40 leading-48 capitalize">
                  intrepid
                </p>
                <button
                  type="button"
                  className="capitalize text-brown bg-white w-102 h-38 rounded-[19px]"
                >
                  <a href="https://spaces.intrepid.com.ng/" target="_blank">
                    view
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex-[0.6] h-416 relative bg-sebigift-image bg-center bg-no-repeat bg-cover rounded-md"
            onMouseEnter={() => handleMouseHover(sebigiftRef)}
            onMouseLeave={() => handleMouseLeave(sebigiftRef)}
          >
            <div className="absolute hover:bg-pink-1 w-full h-416 hover:bg-opacity-[0.32] flex flex-col justify-end rounded-md">
              <div
                className="pl-46 pb-42 flex flex-col gap-y-[14px]"
                ref={sebigiftRef}
              >
                <p className="text-white text-40 leading-48 capitalize">
                  sebigift
                </p>
                <button
                  type="button"
                  className="capitalize text-brown bg-white w-102 h-38 rounded-[19px]"
                >
                  <a href="https://sabigift2021.netlify.app/" target="_blank">
                    view
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-7">
          <div
            className="bg-odiopay-image flex-[0.6] h-416 relative bg-center bg-no-repeat bg-cover rounded-md"
            onMouseEnter={() => handleMouseHover(odiopayRef)}
            onMouseLeave={() => handleMouseLeave(odiopayRef)}
          >
            <div className="absolute hover:bg-pink-1 w-full h-416 hover:bg-opacity-[0.32] flex flex-col justify-end rounded-md">
              <div
                className="pl-46 pb-42 flex flex-col gap-y-[14px]"
                ref={odiopayRef}
              >
                <p className="text-white text-40 leading-48 capitalize">
                  odiopay
                </p>
                <button
                  type="button"
                  className="capitalize text-brown bg-white w-102 h-38 rounded-[19px]"
                >
                  <a href="https://www.odiopay.com/" target="_blank">
                    view
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-[0.4] h-416 relative bg-intrepid bg-center bg-no-repeat bg-cover rounded-md">
            <div className="absolute hover:bg-pink-1 w-full h-416 hover:bg-opacity-[0.32] flex flex-col justify-end rounded-md"></div>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-7">
          <div
            className="bg-secureshop-image flex-[0.5] h-416 relative bg-center bg-no-repeat bg-cover rounded-md"
            onMouseEnter={() => handleMouseHover(secureshopRef)}
            onMouseLeave={() => handleMouseLeave(secureshopRef)}
          >
            <div className="absolute hover:bg-brown-1 w-full h-416 hover:bg-opacity-[0.32] flex flex-col justify-end rounded-md">
              <div
                className="pl-46 pb-42 flex flex-col gap-y-[14px]"
                ref={secureshopRef}
              >
                <p className="text-white text-40 leading-48 capitalize">
                  secureshop
                </p>
                <button
                  type="button"
                  className="capitalize text-brown bg-white w-102 h-38 rounded-[19px]"
                >
                  <a href="https://secureshop.ng/" target="_blank">
                    view
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex-[0.5] h-416 relative bg-smsporte-image bg-center bg-no-repeat bg-cover rounded-md"
            onMouseEnter={() => handleMouseHover(smsporteRef)}
            onMouseLeave={() => handleMouseLeave(smsporteRef)}
          >
            <div className="absolute hover:bg-pink-1 w-full h-416 hover:bg-opacity-[0.32] flex flex-col justify-end rounded-md">
              <div
                className="pl-46 pb-42 flex flex-col gap-y-[14px]"
                ref={smsporteRef}
              >
                <p className="text-white text-40 leading-48 capitalize">
                  smsPorte
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-336 bg-dark-4 rounded-md top-108 relative flex items-center justify-between px-100 dark:bg-[#3E3C3B]">
        <div className="absolute -top-75 left-100">
          <img src={starImage} alt="" />
        </div>
        <div className="flex flex-col gap-y-13">
          <h1 className="text-orange-1 uppercase tracking-3 font-semibold leading-8 text-base">
            connect with me
          </h1>
          <p className="text-grey-2 font-bold leading-8 text-2xl">
            I Help Product Ideas Move Faster
          </p>
          <div className="pt-[10px]">
            {" "}
            <button className="uppercase text-white bg-orange-1 rounded-md w-154 h-48 hover:bg-orange-3">
              <a href="#contact">contact me</a>
            </button>
          </div>{" "}
        </div>
        <div>
          <img src={blockImage} alt="" />
        </div>
        <div>
          <img src={path} alt="" />
        </div>
      </div>
      <div className="w-full mt-[200px] flex items-center gap-x-72 pb-[120px] dark:bg-[#1A1D1A]">
        <div className="flex-[0.5]">
          <img src={blurryImage} alt="" />
        </div>
        <div className="relative flex-[0.5] flex flex-col gap-y-23">
          <div className="absolute top-0 right-0">
            <img src={quotesImage} alt="" />
          </div>
          <h1 className="text-orange-1 uppercase tracking-3 font-normal leading-8 text-base">
            words
          </h1>
          <p className="text-brown text-3xl font-semibold leading-44 dark:text-[#B5B6CD]">
            The main tenet of design thinking is empathy for the people you’re
            trying to design for. Leadership is exactly the same thing –
            building empathy for the people that you’re entrusted to help.
          </p>
          <div>
            <p className="text-brown text-base leading-8 dark:text-[#E3E2E0]">– David Kelley</p>
            <p className="text-dark-1 text-sm leading-6 font-light dark:text-[#DBD9D5]">
              Founder of IDEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherWorks;
