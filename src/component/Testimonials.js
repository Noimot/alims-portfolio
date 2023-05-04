import React from "react";
import StarRating from "./StarRating";
import sodiqImage from "../assets/images/sodiq.svg";
import emmaImage from "../assets/images/emma.svg";
import ibroImage from "../assets/images/ibro.svg";
import faruqImage from "../assets/images/faruq.svg";

const Testimonials = () => {
  return (
    <div className="w-full px-12 lg:px-16 2xl:px-135 dark:bg-[#1A1C1D] py-[120px]" id="testimonials">
      <div className="w-full text-center flex flex-col items-center justify-center">
        <div className="w-full l:w-546">
          <h1 className="tracking-3 uppercase text-orange-1 text-base leading-8 font-normal">
            Testimonials
          </h1>
          <h2 className="capitalize text-brown -tracking-1 text-2xl leading-9 sm:text-[40px] sm:leading-[50px] l:text-56 font-extrabold l:leading-64 pt-5 dark:text-[#E3E2E0]">
            What Professionals Say About Me.
          </h2>
        </div>
      </div>
      <div className="w-full flex pt-60 flex-col l:flex-row">
        <div className="w-full l:flex-[0.5]">
          <div className="hover:bg-light-yellow2 p-12 shadow-4xl rounded-tl-md rounded-tr-md l:rounded-tr-none border border-solid border-light-yellow2 dark:hover:bg-[#504C61]">
            <StarRating />
            <div className="pt-9">
              <p className="line-clamp-3 l:line-clamp-none text-brown text-base font-normal leading-8 dark:text-[#E3E2E0]">
                Abdulalim shows initiative in building out UI/UX architecture
                from scratch, he's a talented designer with skills beyond just
                design as he's always looking for ways to push the boundaries of
                how to make products better, with top attention to details.
              </p>
              <span className="flex justify-start l:justify-end text-dark-1 font-normal text-sm leading-6 dark:text-[#DBD9D5]">
                Linkedin
              </span>
            </div>
            <div className="flex items-center pt-3 gap-x-6">
              <div>
                <img src={faruqImage} alt="" />
              </div>
              <div>
                <p className="text-2xl leading-8 text-brown font-bold dark:text-[#DBD9D5]">
                  Umar-Farouq Yusuf{" "}
                </p>
                <p className="text-dark-1 font-normal text-base leading-6 dark:text-[#DBD9D5]">
                  - Software Eng., Payedin{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="hover:bg-light-yellow2 p-12 shadow-4xl l:rounded-b-md border border-solid border-light-yellow2 dark:hover:bg-[#504C61]">
            <StarRating />
            <div className="pt-9">
              <p className="line-clamp-3 l:line-clamp-none text-brown text-base font-normal leading-8 dark:text-[#E3E2E0]">
                He has an eagle-eye focus and almost never misses a thing worthy
                of observation. He is informed, up-to-date and selfless. Having
                him join any work sphere is an advantage to the team
              </p>
            </div>
            <div className="flex items-center pt-3 gap-x-6">
              <div>
                <img src={sodiqImage} alt="" />
              </div>
              <div>
                <p className="text-2xl leading-8 text-brown font-bold dark:text-[#DBD9D5]">
                  Sodiq Alase{" "}
                </p>
                <p className="text-dark-1 font-normal text-base leading-6 dark:text-[#DBD9D5]">
                  - ESL{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full l:flex-[0.5]">
          <div className="hover:bg-light-yellow2 p-12 shadow-4xl l:rounded-tr-md border border-solid border-light-yellow2 dark:hover:bg-[#504C61]">
            <StarRating />
            <div className="pt-9">
              <p className="line-clamp-3 l:line-clamp-none text-brown text-base font-normal leading-8 dark:text-[#E3E2E0]">
                One of the best user interface designers I have ever met, willing to
                learn new thing, calm, ability to work and deliver a perfected
                job with or without supervision
              </p>
            </div>
            <div className="flex items-center pt-3 gap-x-6">
              <div>
                <img src={emmaImage} alt="" />
              </div>
              <div>
                <p className="text-2xl leading-8 text-brown font-bold dark:text-[#DBD9D5]">
                  Emmanuel Adefila{" "}
                </p>
                <p className="text-dark-1 font-normal text-base leading-6 dark:text-[#DBD9D5]">
                  - Kasha Global Inc.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="hover:bg-light-yellow2 p-12 shadow-4xl rounded-br-md rounded-bl-md l:rounded-bl-none border border-solid border-light-yellow2 dark:hover:bg-[#504C61]">
            <StarRating />
            <div className="pt-9">
              <p className="line-clamp-3 l:line-clamp-none text-brown text-base font-normal leading-8 dark:text-[#E3E2E0]">
                During my time with him, Abdulalim displayed an array of
                profound knowledge in UI/UX, and wowed my team with his
                contagious aura of friendliness. I will recommend him all day
                any day.
              </p>
            </div>
            <div className="flex items-center pt-3 gap-x-6">
              <div>
                <img src={ibroImage} alt="" />
              </div>
              <div>
                <p className="text-2xl leading-8 text-brown font-bold dark:text-[#DBD9D5]">
                  Ibrahim Williams{" "}
                </p>
                <p className="text-dark-1 font-normal text-base leading-6 dark:text-[#DBD9D5]">
                  - JustSchool Ukraine{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-left l:text-center pt-65">
        <button className="w-138 h-48 uppercase text-white bg-orange-1 text-sm leading-14 font-black shadow-5xl rounded-md hover:bg-orange-3">
          <a href="https://www.linkedin.com/in/abdulalim-ajenifuja-8652a8179/" target="_blank">
            View More
          </a>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
