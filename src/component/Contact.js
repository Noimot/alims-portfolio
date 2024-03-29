import React, { useState } from "react";
import mapPin from "../assets/images/map-pin.svg";
import map from "../assets/images/map.svg";
import phoneIcon from "../assets/images/phone-icon.svg";
import emailIcon from "../assets/images/email-icon.svg";
import addressIcon from "../assets/images/address-icon.svg";
import contactIcon from "../assets/images/contact-shapes.svg";
import { send } from "emailjs-com";

const Map = () => {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    setContactInfo({ ...contactInfo, email: "", subject: "", message: "" });
  };
  return (
    <div className="w-full dark:bg-[#000000]" id="contact">
      <div className="w-full h-screen bg-map bg-center bg-no-repeat bg-cover relative px-[23px] l:px-0 l:pl-135 flex items-center">
        <div className="absolute top-10 xl:top-[44%] right-5 xl:right-[32%] w-[20px] md:w-[72px]">
          <img src={mapPin} alt="" className="w-full" />
        </div>
        <div className="z-[100] w-auto l:w-470 h-464 bg-white rounded-md pl-48 pr-47 pb-48 pt-57 dark:bg-[#202122]">
          <h1 className="text-brown text-2xl leading-8 font-bold dark:text-[#DBD9D5]">
            Drop by, love to hear from you!
          </h1>
          <form
            className="pt-23"
            method="POST"
            target="_blank"
            onSubmit={handleSubmit}
            action="https://formsubmit.co/77f3afeaa534affb16277fd31ed0ae59"
          >
            <div className="flex flex-col gap-y-4">
              <div className="w-full h-48 rounded-md border border-solid border-[#F3D1BF] dark:bg-[#181A1B] dark:border-[#2E2F30]">
                <input
                  type="text"
                  name="email"
                  value={contactInfo.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full h-full placeholder:text-brown placeholder:text-opacity-30 px-4 pt-9 outline-[#F3D1BF] dark:bg-[#181A1B] dark:placeholder:text-[#DBD9D5] dark:outline-[#DBD9D5] dark:text-[#DBD9D5]"
                />
              </div>
              <div className="w-full h-48 rounded-md border border-solid border-[#F3D1BF] dark:bg-[#181A1B] dark:border-[#2E2F30]">
                <input
                  type="text"
                  name="subject"
                  value={contactInfo.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full h-full placeholder:text-brown placeholder:text-opacity-30 px-4 pt-9 outline-[#F3D1BF] dark:bg-[#181A1B] dark:placeholder:text-[#DBD9D5] dark:outline-[#DBD9D5] dark:text-[#DBD9D5]"
                />
              </div>
              <div className="w-full h-[96px] rounded-md border border-solid border-[#F3D1BF] dark:bg-[#181A1B] dark:border-[#2E2F30]">
                <textarea
                  name="message"
                  value={contactIcon.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full h-full resize-none placeholder:text-brown placeholder:text-opacity-30 px-4 pt-9 outline-[#F3D1BF] dark:bg-[#181A1B] dark:placeholder:text-[#DBD9D5] dark:outline-[#DBD9D5] dark:text-[#DBD9D5]"
                ></textarea>
              </div>
            </div>
            <div className="pt-9 flex justify-end">
              <button
                className="w-154 h-48 rounded-md text-white bg-orange-1 hover:bg-orange-3"
                type="submit"
              >
                Submit
              </button>
            </div>{" "}
          </form>
        </div>
      </div>
      <div className="w-full px-12 lg:px-16 2xl:px-135 grid l:grid-cols-3 py-120">
        <div className="hover:bg-light-yellow2 border border-solid border-light-yellow2 rounded-tl-md rounded-tr-md l:rounded-tr-none l:rounded-bl-md flex flex-col gap-y-[26px] pl-12 py-8 dark:hover:bg-[#352E2E]">
          <div className="flex items-center gap-x-6">
            <span className="flex items-center justify-center w-16 h-16 bg-orange-1 rounded-full">
              <img src={phoneIcon} alt="" />
            </span>
            <p className="tracking-3 uppercase text-orange-1 text-base leading-8 font-normal dark:hover:text-[#ffffff]">
              phone
            </p>
          </div>
          <p className="text-brown leading-8 text-base l:text-sm lg:text-base xl:text-xl dark:text-[#DBD9D5]">
            (+234) 81-612-1289-000
          </p>
        </div>
        <div className="hover:bg-light-yellow2 border border-solid border-light-yellow2 flex flex-col gap-y-[26px] px-12 py-8 dark:hover:bg-[#352E2E]">
          <div className="flex items-center gap-x-6">
            <span className="flex items-center justify-center w-16 h-16 bg-orange-1 rounded-full">
              <img src={emailIcon} alt="" />
            </span>
            <p className="tracking-3 uppercase text-orange-1 text-base leading-8 font-medium dark:hover:text-[#ffffff]">
              email
            </p>
          </div>
          <p className="break-all text-brown text-base l:text-sm lg:text-base xl:text-xl leading-8 font-medium dark:text-[#DBD9D5] whitespace-break-spaces">
            Ajenifujaabdulalim@gmail.com
          </p>
        </div>
        <div className="hover:bg-light-yellow2 border border-solid border-light-yellow2 l:rounded-tr-md rounded-br-md  rounded-bl-md l:rounded-bl-none flex flex-col gap-y-[26px] pl-12 py-8 dark:hover:bg-[#352E2E]">
          <div className="flex items-center gap-x-6">
            <span className="flex items-center justify-center w-16 h-16 bg-orange-1 rounded-full">
              <img src={addressIcon} alt="" />
            </span>
            <p className="tracking-3 uppercase text-orange-1 text-base leading-8 font-normal dark:hover:text-[#ffffff]">
              address
            </p>
          </div>
          <p className="text-brown leading-8 text-base l:text-sm lg:text-base xl:text-xl dark:text-[#DBD9D5]">
            Manchester, United Kingdom
          </p>
        </div>
      </div>
      <div className="w-full px-12 lg:px-16 xl:px-135 h-auto l:h-542">
        <div className="bg-orange-1 w-full h-full rounded-md flex flex-col-reverse l:flex-row items-center l:pl-100 l:pr-70 pt-94 pb-80 gap-x-55 gap-y-[15px] px-5">
          <div className="l:flex-[0.5] flex flex-col gap-y-7">
            <h1 className="-tracking-1 text-white text-[40px] leading-[48px] l:leading-[42px] lg:leading-[48px] 2xl:text-56 2xl:leading-64 font-extrabold">
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
          <div className="l:flex-[0.5]">
            <img src={contactIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
