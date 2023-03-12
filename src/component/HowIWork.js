import React from "react";

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
      <div className="flex gap-x-69">
        <aside className="flex-[0.5] pt-98">
          <h2 className="tracking-3 uppercase text-orange-1">how i work</h2>
          <h3 className="text-brown text-40 font-extrabold leading-48 pt-17">
            How I break Projects Into Easy Chunks
          </h3>
          <p className="text-brown pt-31 leading-8">
            With my technical skills, user research, design understanding,
            business mindedness and ability to put myself in both the users’ and
            merchants’ shoes, I make problems seamless and easy to solve.
          </p>
        </aside>
        <aside className="flex-[0.5] pt-190 flex flex-col gap-y-80">
          <div className="flex items-center gap-x-51">
            <span className="text-6xl leading-80 text-brown font-extrabold -tracking-2">
              1
            </span>
            <p className="text-brown font-bold leading-8 text-sm">
              Understanding user needs/pains via research.
            </p>
          </div>
          <div className="flex items-center gap-x-51">
            <span className="text-6xl leading-80 text-brown font-extrabold -tracking-2">
              2
            </span>
            <p className="text-brown font-bold leading-8 text-sm">
              Technical analysis of problem and presentation.
            </p>
          </div>
          <div className="flex items-center gap-x-51">
            <span className="text-6xl leading-80 text-brown font-extrabold -tracking-2">
              3
            </span>
            <p className="text-brown font-bold leading-8 text-sm">
              Solving of problem via interface design.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HowIWork;
