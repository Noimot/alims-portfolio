import React from "react";
import starImage from "../assets/images/star.svg";
import blockImage from "../assets/images/block-image.svg";
import path from "../assets/images/path.svg";
import blurryImage from "../assets/images/blurry-image.svg";
import quotesImage from "../assets/images/quotes-image.svg";

const OtherWorks = () => {
  return (
    <section className="w-full px-135 pt-120">
      <div className="text-center">
        <h1 className="tracking-3 uppercase text-orange-1 text-base leading-8 font-normal">portfolio</h1>
        <h2 className="capitalize text-brown -tracking-1 text-56 font-extrabold leading-64 pt-5">
          other works
        </h2>
      </div>
      <div className="pt-16 bg-white flex flex-col gap-y-8">
        <div className="w-full flex items-center gap-x-7">
          <div className="bg-intrepid-image flex-[0.4] h-416 relative bg-center bg-no-repeat bg-cover">
            <div className="absolute bg-pink-1 w-full h-416 bg-opacity-[0.32] flex flex-col justify-end rounded-md">
              <div className="pl-46 pb-42 flex flex-col gap-y-[14px]">
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
          <div className="flex-[0.6] h-416 relative bg-sebigift-image bg-center bg-no-repeat bg-cover">
            <div className="absolute bg-pink-1 w-full h-416 bg-opacity-[0.32] flex flex-col justify-end rounded-md">
              <div className="pl-46 pb-42 flex flex-col gap-y-[14px]">
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
          <div className="bg-odiopay-image flex-[0.6] h-416 relative bg-center bg-no-repeat bg-cover">
            <div className="absolute bg-pink-1 w-full h-416 bg-opacity-[0.32] flex flex-col justify-end rounded-md">
              <div className="pl-46 pb-42 flex flex-col gap-y-[14px]">
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
          <div className="flex-[0.4] h-416 relative bg-intrepid bg-center bg-no-repeat bg-cover">
            <div className="absolute bg-pink-1 w-full h-416 bg-opacity-[0.32] flex flex-col justify-end rounded-md">
              <div className="pl-46 pb-42 flex flex-col gap-y-[14px]">
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
        </div>
        <div className="w-full flex items-center gap-x-7">
          <div className="bg-secureshop-image flex-[0.5] h-416 relative bg-center bg-no-repeat bg-cover">
            <div className="absolute bg-brown-1 w-full h-416 bg-opacity-[0.32] flex flex-col justify-end rounded-md">
              <div className="pl-46 pb-42 flex flex-col gap-y-[14px]">
                <p className="text-white text-40 leading-48 capitalize">
                  secureshop
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
          <div className="flex-[0.5] h-416 relative bg-smsporte-image bg-center bg-no-repeat bg-cover">
            <div className="absolute bg-pink-1 w-full h-416 bg-opacity-[0.32] flex flex-col justify-end rounded-md">
              <div className="pl-46 pb-42 flex flex-col gap-y-[14px]">
                <p className="text-white text-40 leading-48 capitalize">
                  smsPorte
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
      </div>
      <div className="w-full h-336 bg-dark-4 rounded-md top-108 relative flex items-center justify-between px-100">
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
      <div className="w-full mt-[200px] flex items-center gap-x-72 pb-[120px]">
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
          <p className="text-brown text-3xl font-semibold leading-44">
            The main tenet of design thinking is empathy for the people you???re
            trying to design for. Leadership is exactly the same thing ???
            building empathy for the people that you???re entrusted to help.
          </p>
          <div>
            <p className="text-brown text-base leading-8">??? David Kelley</p>
            <p className="text-dark-1 text-sm leading-6 font-light">Founder of IDEO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherWorks;
