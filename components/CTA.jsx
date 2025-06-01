import React from "react";
import SecondaryButton from "./Buttons/Secondary-Button";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="m-0 mt-6 md:m-10  overflow-hidden">
      <div className="relative max-w-6xl mx-auto flex flex-col items-center justify-center border border-white/15 p-4 md:p-10 cta-gradient overflow-hidden">
        <Image
          src="/images/pattern-2.png"
          alt="cta-bg"
          fill
          className="object-cover absolute top-0 left-0 -z-10 opacity-15"
        />
        <div className="max-w-[500px] md:p-10 text-center m-4 md:m-10">
          <h3 className="text-3xl md:text-[56px] md:leading-[66px] font-medium">
            AI-driven SEO for everyone.
          </h3>
          <div className="flex flex-col gap-2 md:flex-row bg-black border border-white/15 rounded-lg overflow-hidden w-full max-w-[400px] mx-auto min-h-[54px] mt-6">
            <input
              type="email"
              placeholder="Your email"
              className=" text-white/50 px-4 py-2 flex-1 outline-none rounded-l-lg border-none placeholder-white/50"
            />
            <div className="leading-[28px] w-full md:w-fit text-center">
              <SecondaryButton text="Join waitlist" />
            </div>
          </div>
          <p className="text-white/50 mt-10 font-medium">
            No credit card required | 7-days free trial
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
