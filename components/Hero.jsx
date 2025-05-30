import React from "react";
import Badge from "./Badge";
import SecondaryButton from "./Buttons/Secondary-Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative hero-section flex flex-col items-center justify-center min-h-screen px-4">
      <div className="bg-glow absolute w-[1000px] h-[1000px]">
        <Image
          src="/images/circles.png"
          alt="Hero circles"
          width={1000}
          height={1000}
        />
        <div className=""></div>
      </div>

      <div className="hero-content mt-40 mb-12 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <Badge />

        <h1 className="hero-title hero-text-animate hero-gradient-text mb-6">
          Boost your <br /> rankings with AI.
        </h1>
        <p className="text-lg md:text-xl text-white mb-6 max-w-2xl hero-text-animate">
          Elevate your site's visibility effortlessly with AI, where <br />
          smart technology meets user-friendly SEO tools.
        </p>
        <div className="hero-text-animate">
          <SecondaryButton text="Start for free" />
        </div>
      </div>

      <div className="hero-image hero-img-animate flex items-center justify-center rounded-[10px] overflow-hidden">
        <div className="hero-image-inner p-2 bg-white/10 border border-white/15">
          <Image
            src="/hero-img-app-screen.png"
            alt="Hero Image"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[20rem] bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
