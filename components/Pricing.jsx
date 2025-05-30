import Image from "next/image";
import React from "react";
import PrimaryButton from "./Buttons/Primary-Button";

const pricingPlans = [
  {
    title: "Plus",
    price: "$29/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
    ],
  },
  {
    title: "Pro",
    price: "$79/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
      "Content suggestions",
      "Link optimization",
    ],
  },
  {
    title: "Business",
    price: "$149/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
      "Content suggestions",
      "Link optimization",
      "Multi-user access",
      "API integration",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="w-screen px-4 max-w-7xl mx-auto flex flex-col items-center justify-center">
      <div className=" mx-auto py-[76px] px-[50px] text-center">
        <h3 className="text-white text-[56px] font-medium">Pricing</h3>
        <p className="max-w-[500px] text-white text-[20px] font-normal">
          Choose the right plan to meet your SEO <br /> needs and start
          optimizing today.
        </p>
      </div>
      <div className="pricing flex gap-4 max-w-5xl w-full">
        {pricingPlans.map((plan, idx) => (
          <div
            key={idx}
            className="flex-1 flex flex-col bg-[#0000000F] border border-white/15 rounded-[10px] ">
            <div className="m-4 pb-6 border-b border-[#282729]">
              <h3 className="text-white text-[24px] font-medium">
                {plan.title}
              </h3>
              <span className="text-white/70 text-[16px] font-normal">
                {plan.price}
              </span>
            </div>
            <div className="m-4 flex-1  flex flex-col gap-4">
              {plan.features.map((feature, fIdx) => (
                <p
                  key={fIdx}
                  className="text-white text-[14px] font-normal flex items-center gap-2">
                  <Image
                    src="/icons/tick.svg"
                    alt="check"
                    width={15}
                    height={15}
                    className="inline"
                  />
                  {feature}
                </p>
              ))}
            </div>
            <div className="m-4">
              <PrimaryButton text="Join waitlist" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
