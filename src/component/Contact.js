import React from "react";
import mapPin from "../assets/images/map-pin.svg";
import map from "../assets/images/map.svg";
import phoneIcon from "../assets/images/phone-icon.svg";
import emailIcon from "../assets/images/email-icon.svg";
import addressIcon from "../assets/images/address-icon.svg";
import contactIcon from "../assets/images/contact-shapes.svg";

const Map = () => {
  return (
    <div className="w-full pt-121" id="contact">
      <div className="w-full h-screen bg-map bg-center bg-no-repeat bg-cover relative pl-135 flex items-center">
        <div className="absolute top-[44%] right-[32%]">
          <img src={mapPin} alt="" />
        </div>
        <div className="w-470 h-464 bg-white rounded-md pl-48 pr-47 pb-48 pt-57">
          <h1 className="text-brown text-2xl leading-8 font-bold">
            Drop by, love to hear from you!
          </h1>
          <form className="pt-23">
            <div className="flex flex-col gap-y-4">
              <div className="w-full h-48 rounded-md border border-solid border-orange-1 px-4 pt-9">
                <input
                  type="text"
                  placeholder="Your email"
                  className="w-full h-full placeholder:text-brown placeholder:text-opacity-30"
                />
              </div>
              <div className="w-full h-48 rounded-md border border-solid border-orange-1 px-4 pt-9">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full h-full placeholder:text-brown placeholder:text-opacity-30"
                />
              </div>
              <div className="w-full h-[96px] rounded-md border border-solid border-orange-1 px-4 pt-9">
                <textarea
                  name="message"
                  id=""
                  placeholder="Message"
                  className="w-full h-full resize-none placeholder:text-brown placeholder:text-opacity-30"
                ></textarea>
              </div>
            </div>
            <div className="pt-9 flex justify-end">
              <button className="w-154 h-48 rounded-md text-white bg-orange-1">
                {" "}
                Submit
              </button>
            </div>{" "}
          </form>
        </div>
      </div>
      <div className="w-full px-135 grid grid-cols-3 py-120">
        <div className="border border-solid border-light-yellow2 rounded-tl-md rounded-bl-md flex flex-col gap-y-[26px] pl-12 py-8">
          <div className="flex items-center gap-x-6">
            <span className="flex items-center justify-center w-16 h-16 bg-orange-1 rounded-full">
              <img src={phoneIcon} alt="" />
            </span>
            <p className="tracking-3 uppercase text-orange-1 text-base leading-8 font-normal">
              phone
            </p>
          </div>
          <p className="text-brown leading-8 text-xl">(+234) 81-612-1289-000</p>
        </div>
        <div className="bg-light-yellow5 border border-solid border-light-yellow2 flex flex-col gap-y-[26px] pl-12 py-8">
          <div className="flex items-center gap-x-6">
            <span className="flex items-center justify-center w-16 h-16 bg-orange-1 rounded-full">
              <img src={emailIcon} alt="" />
            </span>
            <p className="tracking-3 uppercase text-brown text-base leading-8 font-medium">
              email
            </p>
          </div>
          <p className=" text-brown text-xl leading-8 font-medium">
            Abdulalimajenifuja@gmail.com
          </p>
        </div>
        <div className="border border-solid border-light-yellow2 rounded-tr-md rounded-br-md flex flex-col gap-y-[26px] pl-12 py-8">
          <div className="flex items-center gap-x-6">
            <span className="flex items-center justify-center w-16 h-16 bg-orange-1 rounded-full">
              <img src={addressIcon} alt="" />
            </span>
            <p className="tracking-3 uppercase text-orange-1 text-base leading-8 font-normal">
              address
            </p>
          </div>
          <p className="text-brown leading-8 text-xl">Lagos, Nigeria</p>
        </div>
      </div>
      <div className="w-full px-135 h-542">
        <div className="bg-orange-1 w-full h-full rounded-md flex items-center pl-100 pr-70 pt-94 pb-80 gap-x-55">
          <div className="flex-[0.5] flex flex-col gap-y-7">
            <h1 className="-tracking-1 text-white text-56 leading-64 font-extrabold">
              I’m Here to Help Build Your Dream Project
            </h1>
            <p className="text-base font-normal leading-8 text-white pb-[6px]">
              Design is never about aesthetics only, even though appearance
              appeals, rather, it is more about solving the problems of the
              user.
            </p>
            <button className="w-154 h-48 rounded-md bg-white rounded-5xl text-brown font-semibold text-sm leading-[14px] uppercase">
              <a href="#contact">contact me</a>
            </button>
          </div>
          <div className="flex-[0.5]">
            <img src={contactIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
