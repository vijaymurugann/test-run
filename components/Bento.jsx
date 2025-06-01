import React from "react";
import Image from "next/image";

const Bento = () => {
  return (
    <section className="max-w-7xl mx-auto my-32 px-4">
      <div className="max-w-xl mb-12 mx-auto text-center">
        <h3 className="text-white text-2xl md:text-4xl font-medium">
          Harness the power of AI, making search engine optimization intuitive
          and effective for all skill levels.
        </h3>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {/* Grid 1 */}
          <div className="md:col-span-1 bg-black/80 rounded-2xl p-8 min-h-[380px] flex flex-col justify-between items-center border border-white/15">
            <Image
              src="/images/bento-img-1.png"
              alt="SEO goal setting"
              width={280}
              height={280}
              className="mb-6"
            />
            <div>
              <h4 className="text-white font-medium mb-2">
                SEO goal setting
              </h4>
              <p className="text-white/70 ">
                Helps you set and achieve SEO goals with guided assistance.
              </p>
            </div>
          </div>
          {/* Grid 2 */}
          <div className="md:col-span-2 rounded-2xl p-8 min-h-[380px] flex flex-col justify-end relative overflow-hidden bento-gradient">
            <div className="relative w-full h-full  bento-gradient">
              <Image
                src="/images/hero-img-app-screen.png"
                alt="User-friendly dashboard"
                fill
                className="opacity-60 absolute object-cover"
              />
            </div>

            <div className="relative z-10">
              <h4 className="text-white font-medium mb-2">
                User-friendly dashboard
              </h4>
              <p className="text-white/70  max-w-[300px]">
                Perform complex SEO audits and optimizations with a single
                click.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {/* Grid 2 */}
          <div className="md:col-span-2 rounded-2xl p-8 min-h-[380px] flex flex-col justify-end relative overflow-hidden bento-gradient">
            <div className="relative w-full h-full p-5">
              <Image
                src="/images/bento-graph.png"
                alt="User-friendly dashboard"
                fill
                className="object-contain absolute"
              />
            </div>

            <div className="relative z-10">
              <h4 className="text-white font-medium mb-2">
                Visual reports
              </h4>
              <p className="text-white/70  max-w-[300px]">
                Visual insights into your site’s performance.
              </p>
            </div>
          </div>
          {/* Grid 1 */}
          <div className="md:col-span-1 bg-black/80 rounded-2xl p-8 min-h-[380px] flex flex-col justify-between items-center border border-white/15">
            <Image
              src="/images/bento-img-2.png"
              alt="SEO goal setting"
              width={220}
              height={220}
              className="mb-6"
            />
            <div>
              <h4 className="text-white font-medium mb-2">
                Smart Keyword Generator
              </h4>
              <p className="text-white/70 ">
                Automatic suggestions and the best keywords to target.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bento;
