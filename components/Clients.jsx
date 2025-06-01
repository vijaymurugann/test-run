import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <section className="w-screen mb-16 px-4 max-w-7xl mx-auto flex flex-col items-center justify-center">
      <div className="mx-auto py-[76px] px-[50px] text-center">
        <h3 className="text-white text-[56px] font-medium">Our clients</h3>
        <p className="max-w-[500px] text-white text-[20px] font-[400]">
          Hear firsthand how our solutions have <br /> boosted online success
          for users like you.
        </p>
      </div>
      <div className="mt-5">
        <div className="flex items-center justify-center">
          <div className="image-Container relative p-6">
            <div className="absolute top-1/2 -translate-y-1/2 -left-50 w-[1000px] h-[500px] client-gradient z-10"></div>
            <div className="absolute h-[0.5px] w-[70vw] translate-x-[-20%] line-gradient"></div>
            <div className="relative flex">
              <div className="absolute top-1/2 -translate-y-1/2 w-[1px] h-[400px] line-gradient-vertical"></div>
              <Image
                src="/images/client-1.png"
                alt="client"
                width={100}
                height={100}
                className="w-[230px] h-[230px] mx-auto"
              />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[400px] line-gradient-vertical"></div>
            </div>
            <div className="h-[0.5px] absolute w-[70vw] translate-x-[-20%] line-gradient"></div>
          </div>
          <div className="text-Container max-w-[400px] px-8 py-4 bg-1red-500">
            <p className="text-white text-[23px] font-normal mb-6">
              ”This product has completely transformed how I manage my projects
              and deadlines”
            </p>
            <div className="flex flex-col gap-1">
              <p>Talia Taylor</p>
              <p className="text-white/70">
                Digital Marketing Director @ Quantum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
