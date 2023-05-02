import React from "react";
import jeetarImage from "../assets/images/jeetar-image.svg";
import faramoveImage from "../assets/images/faramove-image.svg";
import zeptaImage from "../assets/images/zapta-image.svg";
import kloftImage from "../assets/images/kloft-image.svg";
import rectangle from "../assets/images/rectangle.svg";
import prepbookImage from "../assets/images/prepbook-image.svg";
import voixoutImage from "../assets/images/voixout-image.svg";
import woozeeImage from "../assets/images/woozee-image.svg";
import realproImage from "../assets/images/realpro-image.svg";
import AnimationEffect from "./AnimationEffect";

const LatestWorks = () => {
  return (
    <main className="w-full" id="portfolio">
      <section className="bg-blue-1 w-full py-120 px-12 lg:px-16 xl:px-135 dark:bg-[#1A1C1D]">
        <div className="w-full text-center">
          <h1 className="tracking-3 uppercase text-orange-1">portfolio</h1>
          <h2 className="capitalize text-brown -tracking-1 text-[40px] sm:text-56 font-extrabold leading-64 pt-5 dark:text-[#DBD9D5]">
            latest works
          </h2>
        </div>
        <AnimationEffect>
          <div className="pt-50 flex flex-col l:flex-row items-center gap-y-[30px] gap-x-98">
            <aside className="flex-[0.5]">
              <h3 className="tracking-3 uppercase text-orange-1 font-semibold">
                jeetar
              </h3>
              <h4 className="text-[32px] leading-[44px] sm:text-4xl md:text-40 sm:leading-48 text-brown font-extrabold pt-17 dark:text-[#DBD9D5]">
                eCommerce - Raised Over $200k in Funding
              </h4>
              <p className="line-clamp-3 l:line-clamp-none text-brown text-base font-normal leading-8 pt-22 pb-4 dark:text-[#DBD9D5]">
                Jeetar is that super ecommerce solution that allows users to
                shop for items with ease and get deliveries in 20minutes or
                less. Designed to simplify the complex operation of admins,
                merchants and riders interelating at the same time.
              </p>
              <button className="hidden w-154 h-48 rounded-md bg-orange-1 l:inline-block text-white text-sm font-semibold leading-14 capitalize hover:bg-orange-3">
                <a href="https://www.jeetar.com/" target="_blank">
                  view site
                </a>
              </button>
            </aside>
            <aside className="flex-[0.5]">
              <img src={jeetarImage} alt="" />
            </aside>
          </div>
          <div className="pt-[30px]">
            <button className="l:hidden w-154 h-48 rounded-md bg-orange-1 inline-block text-white text-sm font-semibold leading-14 capitalize hover:bg-orange-3">
              <a href="https://www.jeetar.com/" target="_blank">
                view site
              </a>
            </button>
          </div>
        </AnimationEffect>
      </section>
      <section className="w-full bg-light-yellow4 py-124 px-12 lg:px-16 xl:px-135 flex flex-col gap-y-244 dark:bg-[#181A1B]">
        <AnimationEffect>
          <div className="w-full flex items-center gap-x-24 gap-y-[30px] flex-col-reverse l:flex-row">
            <aside className="l:flex-[0.5] flex flex-col gap-y-[30px]">
              <img src={faramoveImage} alt="" />
              <button className="l:hidden w-154 h-48 rounded-md bg-orange-1 inline-block text-white text-sm font-semibold leading-14 capitalize hover:bg-orange-3">
                <a href="https://faramove.com/" target="_blank">
                  view site
                </a>
              </button>
            </aside>
            <aside className="flex-[0.5]">
              <h3 className="tracking-3 uppercase text-orange-1 font-semibold">
                faramove
              </h3>
              <h4 className="text-[32px] leading-[44px] sm:text-4xl md:text-40 sm:leading-48 text-brown font-extrabold pt-17 dark:text-[#DBD9D5]">
                Front-ranking in fast and reliable logistics
              </h4>
              <p className="line-clamp-3 l:line-clamp-none text-brown text-base font-normal leading-8 pt-22 pb-4 dark:text-[#E3E2E0]">
                Faramove offers an on-demand shipping & delivery of goods to
                individuals, start-ups and large corporations. It is a SaaS
                product that uses bikes, vans and truck hire for light or heavy
                moveables, locally, nationally and internationally.
              </p>
              <button className="hidden w-154 h-48 rounded-md bg-orange-1 l:inline-block text-white text-sm font-semibold leading-14 capitalize hover:bg-orange-3">
                <a href="https://faramove.com/" target="_blank">
                  view site
                </a>
              </button>
            </aside>
          </div>
        </AnimationEffect>
        <AnimationEffect>
          {" "}
          <div className="w-full flex items-center gap-x-102 gap-y-[30px] flex-col l:flex-row">
            <aside className="flex-[0.5]">
              <h3 className="tracking-3 uppercase text-orange-1 font-semibold">
                zepta
              </h3>
              <h4 className="text-[32px] leading-[44px] sm:text-4xl md:text-40 sm:leading-48 text-brown font-extrabold pt-17 dark:text-[#DBD9D5]">
                Single and group online commerce at its peak
              </h4>
              <p className="line-clamp-3 l:line-clamp-none text-brown text-base font-normal leading-8 pt-22 pb-4 dark:text-[#E3E2E0]">
                ZEPTA is a social commerce platform that undertakes retail
                distribution, enabling small retail merchants to connect and
                sell their products effectively via social media channels and
                earn money from single and group purchases.
              </p>
              <button className="hidden w-154 h-48 rounded-md bg-orange-1 l:inline-block text-white text-sm font-semibold leading-14 capitalize hover:bg-orange-3">
                <a href="https://zepta-landing.netlify.app/" target="_blank">
                  view site
                </a>
              </button>
            </aside>
            <aside className="flex-[0.5]">
              <img src={zeptaImage} alt="" />
            </aside>
          </div>
          <div className="pt-[30px]">
            <button className="l:hidden w-154 h-48 rounded-md bg-orange-1 inline-block text-white text-sm font-semibold leading-14 capitalize hover:bg-orange-3">
              <a href="https://zepta-landing.netlify.app/" target="_blank">
                view site
              </a>
            </button>
          </div>
        </AnimationEffect>
      </section>{" "}
      <AnimationEffect>
        <section className="w-full px-12 lg:px-16 xl:px-135 pt-120 pb-100 bg-light-yellow flex items-center gap-x-76 gap-y-[30px] flex-col-reverse l:flex-row dark:bg-[#202122]">
          <aside className="l:flex-[0.5] flex flex-col gap-y-[30px]">
            <div className="flex flex-col items-center">
              <img src={kloftImage} alt="" />
              <img src={rectangle} alt="" />
            </div>
            <button className="l:hidden w-154 h-48 rounded-md bg-orange-1 inline-block text-white text-sm font-semibold leading-14 capitalize hover:bg-orange-3">
              <a href="https://bit.ly/3mtveDC" target="_blank">
                view snippets
              </a>
            </button>
          </aside>
          <aside className="flex-[0.5]">
            <h3 className="tracking-3 uppercase text-orange-1 font-semibold">
              kloft
            </h3>
            <h4 className="text-[32px] leading-[44px] sm:text-4xl md:text-40 sm:leading-48 text-brown font-extrabold pt-17 dark:text-[#DBD9D5]">
              A Property Acquisition Solution
            </h4>
            <p className="line-clamp-3 l:line-clamp-none text-brown text-base font-normal leading-8 pt-22 pb-4 dark:text-[#E3E2E0]">
              Klooft is the go-to-place for all users who need exquisite
              properties to rent and the sellers. Users can also request for
              classic home services such as plumbing, house cleaning, packing
              and movement, electric works, and more
            </p>
            <button className="hidden w-154 h-48 rounded-md bg-orange-1 l:inline-block text-white text-sm font-semibold leading-14 capitalize hover:bg-orange-3">
              <a href="https://bit.ly/3mtveDC" target="_blank">
                view snippets
              </a>
            </button>
          </aside>
        </section>{" "}
      </AnimationEffect>
      <AnimationEffect>
        <section className="w-full bg-light-yellow4 flex items-center gap-y-[30px] flex-col l:flex-row pt-78 pb-88 px-12 lg:px-16 xl:px-135 gap-x-55 dark:bg-[#181A1B]">
          <aside className="flex-[0.5]">
            <h3 className="tracking-3 uppercase text-orange-1 font-semibold">
              prepbook
            </h3>
            <h4 className="text-[32px] leading-[44px] sm:text-4xl md:text-40 sm:leading-48 text-brown font-extrabold pt-17 dark:text-[#DBD9D5]">
              A True-to-classroom Learning experience
            </h4>
            <p className="line-clamp-3 l:line-clamp-none text-brown text-base font-normal leading-8 pt-22 pb-4 dark:text-[#E3E2E0]">
              Prepbook is an online education platform that gives you more than
              your school classrom experience. From secondary school, to
              university courses and professionals, delivering video courses,
              texts and other resources for all.
            </p>
            <button className="hidden w-154 h-48 rounded-md bg-orange-1 l:inline-block text-white text-sm font-semibold leading-14 capitalize hover:bg-orange-3">
              <a href="https://bit.ly/3ydjlo5" target="_blank">
                view snippets
              </a>
            </button>
          </aside>{" "}
          <aside className="flex-[0.5]">
            <img src={prepbookImage} alt="" />
            <div className="pt-[30px]">
              <button className="l:hidden w-154 h-48 rounded-md bg-orange-1 inline-block text-white text-sm font-semibold leading-14 capitalize hover:bg-orange-3">
                <a href="https://bit.ly/3ydjlo5" target="_blank">
                  view snippets
                </a>
              </button>
            </div>
          </aside>
        </section>
      </AnimationEffect>
      <AnimationEffect>
        <section className="w-full bg-white flex items-center gap-y-[30px] flex-col-reverse l:flex-row pt-115 pb-93 px-12 lg:px-16 xl:px-135 gap-x-120 dark:bg-[#181A1B]">
          <aside className="flex-[0.5]">
            <img src={voixoutImage} alt="" />
            <div className="pt-[30px]">
              <button className="l:hidden w-154 h-48 rounded-md bg-orange-1 inline-block text-white text-sm font-semibold leading-14 capitalize hover:bg-orange-3">
                <a
                  href="https://www.figma.com/proto/3uPQ6i2jRPrSFh1i6nv1ik/Portfolio?page-id=21%3A24033&node-id=21%3A25767&viewport=241%2C48%2C0.06&scaling=min-zoom&starting-point-node-id=21%3A26243"
                  target="_blank"
                >
                  view snippets
                </a>
              </button>
            </div>
          </aside>
          <aside className="flex-[0.5]">
            <h3 className="tracking-3 uppercase text-orange-1 font-semibold">
              voixout
            </h3>
            <h4 className="text-[32px] leading-[44px] sm:text-4xl md:text-40 sm:leading-48 text-brown font-extrabold pt-17 dark:text-[#DBD9D5]">
              Voixout - A Freedom Social Media App
            </h4>
            <p className="line-clamp-3 l:line-clamp-none text-brown text-base font-normal leading-8 pt-22 pb-4 dark:text-[#E3E2E0]">
              Voixout is a smart development platform that empowers users with
              undiluted free speech and expression of one’s beliefs, emotions,
              preferences and rights towards establishment of a desirable
              collective change.
            </p>
            <button className="hidden w-154 h-48 rounded-md bg-orange-1 l:inline-block text-white text-sm font-semibold leading-14 capitalize hover:bg-orange-3">
              <a
                href="https://www.figma.com/proto/3uPQ6i2jRPrSFh1i6nv1ik/Portfolio?page-id=21%3A24033&node-id=21%3A25767&viewport=241%2C48%2C0.06&scaling=min-zoom&starting-point-node-id=21%3A26243"
                target="_blank"
              >
                view snippets
              </a>
            </button>
          </aside>
        </section>{" "}
      </AnimationEffect>
      <AnimationEffect>
        <section className="w-full bg-blue-2 flex items-center gap-y-[30px] flex-col l:flex-row py-120 px-12 lg:px-16 xl:px-135 gap-x-120 dark:bg-[#1A1D1A]">
          <aside className="flex-[0.5]">
            <h3 className="tracking-3 uppercase text-orange-1 font-semibold">
              woozee
            </h3>
            <h4 className="text-[32px] leading-[44px] sm:text-4xl md:text-40 text-brown font-extrabold pt-17 dark:text-[#DBD9D5]">
              Have fun | Make money | Give back
            </h4>
            <p className="line-clamp-3 l:line-clamp-none text-brown text-base font-normal leading-8 pt-22 pb-4 dark:text-[#E3E2E0]">
              Woozeee is a lifestyle platform that combines the power of a
              social media daily challenge, live movies watching, ecommerce
              marketplace to create an all-time experience like no other.
            </p>
            <button className="hidden w-154 h-48 rounded-md bg-orange-1 l:inline-block text-white text-sm font-semibold leading-14 capitalize hover:bg-orange-3">
              <a href="https://bit.ly/41QUgg1" target="_blank">
                view snippets
              </a>
            </button>
          </aside>

          <aside className="flex-[0.5]">
            <img src={woozeeImage} alt="" />
            <div className="pt-[30px]">
              <button className="l:hidden w-154 h-48 rounded-md bg-orange-1 inline-block text-white text-sm font-semibold leading-14 capitalize hover:bg-orange-3">
                <a href="https://bit.ly/41QUgg1" target="_blank">
                  view snippets
                </a>
              </button>
            </div>
          </aside>
        </section>{" "}
      </AnimationEffect>
      <AnimationEffect>
        <section className="w-full bg-light-yellow4 flex items-center py-120 gap-y-[30px] flex-col-reverse l:flex-row px-12 lg:px-16 xl:px-135 gap-x-120 dark:bg-[#181A1B]">
          <aside className="flex-[0.5]">
            <img src={realproImage} alt="" />
            <div className="py-[30px]">
              <button className="l:hidden w-154 h-48 rounded-md bg-orange-1 inline-block text-white text-sm font-semibold leading-14 capitalize hover:bg-orange-3">
                <a
                  href="https://www.figma.com/proto/3uPQ6i2jRPrSFh1i6nv1ik/Portfolio?page-id=19%3A9839&amp%3Bnode-id=20%3A15159&amp%3Bviewport=241%2C48%2C0.04&amp%3Bscaling=min-zoom&amp%3Bstarting-point-node-id=20%3A15159&node-id=1%3A33331&starting-point-node-id=1%3A33331"
                  target="_blank"
                >
                  view snippets
                </a>
              </button>
            </div>
          </aside>

          <aside className="flex-[0.5]">
            <h3 className="tracking-3 uppercase text-orange-1 font-semibold">
              realpro
            </h3>
            <h4 className="text-[32px] leading-[44px] sm:text-4xl md:text-40 text-brown font-extrabold pt-17 dark:text-[#DBD9D5]">
              A COMMUNITY OF HOME SEEKERS & SELLERS
            </h4>
            <p className="line-clamp-3 l:line-clamp-none text-brown text-base font-normal leading-8 pt-22 pb-4 dark:text-[#E3E2E0]">
              RealPro creates a convenience for buyers, tenants, landlords
              business owners and browsers interested in immovable property, and
              collect content in the form of advertisements from private
              sellers.
            </p>
            <button className="hidden w-154 h-48 rounded-md bg-orange-1 l:inline-block text-white text-sm font-semibold leading-14 capitalize hover:bg-orange-3">
              <a
                href="https://www.figma.com/proto/3uPQ6i2jRPrSFh1i6nv1ik/Portfolio?page-id=19%3A9839&amp%3Bnode-id=20%3A15159&amp%3Bviewport=241%2C48%2C0.04&amp%3Bscaling=min-zoom&amp%3Bstarting-point-node-id=20%3A15159&node-id=1%3A33331&starting-point-node-id=1%3A33331"
                target="_blank"
              >
                view snippets
              </a>
            </button>
          </aside>
        </section>{" "}
      </AnimationEffect>
    </main>
  );
};

export default LatestWorks;
